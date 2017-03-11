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
		ScrollView,
		TouchableOpacity,
		Platform
		} from 'react-native';
var TimerMixin = require('react-timer-mixin');
import Util from './../Common/util';
import Nav from './../Common/navComponent';
import  Picker from './../Common/PickerComponent';
import regSuccess from './regSuccess';
var Reg = React.createClass({
			mixins: [TimerMixin],
			getDefaultProps(){
			},
			getInitialState(){
				  return{
						rankName: "",
						rankValue: 0,
						levelData: {},
						picker: false,
						reg: false,
						agree: true,
						userName: false,
						mobile: false,
						code: false,
						pwd: false,
						rePwd: false,
						userNameValue: "",
						nameValue: "",
						companyValue: "",
						mobileValue: "",
						codeValue: "",
						pwdValue: "",
						rePwdValue: "",
						sendCode:false,
						sendText:"获取验证码",
						sendTrue:true
				  }
	  },

	  render(){
			return (
					<View style={styles.container} onStartShouldSetResponder={()=>this.checkReg()}>
						  <Nav title="注册" navigator={this.props.navigator}/>
						  <ScrollView keyboardShouldPersistTaps ="always" style={styles.main}>

								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>用户名</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'
												 onBlur ={()=>this.checkUserName()}
												 onChangeText={(value)=>this.setState({userNameValue:value})}
												 value={this.state.userNameValue}
												  onSubmitEditing={()=>this.checkUserName()}
												 placeholder="请输入3-16位的用户名（汉子、字母、数字）"
												 placeholderTextColor="#b2b2b2" maxLength={16}/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>姓名</Text>
									  <TextInput style={styles.styleRight}
												 onBlur={()=>this.checkReg()}
												 underlineColorAndroid='transparent'
												 onChangeText={(value)=>this.setState({nameValue:value})}
												 value={this.state.nameValue}/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>公司名称</Text>
									  <TextInput style={styles.styleRight}
												 onBlur={()=>this.checkReg()}
												 underlineColorAndroid='transparent'
												 onChangeText={(value)=>this.setState({companyValue:value})}
												 value={this.state.companyValue}/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>手机号</Text>
									  <TextInput keyboardType="numeric" onBlur ={()=>this.checkMobile()}  style={styles.styleRight} underlineColorAndroid='transparent'
												 onChangeText={(value)=>this.setState({mobileValue:value,mobile:false})}
												 value={this.state.mobileValue}/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>验证码</Text>
									  <TextInput style={styles.styleRight} maxLength={6}
												 keyboardType="numeric"
												 underlineColorAndroid='transparent'
												 onChangeText={(value)=>this.checkCode(value)}
												 value={this.state.codeValue}/>
									  <TouchableOpacity style={styles.getCode} onPress={()=>this.Code()}>
											<Text style={styles.getCodeText}>{this.state.sendText}</Text>
									  </TouchableOpacity>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>密码</Text>
									  <TextInput style={styles.styleRight}
												 onBlur ={()=>this.checkPwd()}
												 placeholder="6-20位数字、字母或符号的组合"
												 secureTextEntry={true}
												 placeholderTextColor="#b2b2b2" underlineColorAndroid='transparent'
												 maxLength={20} onChangeText={(value)=>this.setState({pwdValue:value})}
												 value={this.state.pwdValue}/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>重复密码</Text>
									  <TextInput style={styles.styleRight}
												 onBlur ={()=>this.checkRePwd()}
												 underlineColorAndroid='transparent'
												 secureTextEntry={true}
												 maxLength={20}
												 onChangeText={(value)=>this.setState({rePwdValue:value})}
												 value={this.state.rePwdValue}/>
								</View>
								<TouchableOpacity onPress={()=>this.setState({picker:true})}>
									  <View style={styles.ViewItem}>
											<Text style={styles.styleLeft}>等级</Text>
											<Text style={styles.styleRight}>{this.state.rankName}</Text>
											<View style={styles.rightArrow}>
												  <Image source={{uri:"arrow_icon"}} style={styles.arrow}/>
											</View>
									  </View>
								</TouchableOpacity>
								<View style={styles.ViewItem}>
									  <TouchableOpacity style={{alignItems:'center',flexDirection:'row'}}
														onPress={()=>{this.setState({agree:!this.state.agree});this.checkReg()}}>
											{this.state.agree ?
													<Image source={{uri:"checked_circle_icon"}}
														   style={styles.circleIcon} resizeMode="contain"/> :
													<View style={styles.degStyle}></View>
											}
											<Text style={{color:"#3d3d3d",fontSize:10}}>我已阅读并同意《</Text>
											<Text style={{color:"#f20583",fontSize:10}}>康亿海外购注册条款</Text>
									  </TouchableOpacity>
									  {/*<TouchableOpacity navigator={this.props.navigator} onPress={this._jump.bind(this,regItem,"条款")}>
									   <Text style={{color:"#f20583",fontSize:10,}}>康亿海外购注册条款</Text>
									   </TouchableOpacity>*/}
									  <Text style={{color:"#3d3d3d",fontSize:10}}>》</Text>
								</View>


						  <TouchableOpacity
								  style={[{backgroundColor:this.state.reg?"#f20583":"#cc046f"},styles.loginBtn]}
								  activeOpacity={1} onPress={()=>this.regSubmit()}>
								<Text style={{color:this.state.reg?"#ffffff":"#e6a4c0",fontSize:15}}>免费注册</Text>
						  </TouchableOpacity>
						  </ScrollView>
						  {this.state.picker &&
						  <Picker itemTitleName="等级" selectedValue={this.state.rankValue}
								  selectedName={this.state.rankName}
								  onValueChange={(value,name,show) =>{this.setState({rankValue: value,rankName:name,picker:show});this.checkReg()}}>
								{this.renderPick()}
						  </Picker>}

					</View>
			);
	  },
	  //检测是否可以注册
     checkReg(){
		   if(this.state.agree&&this.state.userName&&this.state.nameValue!=""&&this.state.companyValue!=""&&this.state.mobile&&this.state.code&&this.state.pwdValue.length>=6&&this.state.pwdValue===this.state.rePwdValue){
				 this.setState({
					   reg:true
				 })
		   }else{
				 this.setState({
					   reg:false
				 })
		   }
	 },
	  //提交注册信息
	  regSubmit(){
			var self = this;
			if(!this.state.userName){
				  Util.toast("用户名输入不正确");
			}
			else if(this.state.nameValue==""){
				  Util.toast("请输入姓名");
			}
			else if(this.state.companyValue==""){
				  Util.toast("请输入公司名称");
			}
			else if(!this.state.mobile){
				  Util.toast("手机号输入不正确");
			}
			else if(!this.state.code){
				  Util.toast("验证码输入不正确");
			}
			else if(this.state.pwdValue.length<6){
				  Util.toast("密码格式输入不正确");
			}else if(this.state.pwdValue!==this.state.rePwdValue){
				  Util.toast("重复密码输入不正确");
			}else if(!this.state.agree){
				  Util.toast("请同意康亿海外购注册条款");
			}else{
				  this.setState({
						reg:true
				  });
				  let formData = new FormData();
				  formData.append("act", "registerByMobile");
				  formData.append("mobile",this.state.mobileValue);
				  formData.append("pwd", this.state.pwdValue);
				  formData.append("realName",this.state.nameValue);
				  formData.append("company", this.state.companyValue);
				  formData.append("username", this.state.userNameValue);
				  formData.append("rank_id", this.state. rankValue);
				  Util.get(formData, function (data) {
						console.log(data)
						if (data.flag) {
							  const navigator = self.props.navigator;
							  if (navigator) {
									navigator.push({
										  component: regSuccess,
										  title: "注册提交"
									});
							  }
						} else {

						}

				  }, function (err) {
						console.log(err)
				  })
			}

	  },

	  componentDidMount(){
			this.getLevelMsg();
	  },

	  //获取会员等级信息
	  getLevelMsg(){
			var self = this;
			let formData = new FormData();
			formData.append("act", "userLevelInfo");
			Util.get(formData, function (data) {
				  if (data.length > 0) {
						self.setState({
							  levelData: data,
							  rankName: data[0].rank_name,
							  rankValue: data[0].rank_id
						})
				  }

			}, function (err) {
			})
	  },

	  //render等级信息
	  renderPick(){
			var arr = [];
			let data = this.state.levelData;
			for (let i = 0; i < data.length; i++) {
				  arr.push(<Picker.Item label={data[i].rank_name} key={i} value={data[i].rank_id}></Picker.Item>)
			}
			return arr
	  },

	  //获取短信验证码
	  Code(){
			if(this.state.sendTrue){
				  if(this.state.mobile){
						this.sendCode()
				  }else{
						this.setState({
							  sendCode:true
						})
						this.checkMobile();
				  }
			}
			//检查手机号输入是否争取


	  },
	  //发送短信验证码
	  sendCode(){
			let self=this;
			let formData = new FormData();
			formData.append("act", "sendRegisterMessage");
			formData.append("mobile", this.state.mobileValue);
			Util.get(formData, function (data) {
				  console.log(data)
				  if (data.flag) {
						self.setState({
							  sendTrue: false
						});

						let time = 60;
						self.timer = self.setInterval(function () {
							  self.setState({
									sendText: "重新发送（" + time + "s）"
							  });
							  if (time == 0) {
									self.setState({
										  sendText: "发送验证码",
										  sendTrue: true
									});
									self.clearInterval(self.timer)
							  }
							  time = time - 1;
						}, 1000)
				 }
			}, function (err) {
			})
	  },
	  //检验验证码输入是否正确
	  checkCode(value){
			let self=this;
			this.setState({codeValue:value,code:false});
			if(value.length===6&&this.state.mobile){
				  let formData = new FormData();
				  formData.append("act", "checkPhoneMessage");
				  formData.append("mobile", self.state.mobileValue);
				  formData.append("messagecode", value);
				  Util.get(formData, function (data) {
						console.log(data)
                         if(data.flag){
							   self.setState({code:true});
							   self.checkReg()
						 }else{
							   Util.toast(data.msg)
							   self.setState({code:false});
						 }
				  }, function (err) {
				  });
			}
	  },
	  //检查手机号码
	  checkMobile() {
			let mobile = this.state.mobileValue;
			let self = this;
				  if (Util.regex.mobile(mobile)) {
						let formData = new FormData();
						formData.append("act", "checkRegisterPhone");
						formData.append("mobile", mobile);
						Util.get(formData, function (data){
							  console.log(data)
							  if (data.flag) {
									self.setState({
										  mobile: true
									})
									if(self.state.sendCode){
										  self.sendCode();
										  self.setState({
												sendCode:false
										  })
									}
							  } else {
									Util.toast(data.msg)
									self.setState({
										  mobile: false
									})
							  }

						}, function (err) {
						})
				  } else {
						self.setState({
							  mobile: false,
							  reg:false
						})
				  }
			},
	  //检查用户名重复
	  checkUserName(){
			let username = this.state.userNameValue;
			let self = this;
			if (username.length>2&&Util.regex.Username(username)) {
				  let formData = new FormData();
				  formData.append("act", "checkRegUserName");
				  formData.append("username", username);
				  Util.get(formData, function (data) {
						console.log(data)
						if (data.flag) {
							  self.setState({
									userName: true
							  })
							  self.checkReg()
						} else {
							  Util.toast(data.msg)
							  self.setState({
									userName: false,
							  })
						}

				  }, function (err) {
				  })
			} else {
				  self.setState({
						userName: false,
						reg:false
				  })
			}
	  },
      //检查密码
	  checkPwd(){
			let pwdValue=this.state.pwdValue
			if(pwdValue.length>5){
				  this.setState({
						pwd:true
				  })
				  this.checkReg()
			}else{
				  this.setState({
						pwd:false,
						reg:false
				  })
			}
	  },
	  checkRePwd(){
			if(this.state.pwdValue===this.state.rePwdValue&&this.state.pwdValue.length>5){
				  this.setState({
						rePwd:true
				  })
				  this.checkReg()
			}else{
				  this.setState({
						rePwd:false,
						reg:false
				  })
			}
	  }
})
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1"
	  },
	  main:{
			backgroundColor:"#fff",
			marginTop:12,
		  paddingBottom:20
	  },
	  ViewItem:{
			height:Platform.OS==='ios'?50:44,
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:Util.pixel,
			flexDirection:"row",
			alignItems:'center'
	  },
	  rightArrow:{
			position:"absolute",
			right:12,
			top:0,
			height:Platform.OS==='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
	  },
	  arrow:{
            width:Platform.OS==='ios'?10:8,
			height:Platform.OS==='ios'?17:14
	  },
	  styleLeft:{
            paddingLeft:10,
		    width:76,
			fontSize:13,
			color:"#333"
	  },
	  styleRight:{
			width:Util.size.width-86,
		    fontSize:13,
	        color:"#333"
	  },
	  getCode:{
			position:"absolute",
			right:12,
			top:0,
			height:Platform.OS==='ios'?50:44,
			alignItems:'center',
			justifyContent:'center'
	  },
	  getCodeText:{
			color:"#f20583",
			fontSize:13
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
	  circleIcon:{
			width:Platform.OS==='ios'?14:12,
			height:Platform.OS==='ios'?14:12,
			marginLeft:10,
			marginRight:4
     },
	  degStyle:{
			width:Platform.OS==='ios'?14:12,
			height:Platform.OS==='ios'?14:12,
			marginLeft:10,
			marginRight:4,
			borderColor:"#bababa",
			borderWidth:Util.pixel,
			borderRadius:Platform.OS==='ios'?7:6
	  }
});
module.exports=Reg