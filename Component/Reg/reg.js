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
import  Picker from './../Common/PickerComponent';
import regSuccess from './regSuccess';
export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
			this.state={
				  rankName:"部长",
				  rankValue:3,
				  picker:false,
				  reg:false,
				  agree:true
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="注册" navigator={this.props.navigator}/>
						  <View style={styles.main}>
						     <View style={styles.ViewItem}>
							       <Text style={styles.styleLeft}>用户名</Text>
								   <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
							 </View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>姓名</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>公司名称</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>手机号</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>验证码</Text>
									  <TextInput style={styles.styleRight}  underlineColorAndroid='transparent'/>
									  <TouchableOpacity style={styles.getCode}>
											<Text style={styles.getCodeText}>获取验证码</Text>
									  </TouchableOpacity>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>密码</Text>
									  <TextInput style={styles.styleRight} placeholder="8-16位数字、字母或符号的组合" placeholderTextColor="#b2b2b2" underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>重复密码</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
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
									  <TouchableOpacity style={{alignItems:'center',flexDirection:'row'}} onPress={()=>this.setState({agree:!this.state.agree})}>
									  {this.state.agree?
									  <Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="contain" />:
										<View style={styles.degStyle}></View>
									  }
									  <Text style={{color:"#3d3d3d",fontSize:10,fontFamily:"黑体"}}>我已阅读并同意《</Text>
										<Text style={{color:"#f20583",fontSize:10,fontFamily:"黑体"}}>康亿海外购注册条款</Text>
									  </TouchableOpacity>
									  {/*<TouchableOpacity navigator={this.props.navigator} onPress={this._jump.bind(this,regItem,"条款")}>
											<Text style={{color:"#f20583",fontSize:10,fontFamily:"黑体"}}>康亿海外购注册条款</Text>
									  </TouchableOpacity>*/}
									  <Text style={{color:"#3d3d3d",fontSize:10,fontFamily:"黑体"}}>》</Text>
								</View>
						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.reg?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1} onPress={()=>this.regSubmit()}>
								<Text style={{color:this.state.login?"#ffffff":"#e6a4c0",fontSize:15,fontFamily:"黑体"}}>免费注册</Text>
						  </TouchableOpacity>
						  {this.state.picker?
						  <Picker selectedValue={this.state.rankValue} selectedName={this.state.rankName} onValueChange={(value,name,show) => this.setState({rankValue: value,rankName:name,picker:show})}>
								<Picker.Item label="股东" value="1"></Picker.Item>
								<Picker.Item label="分总" value="2"></Picker.Item>
								<Picker.Item label="部长" value="3"></Picker.Item>
								<Picker.Item label="店长" value="4"></Picker.Item>
								<Picker.Item label="总经理" value="5"></Picker.Item>
						  </Picker>:null}
					</View>
			);
	  }
	  //提交注册信息
	  regSubmit(){
			const navigator = this.props.navigator;
			if (navigator){
				  navigator.push({
						component: regSuccess,
						title: "注册提交"
				  });
			}
	  }
	  //跳转注册条款
	  /*_jump(component, title){
			const navigator = this.props.navigator;
			if (navigator){
				  navigator.push({
						component: component,
						title: title,
						passProps:{
							  agree:this.state.agree,
							  onAgreeChange:()=>this.onAgreeChange()
						}
				  });
			}
	  }
     onAgreeChange(){
		   this.setState({agree:true});
	 }*/
}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1"
	  },
	  main:{
			backgroundColor:"#fff",
			marginTop:12
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
			color:"#333",
			fontFamily:"黑体"
	  },
	  styleRight:{
			width:Util.size.width-86
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