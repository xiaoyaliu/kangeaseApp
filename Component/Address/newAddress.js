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
				  finish:false,
				  name:"",
				  mobile:"",
				  mobilePass:false,
				  addressPass:false,
				  namePass:false,
				  detailPass:false,
				  detail:"",
				  province:"北京",
				  city:'北京市',
				  district:'东城区',
				  showArea:false
			}
			this.pickerData  =[]
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <View style={styles.AddressView}>
								<Nav title="新增收货地址" navigator={this.props.navigator}/>
								<View style={styles.item}>
								      <TextInput onChangeText ={(value)=>this.checkName(value)} style={styles.TextInputStyle}  value={this.state.name} placeholder="收货人姓名" placeholderTextColor="#999999"  underlineColorAndroid='transparent' />
                                  </View>
								<View style={styles.item}>
									  <TextInput onChangeText ={(value)=>this.validateMobile(value)}  keyboardType="numeric"  style={styles.TextInputStyle}  value={this.state.mobile} placeholder="手机号码" placeholderTextColor="#999999"  underlineColorAndroid='transparent' />
								</View>
								<TouchableOpacity style={styles.item} onPress={this._showAreaPicker.bind(this)} >
									  <TextInput  style={[styles.TextInputStyle,{width:Util.size.width-23}]} editable={false}  value={this.state.province+" "+this.state.city+" "+this.state.district} placeholder="省、市、区" placeholderTextColor="#333"  underlineColorAndroid='transparent' />
									  <Image source={{uri:"arrow_icon"}} style={{width:7,height:12}} resizeMode="stretch"/>
								</TouchableOpacity>
								<View style={styles.itemMuch}>
									  <TextInput onChangeText ={(value)=>this.checkDetail(value)}  multiline ={true} textAlignVertical="top" style={[styles.TextInputStyle,{height:70,paddingTop:10,paddingBottom:8}]}  value={this.state.detail} placeholder="详细地址" placeholderTextColor="#999999"  underlineColorAndroid='transparent' />
								</View>
						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.finish?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1} onPress={()=>this.submitAddress()}>
								<Text style={{color:this.state.finish?"#ffffff":"#e6a4c0",fontSize:15}}>保存</Text>
						  </TouchableOpacity>
						  {this.state.showArea&&
						  <View style={styles.Area}>
						  </View>
						  }
					</View>
			);
	  }
	  componentDidMount(){
			this.setAddress()
	  }
	  setAddress(){
			var self=this;
			Util.getStorage("addressmessage").then((data)=>{
				  if(data){
						let add=JSON.parse(data).data;
						Util.getStorage("timeAdd").then((res)=>{
							  let currentTime=new Date().valueOf();
							  let time=new Date(res).valueOf();

							  var days=Math.ceil((currentTime-time)/(1000*60*60*24));
							  if(days>60){
									self. getAddress()
							  }else{
									self.pickerData=add;
							  }
						})
				  }else {
						self. getAddress()
				  }
			})
	  }
      getAddress(){
			 var self=this;
			 let formData = new FormData();
			 formData.append("act","getRegionInfo");
			 Util.get(formData,function(data){
				   let d=data;
				   var result = [];
				   let p=[];
				   let c=[];
				   let de=[]
				   let i=0;
				   for (var code in d) {

						 if (d[code].region_type=== "1") {
							   p.push(d[code]);
							   result[i]={};
							   result[i][d[code].region_name]=[];
							   i=i+1;
						 }
						 if (d[code].region_type=== "2") {
							   c.push(d[code])
						 }
						 if (d[code].region_type=== "3") {
							   de.push(d[code])
						 }
				   }

				   for (var code in c) {
						 for (var code2 in p) {
							   if (c[code].parent_id === p[code2].region_id) {
									 let j = p.indexOf(p[code2])
									 let z=result[j][p[code2].region_name].length;
									 result[j][p[code2].region_name][z]={}
									 result[j][p[code2].region_name][z][(c[code].region_name)]=[];
									 break;
							   }
						 }
				   }
				   for (var code in de) {
						 for (var code2 in c) {
							   if (de[code].parent_id === c[code2].region_id) {
									 let w;
									 let h;
									 let j;
									 for (var code3 in p) {
										   if(p[code3].region_id===c[code2].parent_id){
												 w=code3;
												 h=p[code3].region_name;
												 break;
										   }
									 }
									 var a={};
									 result[w][h].map(function(value,index){
										   for(var item in value){
												 if(item==c[code2].region_name){  //item 表示Json串中的属性，如'name'
													   j=index;
													   break;
												 }
										   }
									 })

									 result[w][h][j][c[code2].region_name].push(de[code].region_name)
									 break;

							   }

						 }
				   }

				   self.pickerData=result;
				   let test={
						 "data":result
				   }
				   Util.setStorage("addressmessage",JSON.stringify(test));
				   let time=new Date()+"";
				   Util.setStorage("timeAdd",time)
			 },function(){

			 })
     }

	  checkName(value){
			let name=value.replace(/[^A-Za-z\u4E00-\u9FA5]/g,'')
			if(name.length>0){
				  this.setState({
						name:name,
						namePass:true
				  })
				  if(this.state.mobilePass&&this.state.addressPass){
						this.setState({
							  finish:true
						})
				  }
			}else{
				  this.setState({
						name:"",
						namePass:false,
						finish:false
				  })
			}
	  }
     //验证手机号格式是否正确
	  validateMobile(value){
			if(value.length===11&&Util.regex.mobile(value)){
				  this.setState({
						mobile:value,
						mobilePass:true
				  })
				  if(this.state.namePass&&this.state.addressPass){
						this.setState({
							  finish:true
						})
				  }
			}else {
				  this.setState({
						mobile:value,
						mobilePass: false,
						finish:false
				  })
			}
	  }
	  //验证详细地址
	  checkDetail(value){
			let detail=value.replace(/[^A-Za-z\d\u4E00-\u9FA5]/g,'')
			if(detail.length>0){
				  this.setState({
						detail:detail,
						detailPass:true
				  })
				  if(this.state.namePass&&this.state.mobilePass){
						this.setState({
							  finish:true
						})
				  }
			}else{
				  this.setState({
						detail:"",
						detailPass:false,
						finish:false
				  })
			}
	  }
	  //地址弹出框
	  _showAreaPicker() {
			Picker.init({
				  pickerData:  pickerData = this.pickerData,
				  selectedValue: [this.state.province],
				  pickerCancelBtnText:"取消",
				  pickerConfirmBtnText:"确定",
				  pickerTitleText:"省、市、区",
				  pickerConfirmBtnColor:[242,5,131,1],
				  pickerCancelBtnColor:[242,5,131,1],
				  onPickerConfirm: pickedValue => {
						this.setState({
							  province:pickedValue[0],
							  city:pickedValue[1],
							  district:pickedValue[2],
							  showArea:false
						})
				  },
				  onPickerCancel: pickedValue => {
						this.setState({
							  showArea:false
						})
				  },
				  onPickerSelect: pickedValue => {

				  }
			});
			Picker.show();
			this.setState({
				  showArea:true
			})
	  }
	  //提交地址信息
	  submitAddress(){
			let self=this;
			if(!this.state.namePass){
				  Util.toast("请输入姓名");
				  return false;
			}
			else if(!this.state.mobilePass){
				  Util.toast("手机号码输入不正确");
				  return false;
			}
			else if(!this.state.detailPass){
				  Util.toast("请输入详细地址");
				  return false;
			}
			let formData = new FormData();
			formData.append("act", "addAddressInfo");
			formData.append("param1","0");
			formData.append("param2",this.state.name);
			formData.append("param4", this.state.province);
			formData.append("param5",this.state.city);
			formData.append("param6", this.state.district);
			formData.append("param7", this.state.detail);
			formData.append("param8", this.state. mobile);
			Util.get(formData, function (data) {
				  console.log(data)
				  if (data.flag) {
							  self.props.updateAddress();
							  self.props.navigator.pop();
				  } else {
                      Util.toast("添加地址失败")
				  }

			}, function (err) {
				  console.log(err)
			})
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
	  },
	  Area:{
			width: Util.size.width,
			height: Util.size.height,
			left: 0,
			top:0,
			position: 'absolute',
			backgroundColor: 'rgba(0, 0, 0, 0.3)'
	  }
});