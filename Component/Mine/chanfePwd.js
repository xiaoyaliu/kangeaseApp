/**
 * Created by liuxiaoya；
 *date 2017/2/14 0014.
 *description注册模块
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TextInput,
		TouchableOpacity,
		Platform
		} from 'react-native';

import Util from './../Common/util';
import Nav from './../Common/navComponent';

export default class ChangePwd extends Component{
	  constructor(props) {
			super(props);
			this.state={
				  finish:false
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="修改密码" navigator={this.props.navigator}/>
						  <View style={styles.main}>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>验证码</Text>
									  <TextInput style={styles.styleRight}  underlineColorAndroid='transparent'/>
									  <TouchableOpacity style={styles.getCode}>
											<Text style={styles.getCodeText}>获取验证码</Text>
									  </TouchableOpacity>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>新密码</Text>
									  <TextInput style={styles.styleRight} placeholder="8-16位数字、字母或符号的组合" placeholderTextColor="#b2b2b2" underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>重复密码</Text>
									  <TextInput style={[styles.styleRight,{borderBottomWidth:0}]} underlineColorAndroid='transparent'/>
								</View>

						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.finish?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1}>
								<Text style={{color:this.state.login?"#ffffff":"#e6a4c0",fontSize:15,fontFamily:"黑体"}}>保存</Text>
						  </TouchableOpacity>

					</View>
			);
	  }


}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1"
	  },
	  main:{
			backgroundColor:"#fff",
			marginTop:12,
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:Util.pixel,
			borderTopColor:"#d9d9d9",
			borderTopWidth:Util.pixel,
	  },
	  ViewItem:{
			height:Platform.OS==='ios'?42:36,
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:Util.pixel,
			flexDirection:"row",
			alignItems:'center',
			paddingTop:4,
			marginLeft:10
	  },
	  styleLeft:{
			paddingLeft:10,
			width:76,
			fontSize:13,
			color:"#333",
			fontFamily:"黑体"
	  },
	  styleRight:{
			width:Util.size.width-86,
			paddingTop:0,
			paddingBottom:0
	  },
	  getCode:{
			position:"absolute",
			right:12,
			top:4,
			height:Platform.OS==='ios'?42:36,
			alignItems:'center',
			justifyContent:'center'
	  },
	  getCodeText:{
			color:"#f20583",
			fontSize:13,
			fontFamily:"黑体",
	  },
	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
			marginTop:24,
			borderRadius:2,
			width:Util.size.width-70,
			marginLeft:35
	  },

});