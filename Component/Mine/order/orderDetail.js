/**
 * Created by liuxiaoya；
 *date 2017/2/24 0024.
 *description订单详情页
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
		Platform,
		Animated,
		ScrollView,
		ListView,
		Alert
		} from 'react-native';

import Util from './../../Common/util';
import Nav from './../../Common/navComponent';
var dataTest=require("./../../data/order.json");
var OrderDetail =React.createClass({
	  getInitialState: function() {
			return {
				  current_order:"all",
				  fadeAnim: new Animated.Value(0),
				  isShow:false
			};
	  },

	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="订单详情" navigator={this.props.navigator}/>
						  <ScrollView>
						 <View style={{backgroundColor:"#fff",paddingLeft:10,paddingTop:4,paddingBottom:10}}>
                              <Text style={styles.text1}>订单编号：13213221212</Text>
							   <Text style={styles.text1}>下单时间：2016/08/26 14:37:52</Text>
							   <Text style={styles.text1}>订单状态：<Text style={{color:"#f20583"}}>待收货</Text></Text>
						 </View>
						  <View style={styles.common}>
								<View style={styles.addressItem}>
									  <Text style={styles.text2}>张三</Text>
									  <Text style={styles.text2}>13666666666</Text>
								</View>
								<View style={styles.addressDetail}>
									  <Image source={{uri:"address_icon"}} tintColor="#333" style={{width:13,height:17,marginLeft:10,marginRight:10,marginBottom:6}}/>
									  <Text style={styles.addressAddress}>河南省郑州市高新技术开发区金梭路枫杨街交叉口创
											业中心2号楼A1117</Text>
								</View>
							</View>
						  <View  style={styles.common}>
								<View style={styles.shopMessage}>
									  <Text style={styles.text5}>商品信息</Text>
								</View>
								<View  style={styles.cellStyle}>
									  <Image source={{uri: "http://img.youde.com/images/goods/20151202/f3ccdd27d2000e3f9255a7e3e2c48800101636mkzh1w.jpg"}} style={{width:72, height:72}}/>
									  <View style={styles.goods_middle}>
											<Text style={styles.goods_name} numberOfLines={2}>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
											<Text style={styles.goods_price}>¥99.00</Text>
									  </View>
									  <Text style={[styles.addressAddress,{marginTop:56,marginLeft:8}]}>X1</Text>
								</View>
								<View  style={styles.cellStyle}>
									  <Image source={{uri: "http://img.youde.com/images/goods/20151202/f3ccdd27d2000e3f9255a7e3e2c48800101636mkzh1w.jpg"}} style={{width:72, height:72}}/>
									  <View style={styles.goods_middle}>
											<Text style={styles.goods_name} numberOfLines={2}>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
											<Text style={styles.goods_price}>¥99.00</Text>
									  </View>
									  <Text style={[styles.addressAddress,{marginTop:56,marginLeft:8}]}>X1</Text>
								</View>
								<View  style={styles.cellStyle}>
									  <Image source={{uri: "http://img.youde.com/images/goods/20151202/f3ccdd27d2000e3f9255a7e3e2c48800101636mkzh1w.jpg"}} style={{width:72, height:72}}/>
									  <View style={styles.goods_middle}>
											<Text style={styles.goods_name} numberOfLines={2}>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
											<Text style={styles.goods_price}>¥99.00</Text>
									  </View>
									  <Text style={[styles.addressAddress,{marginTop:56,marginLeft:8}]}>X1</Text>
								</View>
						  </View>
						  <View  style={[styles.common,{paddingTop:6,paddingBottom:10,marginBottom:10}]}>
								<View style={styles.moneyView}>
									  <Text style={styles.text1}>商品总额</Text>
									  <Text style={styles.text1}>¥121.90</Text></View>
								<View style={[styles.moneyView,{paddingBottom:4}]}>
									  <Text style={styles.text1}>运费</Text>
									  <Text style={styles.text1}>¥8.00</Text>
								</View>
								<View style={[styles.moneyView,{marginTop:4,paddingTop:6,paddingBottom:6,borderTopColor:"#ccc",borderTopWidth:0.5}]}>
									  <Text style={styles.text5}>实付金额</Text>
									  <Text style={[styles.text4,{fontSize:13}]}>¥855.00</Text>
								</View>
						   </View>
							</ScrollView>
						  <View style={styles.ope}>
								<TouchableOpacity style={[styles.opeItem,{borderColor:"#666"}]}>
									  <Text style={styles.text3}>取消订单</Text>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.opeItem,{borderColor:"#f20583"}]}>
									  <Text style={styles.text4}>确认收货</Text>
								</TouchableOpacity>
						  </View>
					</View>
			);
	  },
	  componentDidMount(){

	  }

})
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			backgroundColor: "#f1f1f1",
	  },
	  cellStyle:{
			height:96,
			flexDirection:'row',
			alignItems:'center',
			marginLeft:10,
			paddingRight:10,
			borderTopColor:"#ccc",
			borderTopWidth:1
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
	  addressAddress:{
			width:Util.size.width-73,
			fontSize:12,
			color:"#333",
			lineHeight:18
	  },

	  text1:{
			fontSize:12,
			color:"#999999",
			marginTop:8
	  },
	  text3:{
			fontSize:12,
			color:"#666",
	  },
	  ope:{
			height:Platform.OS==='ios'?52:46,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'flex-end',
			backgroundColor:"#fff",
			borderTopColor:"#b3b3b3",
			borderTopWidth:0.5
	  },
	  opeItem:{
			height:Platform.OS==='ios'?36:30,
			width:70,
			alignItems:'center',
			justifyContent:'center',
			borderWidth:0.5,
			borderRadius:2,
			marginRight:10
	  },
	  common:{
			backgroundColor:"#fff",
			marginTop:10
	  },
	  addressItem:{
			height:24,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'space-between',
			marginTop:8,
			marginLeft:33,
			marginRight:40
	  },
	  text2:{
			fontSize:14,
			color:"#333"
	  },
	  addressDetail:{
			flexDirection:'row',
			alignItems:'center',
			height:38,
			marginBottom:10,
			marginTop:4
	  },
	  shopMessage: {
			height:Platform.OS==='ios'?50:44,
			justifyContent:'center',
			marginLeft:10,
	  },
	  moneyView:{
			flexDirection:'row',
			justifyContent:'space-between',
			paddingLeft:10,
			paddingRight:10
	  },
	  text4:{

			fontSize:12,
			color:"#f20583"
	  },
	  text5:{
			fontSize:14,
			color:"#333"
	  }



});
module.exports=OrderDetail