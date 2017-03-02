/**
 * Created by liuxiaoya��
 *date 2017/2/6 0006.
 *description 启动页
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
		Platform
		} from 'react-native';

import Util from './../Common/util';
import Login from './../Login/login'
import Reg from './../Reg/reg'

export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
			//this.state={}
	  }
	  render() {
			return (
				<View style={styles.container}>
				   <Image source={{uri:'start_bg'}} style={styles.launchImage}/>
					<View style={styles.ope}>
					   <TouchableOpacity style={styles.loginBtn} onPress={this._jump.bind(this,Login , "登录")}>
					      <Text style={styles.TextStyle}>登录</Text>
					   </TouchableOpacity>
						  <TouchableOpacity style={styles.regBtn} onPress={this._jump.bind(this,Reg , "注册")}>
								<Text style={styles.TextStyle}>注册</Text>
						  </TouchableOpacity>
					</View>
				</View>
			);
	  }
	  _jump(component, title){
			const navigator = this.props.navigator;
			if (navigator){
				  navigator.push({
						component: component,
						title: title,
						params: {

						}
				  });
			}
	  }
}
const styles = StyleSheet.create({
	  container:{
			flex:1
	  },
	  launchImage:{
			flex:1
	  },
	  ope:{
            position:'absolute',
			width:Util.size.width,
			height:Platform.OS=='ios'?48:42,
			bottom:Util.size.height*0.08,
			flexDirection:'row',
			justifyContent: 'space-around'
	  },
	  loginBtn:{
			backgroundColor:"#f20583",
			borderRadius:2,
			width:Util.size.width*0.39,
			justifyContent:'center',
			alignItems:'center'
	  },
	  regBtn:{
			backgroundColor:"#9530f2",
			borderRadius:2,
			justifyContent:'center',
			alignItems:'center',
			width:Util.size.width*0.39
	  },
	  TextStyle:{
			color:'#ffffff',
			fontSize:15,

	  }
});