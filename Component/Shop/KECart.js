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
		ListView,
		TouchableHighlight,
		TextInput,
		Alert
		} from 'react-native';
import Util from './../Common/util';
import OrderSure from './orderSure';
var dataTest=require('./../data/cart.json');
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
class Cart extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  {/*头部导航*/}
						  <View style={styles.nav}>
								<TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle}>
									  <Image source={{uri:'back_icon'}} style={styles.backImg}/>
								</TouchableOpacity>
								<Text style={{color:"#333333",fontSize:16}}>购物车</Text>
								<TouchableOpacity style={styles.rightViewStyle}>
								   <Text style={{color:"#333333",fontSize:14,textAlign:'right' }}>编辑</Text>
								</TouchableOpacity>
						  </View>

						  {/*购物车内容*/}
						  {this.state.isShow && <SwipeListView
								  dataSource={this.state.dataSource}
								  renderRow={(data)=>this.renderRowCart(data)}
								  renderHiddenRow={ (data) =>this.renderHideDelete(data)}
								  disableRightSwipe={true}
								  rightOpenValue={-70}
								  />
						  }
						  {/*全选结算*/}
						  <View style={styles.bottomFix}>
						     <TouchableOpacity style={styles.checkAll}>
								   <Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="stretch"/>
								   <Text style={{color:"#333333",fontSize:14,marginLeft:2}}>全选</Text>
							 </TouchableOpacity>
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
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			let length=dataTest.info.allcart.length;//总数据
			var arr=[];
			for (var i=0; i<length; ++i) {
				  arr.push(i)
			}
			this.setState({
				  dataSource:ds.cloneWithRows(arr),
				  isShow:true
			})

	  }

	  renderRowCart(rowdata){
           var data=dataTest.info.allcart[rowdata];
			return(

					<TouchableHighlight
							onPress={()=>Alert.alert('You touched me111') }
							style={styles.rowFront}
							underlayColor ={'#fff'}

							>
						  <View style={styles.listItems}>
								<TouchableOpacity style={styles.listItemsLeft}>
								<Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="stretch"/>
								</TouchableOpacity>
								<View style={styles.listItemsMiddle}>
									  <Image source={{uri: data.goods_img}} style={{width:72, height:72}}/>
									  <View style={styles.goods_middle}>
											<Text style={styles.goods_name} numberOfLines={2}>{ data.goods_name}测试测试测试测试测试测试测试测试测试测试测试测试</Text>
											<Text style={styles.goods_price}>¥{data.goods_price}</Text>
									  </View>
								</View>
								<View style={styles.changeNumView}>
									  <TouchableOpacity style={styles.changeNum}>
											<Text style={{fontSize:16,color:"#333"}}>-</Text>
									  </TouchableOpacity>
									  <TextInput keyboardType="numeric" style={styles.inputNum} underlineColorAndroid='transparent'/>
									  <TouchableOpacity style={styles.changeNum}>
											<Text style={{fontSize:16,color:"#333"}}>+</Text>
									  </TouchableOpacity>
								</View>
						  </View>
					</TouchableHighlight>
			);
	  }
	  renderHideDelete(data){

			return(
						  <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={() => Alert.alert("222") }>
								<Text style={styles.backTextWhite}>删除</Text>
						  </TouchableOpacity>
			)
	  }
	  //跳转到确认订单
	  _jumpFocus(component, title){

			const navigator = this.props.navigator;
			if (navigator){
				  navigator.push({
						component: component,
						title: title
				  });
			}
	  }

}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#f2f2f2",
			flex:1
	  },
	  nav:{
			backgroundColor:"#fff",
			alignItems:'center',
			height:Platform.OS==='ios'?58:44,
			paddingTop:Platform.OS==='ios'?15:0,
			justifyContent:'center',
			borderBottomWidth:1,
			borderBottomColor:'#d4d4d4'
	  },
	  leftViewStyle:{
			width:Platform.OS==='ios'?28:24,
			height:Platform.OS==='ios'?28:24,
			position:'absolute',
			left:Platform.OS==='ios'?3:4,
			bottom:Platform.OS==='ios'?6:10,
			alignItems:'center',
			justifyContent:'center'

	  },
	  backImg:{
			width:Platform.OS==='ios'?18:16,
			height:Platform.OS==='ios'?18:16
	  },
	  rightViewStyle:{
			position:'absolute',
			height:Platform.OS==='ios'?43:44,
			bottom:0,
			width:34,
			right:10,
			justifyContent:'center'
	  },
	  rowFront: {
			alignItems: 'center',
			backgroundColor: '#fff',
			justifyContent: 'center',
			height: 96,
			marginBottom:10
	  },
	  backTextWhite: {
			color: '#fff'
	  },
	  backRightBtn: {
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			top: 0,
			width: 70,
			height:96
	  },

	  backRightBtnRight: {
			backgroundColor: '#f20583',
			right: 0
	  },
	  circleIcon:{
			width:Platform.OS==='ios'?16:14,
			height:Platform.OS==='ios'?16:14,
			marginLeft:10,
			marginRight:10
	  },
	  listItems:{
			width:Util.size.width,
			height:80,
			paddingTop:6,
			paddingBottom:6,
			flexDirection:'row'
	  },
	  listItemsLeft:{
			width:30,
			alignItems:'center',
			justifyContent:'center'
	  },
	  listItemsMiddle:{
			flexDirection:'row',
			paddingRight:10,
	  },
	  goods_middle:{
			width:Util.size.width-122,
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
			marginTop:20
	  },
	  changeNumView:{
			width:96,
			height:20,
			borderColor:"#b3b3b3",
			borderWidth:1,
			flexDirection:'row',
			position:'absolute',
			right:10,
			bottom:0
	  },
	  changeNum:{
			width:20,
			height:18,
			alignItems: 'center',
			justifyContent: 'center'
	  },
	  inputNum:{
			width:54,
			height:20,
			borderLeftColor:"#b3b3b3",
			borderRightColor:"#b3b3b3",
			borderLeftWidth:1,
			borderRightWidth:1,
			textAlign:'center',
			padding:2
	  },
	  bottomFix:{
			backgroundColor:"#fff",
			width:Util.size.width,
			height:Platform.OS==='ios'?54:48,
			flexDirection:'row',
			justifyContent:"space-between",
			position:'absolute',
			bottom:0,
			left:0
	  },
	  checkAll:{

			height:Platform.OS==='ios'?54:48,
			flexDirection:'row',
			alignItems:'center'
	  },
	  checkout:{
            width:90,
			backgroundColor:"#f20583",
			alignItems:'center',
			justifyContent:'center'
	  },
	  checkoutText:{
			color:"#fff"
	  }

});
module.exports=Cart