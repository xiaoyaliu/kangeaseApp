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
var dataTest=require("./../../data/logis.json");
class Logistical extends Component{
	  constructor(props){
			super(props);
			this.state={
				  isShow:false
			}
	  }
	  render() {
			return (

					<View style={styles.container}>
						  <Nav title="物流信息" navigator={this.props.navigator}/>
						  {this.state.isShow&&
						  <ScrollView>
								<View style={styles.logistical}>
									  <View style={styles.logisLeft}>
									     <Image source={{uri:"logistical"}} style={{width:44,height:31}}/>
									  </View>
									  <View style={styles.logisRight}>
											<Text style={styles.text1}>物流状态：<Text style={styles.colorf20583}>运输中</Text></Text>
											<Text style={[styles.text1,{marginTop:6}]}>物流公司：<Text style={styles.color3}>申通快递</Text></Text>
											<Text style={[styles.text1,{marginTop:6}]}>运单号：<Text style={styles.color3}>5643256766666</Text></Text>
									  </View>
								</View>
								<View  style={styles.common}>
									  <View  style={styles.cellStyle}>
											<Image source={{uri: "http://img.youde.com/images/goods/20151202/f3ccdd27d2000e3f9255a7e3e2c48800101636mkzh1w.jpg"}} style={{width:72, height:72}}/>
											<View style={styles.goods_middle}>
												  <Text style={styles.goods_name} numberOfLines={2}>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
												  <Text style={styles.goods_price}>¥99.00</Text>
											</View>
											<Text style={[styles.addressAddress,{marginTop:56,marginLeft:8}]}>X1</Text>
									  </View>

								</View>
								<View  style={[styles.common,{marginBottom:10}]}>
									  <View style={styles.shopMessage}>
											<Text style={styles.text5}>物流跟踪</Text>
									  </View>

									  <View style={styles.logisList}>

                                          {this.renderList()}
									  </View>
								</View>
						  </ScrollView>}
					</View>
			);
	  }
	  componentDidMount(){
          this.fetchData()
	  }
	  fetchData(){
         this.setState({
			   isShow:true
		 })
	  }
	  renderList(){
			var data=dataTest.data;
			var arr=[];
			var length=data.length;
			for(let i=0;i<length;i++){
						arr.push(
								<View style={styles.logisItem} key={i}>
									  {i === 0 ?
											  <View style={styles.firstView}>
													<View style={styles.roundF}></View>
											  </View>:
											  <View style={styles.itemLeft}></View>
									  }
									  {i==length-1&&<View style={styles.lastView}></View>}
									  <View style={styles.itemRight}>
											<View style={styles.itemText}>
												  <Text style={i=== 0 ?styles.text3:styles.text6}>{data[i].item}</Text>
												  <Text style={i=== 0 ?styles.text4:styles.text7}>{data[i].time}</Text>
											</View>
									  </View>
								</View>
						)

			}
			return arr;
	  }

}
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
			borderTopWidth:0.5
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
			color:"#686868",
			marginTop:26
	  },
	  addressAddress:{
			width:Util.size.width-73,
			fontSize:12,
			fontFamily:"黑体",
			color:"#999999",
			lineHeight:18
	  },

	  text1:{
			fontFamily:"黑体",
			fontSize:12,
			color:"#999999"
	  },
	  common:{
			backgroundColor:"#fff",
			marginTop:10
	  },
	  logistical:{
			backgroundColor:"#fff",
			flexDirection:'row',
			alignItems:'center',
			paddingLeft:10,
			height:86
	  },
	  logisLeft:{
			marginRight:10,
			width:66,
			height:66,
			borderRadius:33,
			backgroundColor:"#e6e6e6",
			alignItems:'center',
			justifyContent:'center'
	  },
	  logisRight:{
			marginTop:-4
	  },
	  colorf20583:{
	           color:"#f20583"
         },
	  color3:{
			color:"#333"
	  },
	  shopMessage: {
			height:Platform.OS==='ios'?50:44,
			justifyContent:'center',
			marginLeft:10,
			borderBottomColor:"#cdcdcd",
			borderBottomWidth:0.5
	  },
	  text5:{
			fontFamily:"黑体",
			fontSize:14,
			color:"#333"
	  },
	  logisList:{
			marginLeft:10
	  },
	  text3:{
			color:"#f20583",
			fontFamily:"黑体",
			fontSize:12,
	  },
	  text4:{
			color:"#f20583",
			fontFamily:"黑体",
			fontSize:11,
			marginTop:4
	  },
	  text6:{
	          color:"#999999",
			  fontFamily:"黑体",
			  fontSize:12,
	  },
	  text7:{
			color:"#999999",
			fontFamily:"黑体",
			fontSize:11,
			marginTop:4
	  },
	  firstView:{
			position:'absolute',
			width:10,
             height:27,
			top:0,
			backgroundColor:"#fff",
			left:0,
			zIndex:2
	  },
	  lastView:{
			position:'absolute',
			width:10,
			height:36,
			bottom:0,
			backgroundColor:"#fff",
			left:0,
			zIndex:2
	  },
	  roundF:{
			position:'absolute',
			width:10,
			height:10,
			borderRadius:5,
			bottom:0,
			left:0,
			backgroundColor:"#f20583",
	  },
	  itemLeft:{
			position:'absolute',
			width:10,
			height:10,
			borderRadius:5,
			top:10,
			left:0,
			backgroundColor:"#b3b3b3",
	  },
	  itemRight:{
			marginLeft:4,
			borderLeftColor:"#b3b3b3",
			borderLeftWidth:0.5
	  },
	  itemText:{
			paddingTop:10,
			paddingBottom:10,
			borderBottomColor:"#cdcdcd",
			borderBottomWidth:0.5,
			marginLeft:22
	  }
});
module.exports=Logistical