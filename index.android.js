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
        Navigator
        } from 'react-native';

import LaunchPage from './Component/Main/KELauchpage'
//import Order from './Component/Mine/KEMine'
//var Main=require('./Component/Main/XMGMain')
class XMGStart extends Component{
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

AppRegistry.registerComponent('kangeaseApp', () => XMGStart);
