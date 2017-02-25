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
import GetBottom from './../../Common/getBottom';
var OrderList =React.createClass({
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
						  <Nav title="我的订单" navigator={this.props.navigator}/>
						  <View style={styles.topTabBar}>
								<View style={styles.topTabBarBox}>
									  <TouchableOpacity style={styles.tabBarItem} onPress={()=>this.renderList("all")}>
											<Text style={[styles.tabBarText,{color:this.state.current_order=="all"?"#f20583":"#999999"}]}>全部</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.tabBarItem} onPress={()=>this.renderList("wait")}>
											<Text style={[styles.tabBarText,{color:this.state.current_order==="wait"?"#f20583":"#999999"}]}>待发货</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.tabBarItem} onPress={()=>this.renderList("get")}>
											<Text style={[styles.tabBarText,{color:this.state.current_order==="get"?"#f20583":"#999999"}]}>待收货</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.tabBarItem} onPress={()=>this.renderList("evaluate")}>
											<Text style={[styles.tabBarText,{color:this.state.current_order==="evaluate"?"#f20583":"#999999"}]}>待评价</Text>
									  </TouchableOpacity>
								</View>
								<Animated.View
										style={[styles.animateLine,{transform: [{translateX: this.state.fadeAnim}]}]}>
								</Animated.View>
						  </View>
						  {this.state.isShow&& <View style={{flex: 1}}>
								{this.state.current_order==="all"&&
								<View style={{flex: 1}} >
									  <ListView
											  removeClippedSubviews={true}
											  initialListSize={8}
											  pageSize={5}
											  //onEndReached={()=>} // 当所有数据已经渲染过，并且列表被滚动到距离底部不足100像素距离时调用
											  dataSource={this.state.dataSource}
												renderRow={(rowdata)=>this.renderRow(rowdata)}
											  style={{flex:1,overflow: 'hidden'}}
											  />
									  {/*<GetBottom title="已经到底了"/>*/}
								</View>}
								{this.state.current_order==="wait"&&
								<View style={{flex: 1}} >
									  <ListView dataSource={this.state.dataSourceWait}
												renderRow={(rowdata)=>this.renderRow(rowdata)}
												style={{overflow:'hidden'}}
												scrollRenderAheadDistance={100}
											  />
								</View>}
								{this.state.current_order==="get"&&
								<View style={{flex: 1}} >
									  <ListView dataSource={this.state.dataSourceGet}
												renderRow={(rowdata)=>this.renderRow(rowdata)}
												style={{overflow:'hidden'}}
												scrollRenderAheadDistance={100}
											  />

								</View>}
								{this.state.current_order==="evaluate"&&
								<View style={{flex: 1}} >
									  <ListView dataSource={this.state.dataSourceEva}
												renderRow={(rowdata)=>this.renderRow(rowdata)}
												style={{overflow:'hidden'}}
												scrollRenderAheadDistance={100}
											  />
								</View>}
						  </View>}
					</View>
			);
	  },
	  componentDidMount(){
			this.dataSourceEva=[];
			var dataSourceGet=[];
			var dataSourceWait=[];
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

				  this.setState({
						dataSource:ds.cloneWithRows(dataTest.oslist),
						isShow:true
				  })


				  for(var i=0;i<dataTest.oslist.length;i++){
                       if(dataTest.oslist[i].order_status==="5"){
							 this.dataSourceEva.push(dataTest.oslist[i])
					   }
				  }
			this.setState({
				  dataSourceEva:ds.cloneWithRows(this.dataSourceEva)
			})

	  },
	  renderList(type){
			var current_order=this.state.current_order;
			if(type=="all"&&current_order!="all"){
				  this.setState({
						current_order:"all"
				  });
				  Animated.timing(
						  this.state.fadeAnim,
						  {toValue: 0,
								duration: 300 }
				  ).start();
			}else if(type=="wait"&&current_order!="wait"){
				  this.setState({
						current_order:"wait"
				  });
				  Animated.timing(
						  this.state.fadeAnim,
						  {toValue: Util.size.width*0.25,
								duration: 300 }
				  ).start();
			}else if(type=="get"&&current_order!="get"){
				  this.setState({
						current_order:"get"
				  });
				  Animated.timing(
						  this.state.fadeAnim,
						  {toValue: Util.size.width*0.5,
								duration: 300 }
				  ).start();
			}else if(type=="evaluate"&&current_order!="evaluate"){

				  this.setState({
						current_order:"evaluate"
				  });
				  Animated.timing(
						  this.state.fadeAnim,
						  {toValue: Util.size.width*0.75,
								duration: 300, }
				  ).start();
			}
	  },
	  renderRow(rowdata){
			return(
					<View style={{marginTop:10}}>
					    <View style={styles.orderHeader}>
						   <Text style={styles.goods_name}>订单编号</Text>
							<Text style={styles.text1}>待发货</Text>
						</View>
						  <TouchableOpacity>
								<View  style={styles.cellStyle}>
									  <Image source={{uri: rowdata.goodsArr[0].goods_img}} style={{width:72, height:72}}/>
									  <View style={styles.goods_middle}>
											<Text style={styles.goods_name} numberOfLines={2}>{rowdata.goodsArr[0].goods_name}测试测试测试测试测试测试测试测试测试测试测试测试</Text>
											<Text style={styles.goods_price}>¥99.00</Text>
									  </View>
									  <Text style={[styles.addressAddress,{marginTop:56,marginLeft:8}]}>X1</Text>
								</View>
							</TouchableOpacity>
						  <View style={styles.orderDetail}>
						     <Text style={styles.text2}>共1件商品 实付¥29.90(含运费¥8.00)</Text>
						  </View>
						  <View style={styles.ope}>
						     <TouchableOpacity style={[styles.opeItem,{borderColor:"#666"}]}>
								   <Text style={styles.text3}>取消订单</Text>
							 </TouchableOpacity>
								<TouchableOpacity style={[styles.opeItem,{borderColor:"#f20583"}]}>
									  <Text style={styles.text1}>确认收货</Text>
								</TouchableOpacity>
						  </View>
					</View>
			)
	  }

})
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",
	  },
	  topTabBar:{
			width:Util.size.width,
			height:Platform.OS==='ios'?52:46,
			borderBottomWidth:0.5,
			borderBottomColor:'#b3b3b3',
			backgroundColor:"#fff"
	  },
	  topTabBarBox:{
			flexDirection:'row'
	  },
	  tabBarItem:{
			width:Util.size.width*0.25,
			height:Platform.OS==='ios'?52:46,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'center'
	  },
	  tabBarText:{
			fontSize:14,
			fontFamily:"黑体"
	  },
	  animateLine:{
			position:'absolute',
			width:Util.size.width*0.25,
			height:3,
			backgroundColor:"#f20583",
			bottom:-1,

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
	  addressAddress:{
			width:Util.size.width-73,
			fontSize:12,
			fontFamily:"黑体",
			color:"#333",
			lineHeight:18
	  },
	  orderHeader:{
			flexDirection:'row',
			height:Platform.OS==='ios'?46:40,
			alignItems:'center',
			justifyContent:'space-between',
			paddingLeft:10,
			paddingRight:10,
			backgroundColor:"#fff"
	  },
	  text1:{
			fontFamily:"黑体",
			fontSize:12,
			color:"#f20583"
	  },
	  orderDetail:{
			height:Platform.OS==='ios'?44:38,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'flex-end',
			backgroundColor:"#fff",
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:0.5,
			paddingRight:10
	  },
	  text2:{
			fontFamily:"黑体",
			fontSize:11,
			color:"#353535",
			textAlign:'right',
	  },
	  text3:{
			fontFamily:"黑体",
			fontSize:12,
			color:"#666",
	  },
	  ope:{
			height:Platform.OS==='ios'?52:46,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'flex-end',
			backgroundColor:"#fff"
	  },
	  opeItem:{
			height:Platform.OS==='ios'?36:30,
			width:70,
			alignItems:'center',
			justifyContent:'center',
			borderWidth:0.5,
			borderRadius:2,
			marginRight:10
	  }

});
module.exports=OrderList