/**
 * Created by liuxiaoya；
 *date 2017/2/23 0014.
 *description:新增收货地址
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
import Toast from 'react-native-root-toast';
export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
			this.state={
				  finish:false,
				  name:"",
				  mobile:"",
				  code:"",
				  detail:""
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <View style={styles.AddressView}>
								<Nav title="编辑收货地址" navigator={this.props.navigator}/>
								{this.state.isError&&<Text style={styles.error}>您输入的用户名或密码不正确</Text>}
								<View style={styles.item}>
									  <TextInput onChangeText ={(value)=>this.setState({name:value})} style={styles.TextInputStyle}  value={this.state.name} placeholder="收货人姓名" placeholderTextColor="#999999"  underlineColorAndroid='transparent' />
								</View>
								<View style={styles.item}>
									  <TextInput onChangeText ={(value)=>this.setState({mobile:value})} onBlur={()=>this.validateMobile()}  keyboardType="numeric"  style={styles.TextInputStyle}  value={this.state.mobile} placeholder="手机号码" placeholderTextColor="#999999"  underlineColorAndroid='transparent' />
								</View>
								<View style={styles.item}>
									  <TextInput onChangeText ={(value)=>this.setState({code:value})}  style={styles.TextInputStyle}  value={this.state.code} placeholder="省、市、区" placeholderTextColor="#333"  underlineColorAndroid='transparent' />
								</View>
								<View style={styles.item}>
									  <TextInput  onChangeText ={(value)=>this.setState({code:value})}  keyboardType="numeric" style={styles.TextInputStyle}  value={this.state.code} placeholder="邮政编码" placeholderTextColor="#999999"  underlineColorAndroid='transparent' />
								</View>
								<View style={styles.itemMuch}>
									  <TextInput onChangeText ={(value)=>this.setState({detail:value})}  multiline ={true} textAlignVertical="top" style={[styles.TextInputStyle,{height:70,paddingTop:10,paddingBottom:8}]}  value={this.state.detail} placeholder="详细地址" placeholderTextColor="#999999"  underlineColorAndroid='transparent' />
								</View>
						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.finish?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1}>
								<Text style={{color:this.state.login?"#ffffff":"#e6a4c0",fontSize:16,fontFamily:"黑体"}}>保存</Text>
						  </TouchableOpacity>
					</View>
			);
	  }
	  validateMobile(){
			var a=Util.regex.mobile(this.state.mobile)
			if(!a){
				  let toast = Toast.show('手机号码不正确', {
						duration:	Toast.durations.SHORT,
						position: Toast.positions.CENTER
				  })
			}
	  }

}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",

	  },
	  AddressView:{
			backgroundColor:"#fff"
	  },
	  TextInputStyle:{
			color:"#333",
			width:Util.size.width-16,
			height:Platform.OS==='ios'?38:32,
			paddingTop:0,
			paddingBottom:0,
			fontFamily:"黑体",
			fontSize:13
	  },
	  item:{
			flexDirection:'row',
			height:Platform.OS=='ios'?50:44,
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:1,
			alignItems:'center',
			paddingLeft:8
	  },
	  itemMuch:{
			paddingLeft:8
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