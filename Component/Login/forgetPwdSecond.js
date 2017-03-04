/**
 * Created by liuxiaoya；
 *date 2017/2/14 0014.
 *description:忘记密码
 */
/**
 * Created by liuxiaoya��
 *date 2017/2/23 0014.
 *description:Ա���б�
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		TouchableOpacity,
		Platform,
		TextInput
		} from 'react-native';

import Util from './../Common/util';
import Nav from './../Common/navComponent';
var ForgetPwd = React.createClass({
	  getDefaultProps(){
	  },
	  getInitialState(){
			return{
				  finish:false
			}
	  },

	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="忘记密码" navigator={this.props.navigator}/>
						  <View style={styles.main}>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>新密码</Text>
									  <TextInput style={styles.styleRight} placeholder="6-20位数字、字母或符号的组合" placeholderTextColor="#b2b2b2" underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>重复密码</Text>
									  <TextInput style={styles.styleRight} placeholder="请再次输入密码" placeholderTextColor="#b2b2b2" underlineColorAndroid='transparent'/>
								</View>

						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.finish?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1} onPress={()=>this.SubmitDay()}>
								<Text style={{color:this.state.finish?"#ffffff":"#e6a4c0",fontSize:15}}>确定</Text>
						  </TouchableOpacity>

					</View>
			);
	  }

})
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1"
	  },
	  ViewItem:{
			height:Platform.OS==='ios'?50:44,
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:Util.pixel,
			flexDirection:"row",
			alignItems:'center',
	  },
	  styleLeft:{
			paddingLeft:10,
			width:76,
			fontSize:13,
			color:"#333",

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
			fontSize:13
	  },
	  main:{
			backgroundColor:"#fff",
			marginTop:10
	  },

	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			borderRadius:2,
			justifyContent:'center',
			marginTop:24,
			marginLeft:30,
			marginRight:30
	  }

});
module.exports=ForgetPwd