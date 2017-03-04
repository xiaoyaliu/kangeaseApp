/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description
 */
import React, { Component } from 'react';
import {
		Navigator
		} from 'react-native';

var KEHome=require('./KEHome');
 class KEMain extends Component {
	  constructor(props){
			super(props);
	  }
	  render() {
			return(

					<Navigator
							initialRoute={{name: "主页", component: KEHome}}
							configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}
							renderScene={(route, navigator) =>{
										    let Component=route.component;
										    return <Component {...route.passProps} navigator={navigator}/>
										}
										}
							/>
			)
	  }
}
module.exports=KEMain
