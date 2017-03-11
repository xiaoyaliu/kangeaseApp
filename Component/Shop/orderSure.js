/**
 * Created by liuxiaoya；
 *date 2017/2/17 0017.
 *description:购物车
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Image,
		TouchableOpacity,
		ScrollView,
		TextInput,
		Alert
		} from 'react-native';
import Util from './../Common/util';
import Nav from './../Common/navComponent';
import AddressChooce from './../Address/chooseAddress';
import InsetAddress from './../Address/newAddress';

class OrderSure extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false,
				  messageTitle:true,
				  messageValue:"",
				  addressId:0
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  {/*头部导航*/}
						  {this.state.isShow&&
						  <View style={{flex:1}}>
						  <Nav title="确认订单" navigator={this.props.navigator}/>
							<ScrollView>
							<View style={{marginBottom:Platform.OS==='ios'?64:58}}>

									  {this.renderAddress()}

						        <View style={styles.goodsList}>
									  {this.renderGoodsList()}
									  <View style={styles.priceItem}>
									      <Text style={[styles.text2,{lineHeight:32}]}>共{this.state.data.totalGoodsNum}件商品&nbsp;&nbsp;小计：<Text style={{color:"#f20583",fontSize:15}}>¥{this.state.data.totalAmount}</Text></Text>
											<Text style={styles.text2}>运费：<Text style={{color:"#f20583"}}>¥8.00</Text></Text>
									  </View>
								</View>

								<TouchableOpacity style={styles.certification}>
									  <Text style={styles.text3}>实名认证</Text>
									   <View style={styles.certificationRight}>
									      <View>
										        <Text style={styles.text4}>张三</Text>
												<Text style={styles.text5}>410922197712023456</Text>
										  </View>
											<Image source={{uri:"arrow_icon"}} tintColor="#b1b1b1" style={{width:6,height:11.25,marginRight:10,marginLeft:4}}/>
									   </View>
								</TouchableOpacity>

								<View style={styles.message}>
									  {this.state.messageTitle&&<Text style={[styles.text3,{lineHeight:18,marginTop:9}]}>给商家留言：</Text>}
									    <TextInput placeholder="选填" multiline={true} onFocus={()=>this.setState({messageTitle:false})} onChangeText={(text) => this.setState({messageValue:text})}
												   onBlur ={()=>{this.setState({messageTitle:this.state.messageValue==""?true:false})}}  style={[styles.messageInput,{width:this.state.messageTitle?(Util.size.width-98):(Util.size.width-20)}]} placeholderTextColor="#cccccc" underlineColorAndroid='transparent' />
								</View>
								</View>
						  </ScrollView>
						  <View style={styles.bottomFix}>
								<Text style={styles.text3}>实付金额：</Text>
							    <Text style={{color:"#f20583",fontSize:16}}>¥{this.state.data.totalAmount}</Text>
								<TouchableOpacity style={styles.checkout} onPress={()=>this._jumpFocus(OrderSure, "确认订单")}>
									  <Text style={styles.checkoutText}>结算</Text>
								</TouchableOpacity>
							</View>
								</View>}
					</View>
			);

	  }
	  componentDidMount(){
			this._fetchData();
	  }
	  /*首页商品列表数据*/
	  _fetchData(){
			let address;
			let dataAddress=this.props.data.allAddress;
			if(dataAddress.length>0){
				  for(let i=0;i<dataAddress.length;i++){
						if(dataAddress[i].is_default==="1"){
							  address=dataAddress[i];
						}
				  }
				  if(!address){
						address=dataAddress[0];
				  }
				  this.setState({
						data:this.props.data,
						address:address,
						addressId:address.address_id,
						isShow:true
				  })
			}else{
				  this.setState({
						data:this.props.data,
						address:"",
						isShow:true
				  })
			}


	  }
	  renderGoodsList(){
			let data=this.state.data;
			var listArr=[];
			for(var i=0;i<data.cartGoods.goods_list.length;i++){
				  let it=data.cartGoods.goods_list[i]
				  listArr.push(
						  <View key={i} style={{borderBottomWidth:1,borderBottomColor:'#cccccc'}}>
								<View  style={styles.cellStyle}>
									  <Image source={{uri: it.goods_img}} style={{width:72, height:72}}/>
									  <View style={styles.goods_middle}>
											<Text style={styles.goods_name} numberOfLines={2}>{it.goods_name}</Text>
											<Text style={styles.goods_price}>¥{it.market_price}</Text>
									  </View>
									  <Text style={[styles.addressAddress,{marginTop:56,marginLeft:8}]}>X{it.goods_number}</Text>
								</View>

						  </View>
				  )
			}
			return listArr;
	  }
 renderAddress(){
	 let d=this.state.address;
	   if(d!=""){
			 return(
			 <TouchableOpacity style={styles.address} onPress={()=>Util._jumpFocus(this.props.navigator,AddressChooce,"选择收货地址",{checkAddress:()=>{this.checkAddress()},setAddress:(value)=>this.setAddress(value)})}>
					   <View style={styles.addressItem}>
						 <Text style={styles.text1}>收货人：{d.consignee}</Text>
						 <Text style={styles.text1}>{d.mobile}</Text>
				   </View>
				   <View style={styles.addressDetail}>
						 <Image source={{uri:"address_icon"}} style={{width:13,height:17,marginLeft:10,marginRight:10,marginBottom:6}}/>
						 <Text style={styles.addressAddress}>{d.provinceName} {d.cityName} {d.districtName} {d.address}</Text>
						 <Image source={{uri:"arrow_icon"}} tintColor="#b1b1b1" style={{width:8,height:15,marginRight:10,marginLeft:22}}/>
				   </View>
				   {Platform.OS==='ios'?
						   <Image source={{uri:"address_bottom"}} resizeMode="repeat" style={{width:Util.size.width,height:3}}/>:
						   <View style={{flexDirection:'row',width:Util.size.width,overflow:'hidden'}}>
								 {this.renderImage()}
						   </View>
				   }
			 </TouchableOpacity>
			 )
	   }else{
			 return(
					 <TouchableOpacity style={styles.address} onPress={()=>Util._jumpFocus(this.props.navigator,InsetAddress,"添加收货地址",{comeFrom:"orderSure",updateAddress:()=>this.updateAddress()})}>
						   <View style={[styles.addressDetail,{marginTop:8}]}>
								 <Image	source={{uri:"add_icon"}} style={{marginLeft:10,width:Platform.OS==='ios'?22:20,height:Platform.OS==='ios'?22:20,marginRight:6}} resizeMode="stretch"/>
								 <Text style={styles.text3}>添加收货地址</Text>
						   </View>
						   {Platform.OS==='ios'?
								   <Image source={{uri:"address_bottom"}} resizeMode="repeat" style={{width:Util.size.width,height:3}}/>:
								   <View style={{flexDirection:'row',width:Util.size.width,overflow:'hidden'}}>
										 {this.renderImage()}
								   </View>
						   }
					 </TouchableOpacity>
			 )
	   }
 }
	  renderImage() {
			var l = Math.ceil(Util.size.width / 54);
			var imgArr = [];
			for (var i = 0; i < l; i++) {
				  imgArr.push(<Image key={i} source={{uri:"address_bottom"}} style={{width:54,height:3}}/>)
			}
			return imgArr;
	  }
     //选择收货地址时更新选中的收货地址
	  setAddress(value){
			this.setState({addressId:value.address_id,address:value})
	  }
	  //返回收货地址时，判断上次选中的收货地址是否被删除了
	  checkAddress(){
			let self=this;
			let dataAddress;
			let address;
			let formData = new FormData();
			formData.append("act","showAddressInfo");
			let addressId=self.state.addressId;
			Util.get(formData,function(data){
				  if(data.flag){
						//判断是否还有地址信息
						if(data.data.length>0){
							  dataAddress = data.data;
							  let isDelete=true;//假设被删
							  for (let i = 0; i < dataAddress.length; i++) {
									if(dataAddress[i].is_default==="1"){//记录默认地址，被删除时可以用
										  address=dataAddress[i];
									}
									if (dataAddress[i].address_id ===addressId) {//如果有则没被删除
										  isDelete=false;
										  return;
									}

							  }
							  if(isDelete){
									if(!address){
										address=dataAddress[0];
									}
									self.setState({//如果被删除需要更新收货地址
										  address:address,
										  addressId:address.address_id
									})
							  }
						}else{
							  self.setState({
									address:""
							  })
						}
				  }
			},function(){})

	  }
	  //新建收货地址返回更新
	  updateAddress(){
			let self=this;
			let formData = new FormData();
			formData.append("act","showAddressInfo");
			Util.get(formData,function(data){
				  if(data.flag){
						if(data.data.length>0){
									self.setState({
										  address:data.data[0],
										  addressId:data.data[0].address_id
									})
							  }
						}
			},function(){})
	  }
}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#f1f1f1",
			flex:1
	  },
	  address:{
			backgroundColor:"#fff"
	  },
	  addressItem:{
			height:24,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'space-between',
			marginTop:6,
			marginLeft:33,
			marginRight:40
	  },
	  text1:{
			fontSize:14,
			color:"#333"
	  },
	  addressDetail:{
			flexDirection:'row',
			alignItems:'center',
			height:38,
			marginBottom:8
	  },
	  addressAddress:{
			width:Util.size.width-73,
			fontSize:12,
			color:"#333",
			lineHeight:18
	  },
	  cellStyle:{
			height:96,
			flexDirection:'row',
			alignItems:'center',
			paddingLeft:10,
			paddingRight:10
	  },
	  goods_middle:{
			width:Util.size.width-124,
			marginLeft:10
	  },
	  goods_name:{
			fontSize:12,
			color:"#333333",
			lineHeight:18
	  },
	  goods_price:{
			fontSize:12,
			color:"#323232",
			marginTop:26
	  },
	  goodsList:{
			backgroundColor:"#fff",
			marginTop:10
	  },
	  priceItem:{
              marginTop:2,
			marginBottom:12,
			marginRight:10
	  },
	  text2:{
			textAlign:'right',
			fontSize:12,
			color:"#333"
	  },
	  certification:{
			backgroundColor:"#fff",
			height:Platform.OS==='ios'?52:46,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'space-between',
			marginTop:10,
			paddingLeft:10
	  },
	  certificationRight:{
			flexDirection:'row',
			alignItems:'center',
	  },
	  text3:{
			fontSize:13,
			color:"#333"
	  },
	  text4:{
			textAlign:'right',
			fontSize:12,
			color:"#343434"
	  },
	  text5:{
			fontSize:12,
			color:"#343434"
	  },
	  message:{
			flexDirection:'row',
			marginTop:1,
			alignItems:"flex-start",
			backgroundColor:"#fff",
			paddingLeft:10,
			paddingRight:10,
			height:54,
			paddingBottom:12,
			borderBottomWidth:1,
			borderBottomColor:"#d8d8d8"
	  },
	  messageInput:{
			paddingTop:0,
			paddingBottom:0,
			lineHeight:18,
			height:36
	  },
	  bottomFix:{
			backgroundColor:"#fff",
			width:Util.size.width,
			height:Platform.OS==='ios'?54:48,
			flexDirection:'row',
			justifyContent:"flex-end",
			alignItems:'center',
			position:'absolute',
			bottom:0,
			left:0,
			borderTopWidth:1,
			borderTopColor:"#b3b3b3"
	  },
	  checkout:{
			height:Platform.OS==='ios'?54:48,
			width:90,
			marginLeft:16,
			backgroundColor:"#f20583",
			alignItems:'center',
			justifyContent:'center'
	  },
	  checkoutText:{
			color:"#fff"
	  }
});
module.exports=OrderSure;