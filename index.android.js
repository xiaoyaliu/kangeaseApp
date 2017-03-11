/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
        AppRegistry,
        StyleSheet,
        Text,
        View,
        Navigator,
        AppState,
        Alert
        } from 'react-native';

//import LaunchPage from './Component/Main/KELauchpage'
import LaunchPage from './Component/Shop/uploadId'
import KEMain from './Component/Shop/uploadId'
//import KEMain from './Component/Main/KEMain'
import Util from './Component/Common/util'
class XMGStart extends Component{
      constructor(props){
            super(props)
            this.state={
                  currentAppState: AppState.currentState,
                  isLogin:false,
                  isShow:false,
                  username:""
            }
      }
  render(){
    return(
            <View style={{flex:1}}>
           {this.state.isShow&&
            <Navigator
                    initialRoute={{name: "启动页", component: this.state.isLogin?KEMain:LaunchPage}}
                    //configureScene={()=>{return Navigator.SceneConfigs.VerticalUpSwipeJump}}
                    renderScene={(route, navigator) =>{
                               let Component=route.component;
                               return <Component {...route.passProps} navigator={navigator}/>
                            }
                           }
                    />}
                  </View>
    )
  }
      componentDidMount(){
            this.checkLogin();
            AppState.addEventListener('change', this._handleAppStateChange);
      }
      componentWillUnmount() {
            AppState.removeEventListener('change', this._handleAppStateChange);
      }
      _handleAppStateChange = (nextAppState) => {
            //进入app
            if (this.state.currentAppState.match(/inactive|background/) && nextAppState === 'active') {
                 this.checkLogin();
            }else{
                  //离开App，如果已登录记录离开时间，判断是否过期
                  if(this.state.username!=""&&this.state.username!=null){
                        let time=new Date();
                        Util.setStorage("time",time)
                  }
            }
            this.setState({currentAppState: nextAppState});
      }
      checkLogin(){
            var self=this;
            Util.getStorage("username").then((res)=>{
                  if(res) {
                        this.setState({username: res});
                        Util.getStorage("time").then((data)=>{
                              let currentTime=new Date().valueOf();
                              let time=new Date(res).valueOf();
                              var days=Math.ceil((currentTime-time)/(1000*60*60*24));
                              if(days>3){
                                    Util.removeStorage("username");
                                    self.setState({
                                          isShow:true,
                                          username:""
                                    })
                              }else{
                                    self.setState({
                                          isLogin:true,
                                          isShow:true
                                    })
                              }
                        })
                  }else{
                        self.setState({
                              isShow:true
                        })
                  }
            })
      }
}

AppRegistry.registerComponent('kangeaseApp', () => XMGStart);
