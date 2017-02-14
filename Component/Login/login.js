/**
 * Created by liuxiaoya；
 *date 2017/2/14 0014.
 *description登录模块
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

import Reg from './../Reg/reg';
import ForgetPwd from './../Login/forgetPwd';
export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
			this.state={
				  login:false,
				  nameClear:false,
				  pwdClear:false,
				  nameValue:"",
				  pwdValue:""
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <View>
						  <Image  source={{uri:'logo'}} style={{width:Util.size.width*0.51,height:Util.size.width*0.072,marginTop:40}} />
						  </View>
						  <View style={styles.LoginView}>
								<Text style={styles.error}>您输入的用户名或密码不正确</Text>
								{Platform.OS=='ios'?
								<View>
									  <View style={{marginTop:10}}>
											<View>
											 <TextInput clearButtonMode="while-editing" onChangeText ={(value)=>this.setState({nameValue:value})} value={this.state.nameValue}  style={styles.TextInputStyle} placeholder="用户名" placeholderTextColor="#d8baf8"/>
											</View>

									  </View>
									  <View style={{marginTop:10}}>
											<View>
											  <TextInput clearButtonMode="while-editing" onChangeText ={(value)=>this.setState({pwdValue:value})} style={styles.TextInputStyle}  value={this.state.pwdValue} placeholder="密码" placeholderTextColor="#d8baf8" secureTextEntry={true} />
											</View>
									  </View>
								</View>:
										<View>
											  <View style={{marginTop:10}}>
													<View>
														  <TextInput onChangeText ={(value)=>this.clearNameState(value)} value={this.state.nameValue}  style={styles.TextInputStyle} placeholder="用户名" placeholderTextColor="#d8baf8" underlineColorAndroid='transparent'/>
													</View>

													{this.renderNameClear()}
											  </View>
											  <View style={{marginTop:10}}>
													<View>
														  <TextInput onChangeText ={(value)=>this.clearPwdState(value)} style={styles.TextInputStyle}  value={this.state.pwdValue} placeholder="密码" placeholderTextColor="#d8baf8" secureTextEntry={true} underlineColorAndroid='transparent' />
													</View>

													{this.renderPwdClear()}
											  </View>
										</View>
									  }
								<View style={{height:20,marginTop:10}}>
									  <TouchableOpacity style={styles.forgetPwd} onPress={this._jump.bind(this,ForgetPwd , "忘记密码")}>
											<Text style={{color:"#ffffff",fontSize:12}}>忘记密码?</Text>
									  </TouchableOpacity>
								</View>
								<TouchableOpacity style={[{backgroundColor:this.state.login?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1}>
									  <Text style={{color:this.state.login?"#ffffff":"#e6a4c0",fontSize:16}}>登录</Text>
								</TouchableOpacity>
						  </View>
						  <TouchableOpacity style={styles.BottomBtn} onPress={this._jump.bind(this,Reg , "注册")}>
								<Text style={{color:"#ffffff",fontSize:16}}>新用户注册</Text>
						  </TouchableOpacity>
					</View>
			);
	  }
	  //用户名清空按钮状态判断
	  clearNameState(value){
			this.setState({
				  nameValue:value
			});
         if(value==""){
			   this.setState({
					 nameClear:false
			   })
		 }else{
			   this.setState({
					 nameClear:true
			   })
		 }
	  }
	  //用户名清空按钮显示判断
	  renderNameClear(){
			if(this.state.nameClear&&Platform.OS!='ios'){
				  return (<TouchableOpacity style={styles.clearBtn} onPress={()=>this.clearNameContent()}>
								<Image source={{uri:'clearmode'}} style={{width:13,height:13}} resizeMode ="cover"/>
						  </TouchableOpacity>)

			}else{
				  return(<TouchableOpacity>
				           </TouchableOpacity>);
			}
	  }
	  //密码清空按钮显示判断
	  renderPwdClear(){
			if(this.state.pwdClear&&Platform.OS!='ios'){
				  return (<TouchableOpacity style={styles.clearBtn} onPress={()=>this.clearPwdContent()}>
						<Image source={{uri:'clearmode'}} style={{width:13,height:13}} resizeMode ="cover"/>
				  </TouchableOpacity>)

			}else{
				  return(<TouchableOpacity>
				  </TouchableOpacity>);
			}
	  }
	  //用户名密码按钮状态判断
	  clearPwdState(value){
			this.setState({
				  pwdValue:value
			});
			if(value==""){
				  this.setState({
						pwdClear:false
				  })
			}else{
				  this.setState({
						pwdClear:true
				  })
			}
	  }
	  clearNameContent(){
			this.setState({
				  nameClear:false,
				  nameValue:""
			});
	  }
	  clearPwdContent(){
			this.setState({
				  pwdClear:false,
				  pwdValue:""
			});
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
			flex:1,
			backgroundColor:"#ac61f2",
			alignItems:'center',
			justifyContent:'space-around'
	  },
	  LoginView:{
			marginLeft:20,
			marginRight:20,
			width:Util.size.width-40
	  },
	  TextInputStyle:{
			color:"#ffffff",
			height:Platform.OS==='ios'?38:32,
			paddingTop:0,
			paddingBottom:0,
			borderBottomWidth:1,
			borderBottomColor:"#ffffff"
	  },
	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
			marginTop:14
	  },
	  forgetPwd:{
           position:'absolute',
			right:0
	  },
	  BottomBtn:{
			width:86,
	  },
	  error:{
			marginTop:30,
			fontSize:13,
			color:'#cc046f'
	  },
	  clearBtn:{
			position:'absolute',
			right:0,
			bottom:9,
			width:13,
			height:13,
			zIndex:2
	  }
});