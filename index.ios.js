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
        AsyncStorage,
        Navigator
        } from 'react-native';

import LaunchPage from './Component/Main/KELauchpage'
//var Main=require('./Component/Main/XMGMain')
import Storage from 'react-native-storage';
/*var storage = new Storage({
      size: 1000,
      defaultExpires: null,
      enableCache: true,
})
global.storage = storage;*/
class XMGStart extends Component{
      constructor(props){
            super(props)
            this.state={
                  isLogin:false
            }
      }
  render(){
    return(
            <Navigator
                    initialRoute={{name: "启动页", component: LaunchPage}}
                    configureScene={()=>{return Navigator.SceneConfigs.VerticalUpSwipeJump}}
                    renderScene={(route, navigator) =>{
                               let Component=route.component;
                               return <Component {...route.passProps} navigator={navigator}/>
                            }
                           }
                    />
    )
  }

}

AppRegistry.registerComponent('Test', () => XMGStart);