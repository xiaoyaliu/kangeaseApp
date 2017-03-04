/**
 * Created by liuxiaoya
 *date 2017/2/17 0017.
 *description支付订单
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Image,
		TouchableOpacity,
		} from 'react-native';
import Util from './../Common/util';
import Nav from './../Common/navComponent';
class PaySuccess extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  payWay:1
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="支付订单" navigator={this.props.navigator}/>
						  <View style={styles.orderMsg}>
								<Text style={styles.textOrder}>订单编号：2017020417656</Text>
								<Text style={[styles.textOrder,{marginTop:8}]}>订单金额：<Text style={{color:"#f20583"}}>¥1760.00</Text></Text>
						  </View>
						  <View style={{marginTop:10,backgroundColor:"#fff"}}>
								<Text style={styles.payWay}>付款方式</Text>
								<TouchableOpacity style={styles.go}>
									  <Image source={{uri:"alipay"}} style={styles.img}/>
									  <View style={styles.middle}>
											<Text style={styles.payName}>支付宝</Text>
											<Text style={styles.payDescribe}>数亿用户都在用，安全和托付</Text>
									  </View>
									  {this.state.payWay===1&&<Image source={{uri:"checked_icon"}} style={styles.check}/>}
								</TouchableOpacity>
								<TouchableOpacity style={styles.go}>
									  <Image source={{uri:"point"}} style={styles.img}/>
									  <View style={styles.middle}>
											<Text style={styles.payName}>支付宝</Text>
											<Text style={styles.payDescribe}>数亿用户都在用，安全和托付</Text>
									  </View>
									  {this.state.payWay===2&&<Image source={{uri:"checked_icon"}} style={styles.check}/>}
								</TouchableOpacity>
						  </View>
					</View>
			);

	  }


}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#f1f1f1",
			flex:1
	  },
	  orderMsg:{
			backgroundColor:"#fff",
			height:64,
			justifyContent:'center',
			paddingLeft:10
	  },
	  textOrder:{
			fontSize:13,
			color:"#343434",
	  },
	  ope:{
			marginTop:14,
			flexDirection:'row',
			justifyContent:'space-between'
	  },
	  go:{
			height:Platform.OS==='ios'?60:54,
			flexDirection:'row',
			alignItems:'center',
			borderTopWidth:1,
			borderTopColor:"#d8d8d8",
			paddingLeft:10,
			paddingRight:10
	  },
	  payWay:{
			paddingTop:12,
			paddingBottom:12,
			paddingLeft:10
	  },
	  img:{
			height:Platform.OS==='ios'?32:30,
			width:Platform.OS==='ios'?32:30,
	  },
	  middle:{
			width:Util.size.width-62,
			paddingLeft:10
	  },
	  payName:{
			fontSize:13,
			color:"#343434",
	  },
	  payDescribe:{
			fontSize:Platform.OS==='ios'?12:11,
			color:"#999"
	  },
	  check:{
			width:13,
			height:9
	  }
});
module.exports=PaySuccess;