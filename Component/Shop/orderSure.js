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
var AddressChooce=require('./../Address/chooseAddress');
var dataAddress=require('./../data/address.json');
var dataTest=require('./../data/searchList.json');
class OrderSure extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false,
				  data:dataTest,
				  messageTitle:true,
				  messageValue:"",
				  addressId:3
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  {/*头部导航*/}
						  <Nav title="确认订单" navigator={this.props.navigator}/>
						  <ScrollView>
								<View style={{marginBottom:Platform.OS==='ios'?64:58}}>
								{/*收货地址*/}
									  {this.renderAddress()}
								{/*商品信息*/}
                                <View style={styles.goodsList}>
									  {this.renderGoodsList()}
									  <View style={styles.priceItem}>
									      <Text style={[styles.text2,{lineHeight:32}]}>共3件商品&nbsp;&nbsp;小计：<Text style={{color:"#f20583",fontFamily:"微软雅黑",fontSize:15}}>¥129.00</Text></Text>
											<Text style={styles.text2}>运费：<Text style={{color:"#f20583",fontFamily:"微软雅黑"}}>¥8.00</Text></Text>
									  </View>
								</View>
								{/*实名认证*/}
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
								{/*商家留言*/}
								<View style={styles.message}>
									  {this.state.messageTitle&&<Text style={[styles.text3,{lineHeight:18,marginTop:9}]}>给商家留言：</Text>}
									    <TextInput placeholder="选填" multiline={true} onFocus={()=>this.setState({messageTitle:false})} onChangeText={(text) => this.setState({messageValue:text})}
												   onBlur ={()=>{this.setState({messageTitle:this.state.messageValue==""?true:false})}}  style={[styles.messageInput,{width:this.state.messageTitle?(Util.size.width-98):(Util.size.width-20)}]} placeholderTextColor="#cccccc" underlineColorAndroid='transparent' />
								</View>
								</View>
						  </ScrollView>
						  <View style={styles.bottomFix}>
								<Text style={styles.text3}>实付金额：</Text>
								<Text style={{color:"#f20583",fontFamily:"微软雅黑",fontSize:16}}>¥300.00</Text>
								<TouchableOpacity style={styles.checkout} onPress={()=>this._jumpFocus(OrderSure, "确认订单")}>
									  <Text style={styles.checkoutText}>结算</Text>
								</TouchableOpacity>
							</View>
					</View>
			);

	  }
	  componentDidMount(){
			this._fetchData();
	  }
	  /*首页商品列表数据*/
	  _fetchData(callback){


	  }
	  renderGoodsList(){
			var listArr=[];
			for(var i=0;i<5;i++){
				  listArr.push(
						  <View key={i} style={{borderBottomWidth:1,borderBottomColor:'#cccccc'}}>
								<View  style={styles.cellStyle}>
									  <Image source={{uri: dataTest.info[i].goods_img}} style={{width:72, height:72}}/>
									  <View style={styles.goods_middle}>
											<Text style={styles.goods_name} numberOfLines={2}>{ dataTest.info[i].goods_name}测试测试测试测试测试测试测试测试测试测试测试测试</Text>
											<Text style={styles.goods_price}>¥{dataTest.info[i].shop_price}</Text>
									  </View>
									  <Text style={[styles.addressAddress,{marginTop:56,marginLeft:8}]}>X1</Text>
								</View>

						  </View>
				  )
			}
			return listArr;
	  }
 renderAddress(){
	   var data;
	   for(var i=0;i<dataAddress.data.length;i++){
			 if(dataAddress.data[i].id==this.state.addressId){
				   data=dataAddress.data[i]
			 }
	   }
	   return(
	   <TouchableOpacity style={styles.address} onPress={()=>this._jumpFocus(AddressChooce,"选择收货地址",this.state.addressId)}>
			 <View style={styles.addressItem}>
				   <Text style={styles.text1}>收货人：{data.name}</Text>
				   <Text style={styles.text1}>{data.mobile}</Text>
			 </View>
			 <View style={styles.addressDetail}>
				   <Image source={{uri:"address_icon"}} style={{width:13,height:17,marginLeft:10,marginRight:10,marginBottom:6}}/>
				   <Text style={styles.addressAddress}>{data.detail}</Text>
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
 }
	  renderImage(){
			var l=Math.ceil(Util.size.width/54);5
			var imgArr=[];
			for(var i=0;i<l;i++){
				  imgArr.push(<Image key={i} source={{uri:"address_bottom"}}style={{width:54,height:3}}/>)
			}
			return imgArr;
	  }
	  //跳转
	  _jumpFocus(component, title,id){

			const navigator = this.props.navigator;
			if (navigator){
				  navigator.push({
						component: component,
						title: title,
						passProps:{
							  id:id,
							  setAddressId:(i)=>this.setState({addressId:i})
						}
				  });
			}
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
            fontFamily:"黑体",
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
			fontFamily:"黑体",
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
			fontFamily:"黑体",
			fontSize:12,
			color:"#333333",
			lineHeight:18
	  },
	  goods_price:{
			fontFamily:"微软雅黑",
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
			fontFamily:"黑体",
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
			fontFamily:"黑体",
			fontSize:13,
			color:"#333"
	  },
	  text4:{
			textAlign:'right',
			fontFamily:"黑体",
			fontSize:12,
			color:"#343434"
	  },
	  text5:{
			fontFamily:"微软雅黑",
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