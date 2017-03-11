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
import Picker from 'react-native-picker';
export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
			this.state={
				  finish:false
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="实名认证" navigator={this.props.navigator}/>
						  <View style={styles.exegesis}>
								<Image source={{uri:"exegesis_bg"}} style={{width:16,height:16}}/>
								<Text style={{color:"#343434",fontSize:12}}>海关要求购买跨境商品需提供实名信息哦~</Text>
						  </View>
						  <View style={styles.item}>
								<TextInput  style={styles.TextInputStyle} editable={false}  value={this.state.province} placeholder="您的真实姓名" placeholderTextColor="#999"  underlineColorAndroid='transparent' />
						  </View>
						  <View style={styles.item}>
								<TextInput  style={styles.TextInputStyle} editable={false}  value={this.state.province} placeholder="您的身份证号码（将加密处理）" placeholderTextColor="#999"  underlineColorAndroid='transparent' />
						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.finish?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1} onPress={()=>this.submitId()}>
								<Text style={{color:this.state.finish?"#ffffff":"#e6a4c0",fontSize:15}}>提交</Text>
						  </TouchableOpacity>
					</View>
			);
	  }


}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",

	  },
	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			borderRadius:2,
			justifyContent:'center',
			marginTop:24,
			marginLeft:30,
			marginRight:30
	  },
	  Area:{
			width: Util.size.width,
			height: Util.size.height,
			left: 0,
			top:0,
			position: 'absolute',
			backgroundColor: 'rgba(0, 0, 0, 0.3)'
	  },
	  exegesis:{
			flexDirection:"row",
			alignItems:'center',
			paddingLeft:10,
			height:Platform.OS==='ios'?52:46
	  },
	  item:{
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:1,
			backgroundColor:"#fff"
	  },
	  TextInputStyle:{
			color:"#333",
			width:Util.size.width,
			paddingLeft:8,
			height:Platform.OS==='ios'?50:44,
			paddingTop:0,
			paddingBottom:0,
			fontSize:13
	  },
});