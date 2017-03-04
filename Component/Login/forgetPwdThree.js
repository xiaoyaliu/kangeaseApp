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
		Image,
		TouchableOpacity,
		Platform,
		TextInput
		} from 'react-native';

import Util from './../Common/util';
import Nav from './../Common/navComponent';
var ForgetPwd = React.createClass({
	 render() {
			return (
					<View style={styles.container}>
						  <Nav title="忘记密码" navigator={this.props.navigator}/>
						  <View style={styles.main}>
								<Image source={{uri:"success"}} style={{width:Util.size.width*0.22,height:Util.size.width*0.22,marginTop:Util.size.width*0.18}}/>
								<Text style={{color:"#323232",fontSize:16,marginTop:14}}>恭喜您，找回密码成功！</Text>
						  </View>
						  <TouchableOpacity style={[{backgroundColor:"#f20583"},styles.loginBtn]} activeOpacity ={1} onPress={()=>this.SubmitDay()}>
								<Text style={{color:"#ffffff",fontSize:15}}>立即登录</Text>
						  </TouchableOpacity>

					</View>
			);
	  }

})
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#fff",
	  },
	  main:{
			alignItems:'center',
	  },
	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			borderRadius:2,
			justifyContent:'center',
			marginTop:Util.size.width*0.18,
			marginLeft:30,
			marginRight:30
	  }

});
module.exports=ForgetPwd