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
import GoodsDetail from './../Goods/KEGoods';
var checkArr=[];
var arr=[]
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
class Cart extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false,
				  checkAll:true,
				  edit:false,
				  showNull:false
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  {/*头部导航*/}

						  <View style={styles.nav}>
								{!this.props.nav&&
								<TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle}>
									  <Image source={{uri:'back_icon'}} style={styles.backImg}/>
								</TouchableOpacity>
								}

								<Text style={{color:"#333333",fontSize:16}}>购物车</Text>
								<TouchableOpacity style={styles.rightViewStyle} onPress={()=>this.setState({edit:!this.state.edit})}>
									  {this.state.edit?
								              <Text style={{color:"#333333",fontSize:14,textAlign:'right' }}>完成</Text>
											  :<Text style={{color:"#333333",fontSize:14,textAlign:'right'}}>编辑</Text>}
								</TouchableOpacity>
						  </View>

						  {/*购物车内容*/}
						  {this.state.isShow &&<View style={{flex:1}}>
						  <SwipeListView
								  dataSource={this.state.dataSource}
								  renderRow={(data)=>this.renderRowCart(data)}
								  renderHiddenRow={ (data) =>this.renderHideDelete(data)}
								  disableRightSwipe={true}
								  rightOpenValue={-70}
								  />


						  <View style={styles.bottomFix}>
								   {this.state.checkAll?
										   <TouchableOpacity style={styles.checkAll} onPress={()=>this.checkAll()}>
													 <Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="stretch"/>
													 <Text style={{color:"#333333",fontSize:14,marginLeft:2}}>全选</Text>
										   </TouchableOpacity>:
										   <TouchableOpacity style={styles.checkAll} onPress={()=>this.checkAll()}>
												 <View style={styles.degStyle}></View>
												 <Text style={{color:"#333333",fontSize:14,marginLeft:2}}>全选</Text>
										   </TouchableOpacity>
								   }
								{this.state.edit?
                                <View style={{'flexDirection':'row'}}>
									  <TouchableOpacity style={styles.checkout} onPress={()=>this.deleteCart(0)}>
											<Text style={styles.checkoutText}>删除({this.state.cartGoodsCount})</Text>
									  </TouchableOpacity>
								</View>: <View style={{'flexDirection':'row'}}>
									  <View style={{'flexDirection':'row',alignItems:'center'}}>
											<Text style={{fontSize:14,color:"#333",paddingBottom:18}}>合计：</Text>
											<View style={{marginRight:10}}>
												  <Text style={{fontSize:13,color:"#f20583"}}>¥{this.state.cartTotolMoney}</Text>
												  <Text style={{fontSize:12,color:"#333",marginTop:2}}>不含运费</Text>
											</View>
									  </View>
									  <TouchableOpacity style={styles.checkout} onPress={()=>this.orderSure()}>
											<Text style={styles.checkoutText}>结算 ({this.state.cartGoodsCount})</Text>
									  </TouchableOpacity>
								</View>}
						  </View>
						  </View> }
						  {this.state.showNull&&
						  <View style={styles.container_emply}>
								<Image source={{uri:"cart_null"}} style={{width:84,height:70,marginTop:Util.size.width*0.19}} resizeMode="stretch"/>
								<Text style={{marginTop:14,color:"#999",fontSize:13}}>购物车空空的,快去挑选商品吧!</Text>
								<TouchableOpacity style={styles.loginBtn} onPress={()=>this.go()}>
									  <Text style={{color:"#fff",fontSize:15}}>去逛逛</Text>
								</TouchableOpacity>
						  </View>
						  }
					</View>
			);

	  }
	  componentDidMount(){
			this._fetchData();
	  }
	  //去逛逛
	  go(){
			if(this.props.nav){
				  this.props.nav()
			}else{
				  this.props.navigator.popToTop()
			}

	  }
	  /*首页商品列表数据*/
	  _fetchData(){
			var self = this;
			let formData = new FormData();
			formData.append("act", "cartShow");
			Util.get(formData, function (data) {
				  if (data.flag){
						let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
						let length=data.data.cartGoods.goods_list.length;//总数据
						if(length===0){
							  self.setState({
									showNull:true
							  })
							  return;
						}
						arr=[]
						for (var i=0; i<length; ++i) {
							  arr.push(i);
							  checkArr[i]=true
						}
						self.setState({
							  dataSource:ds.cloneWithRows(arr),
							  isShow:true,
							  data:data.data.cartGoods.goods_list,
							  cartTotolMoney:data.data.cartTotolMoney,
							  checks:checkArr,
							  cartGoodsCount:data.data.cartGoodsCount
						})
				  }

			}, function (err) {
			})

	  }

	  renderRowCart(rowdata){
           var data=this.state.data[rowdata];
			return(

					<TouchableHighlight

							style={styles.rowFront}
							underlayColor ={'#fff'}
                              onPress={()=>{}}
							>
						  <View style={styles.listItems}>

								<TouchableOpacity style={styles.listItemsLeft} onPress={()=>this.changeCheck(rowdata)}>
									  {this.state.checks[rowdata]?
								           <Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="stretch"/>:
											<View style={styles.degStyle}></View>
									  }
								</TouchableOpacity>
								<View style={styles.listItemsMiddle}>
									    <TouchableOpacity style={{width:72, height:72}} onPress={()=>{}}>
									       <Image source={{uri:data.goods_img}} style={{width:72, height:72}}/>
										</TouchableOpacity>
									  <View style={styles.goods_middle}>
											<Text style={styles.goods_name} numberOfLines={2}>{data.goods_name}</Text>
											<Text style={styles.goods_price}>¥{data.market_price}</Text>
									  </View>
								</View>
								<View style={styles.changeNumView}>
									  <TouchableOpacity style={styles.changeNum} onPress={()=>this.updateCartNum(rowdata,data.rec_id,data.goods_number-1)}>
											<Text style={{fontSize:16,color:"#333"}}>-</Text>
									  </TouchableOpacity>
									  <View style={styles.viewInputView} >
									      <TextInput keyboardType="numeric" style={styles.inputNum} underlineColorAndroid='transparent' onChangeText={(value)=>this.changeTextNum(rowdata,value)} onBlur={()=>this.updateCartNum(rowdata,data.rec_id,data.goods_number)}  onSubmitEditing={()=>this.updateCartNum(rowdata,data.rec_id,data.goods_number)}   value={data.goods_number}/>
										</View>
									  <TouchableOpacity style={styles.changeNum}  onPress={()=>this.updateCartNum(rowdata,data.rec_id,parseInt(data.goods_number)+1)}>
											<Text style={{fontSize:16,color:"#333"}}>+</Text>
									  </TouchableOpacity>
								</View>
						  </View>
					</TouchableHighlight>
			);
	  }
	  renderHideDelete(rowdata){
			let data=this.state.data[rowdata];
			return(
						  <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={() =>this.deleteCart(data.rec_id,rowdata)}>
								<Text style={styles.backTextWhite}>删除</Text>
						  </TouchableOpacity>
			)
	  }

    //改变单个商品选中状态
	  changeCheck(i){
			checkArr[i]=!checkArr[i];

			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.setState({
				  checkAll:true,
				  checks:checkArr,
				  dataSource:ds.cloneWithRows(arr)
			})
			var self=this;
			//改变全选状态
			checkArr.forEach(function (item,index,input) {
				 if(item==false){
					   self.setState({
							 checkAll:false
					   })
				 }
			});
			//改变总价
			this.getAllPrice()
	  }
	  //全选
	  checkAll(){
			if(this.state.checkAll){
				  checkArr.forEach(function (item,index,input) {
						checkArr[index]=false;
				  })
			}else{
				  checkArr.forEach(function (item,index,input) {
						checkArr[index]=true;
				  })
			}
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.setState({
				  checkAll:!this.state.checkAll,
				  checks:checkArr,
				  dataSource:ds.cloneWithRows(arr),
			})
			//改变总价
			this.getAllPrice()
	  }
	  //计算总价
	  getAllPrice(){
			let Price=0;
			let num=0;
			let data=this.state.data;
			let allNum=0;
			checkArr.forEach(function (item,index) {
				  if(checkArr[index]){
						Price=parseInt(data[index].goods_number)*parseInt(data[index].market_price)+Price;
						num=parseInt(data[index].goods_number)+num
				  }
				  allNum=parseInt(data[index].goods_number)+allNum;
			})
			this.setState({
				  cartTotolMoney:Price,
				  cartGoodsCount:num
			})
			Util.setStorage("cartNum",allNum+"");
			if(this.props.badge){
				  this.props.badge(allNum)
			}
	  }
	  //改变购物车数量
	  updateCartNum(id,recId,nums){
			let d=this.state.data;
			d[id].goods_number=nums+"";
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			var self = this;
			let formData = new FormData();
			formData.append("act", "updateCartGoods");
			formData.append("recId",recId);
			formData.append("Number",nums);
			Util.get(formData, function (data) {
				  if (data.flag){
						self.setState({
							  dataSource:ds.cloneWithRows(arr),
							  data:d
						})

						self.getAllPrice()

				  }},function(error) {
			})
	  }
	  changeTextNum(i,value){
			let data=this.state.data;
			data[i].goods_number=value;
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.setState({
				  dataSource:ds.cloneWithRows(arr),
				  data:data
			})
	  }
	  deleteCart(recId,id){
			let recIdArr=[];
			let d=this.state.data;
			let b;
			if(recId===0){
			checkArr.forEach(function (item,index) {
				  if(checkArr[index]){
						recIdArr.push(d[index].rec_id)
				  }
			    });
			}else{
				  recIdArr.push(recId)
			}
			var self = this;
			let formData = new FormData();
			formData.append("act", "delCartGoods");
			formData.append("recId",recIdArr+"");

			Util.get(formData, function (data) {
				  if (data.flag){

						let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
						d=data.data.cartGoods.goods_list;
						let length=d.length;//总数据
						if(length===0){
							  self.setState({
									isShow: false,
									showNull:true
							  });
						}
						if(recId===0){
						arr.splice(0,arr.length);
						checkArr.splice(0,checkArr.length);
						for (var i=0; i<length; ++i) {
							  arr.push(i);
							  checkArr[i]=false
						}
						}else{
							  arr.pop();
							  checkArr.splice(id,1)
						}
						self.setState({
							  dataSource:ds.cloneWithRows(arr),
							  data:d,
							  checks:checkArr
						});
						self.getAllPrice()

				  }},function(error){
				  console.log(error)
			})
	  }
	  //确认提交购物车商品
	  orderSure(){
			let d=this.state.data;
			let recIdArr=[];
			let numArr=[];
			checkArr.forEach(function (item,index) {
				  if(checkArr[index]){
						recIdArr.push(d[index].rec_id)
						numArr.push(d[index].goods_number)
				  }
			});
			var self = this;
			let formData = new FormData();
			formData.append("act", "checkout");
			formData.append("recId",recIdArr+"");
			formData.append("goodsNum",numArr+"");
			Util.get(formData, function (data){
                if(data.flag){
					  Util._jumpFocus(self.props.navigator,OrderSure, "确认订单",{data:data.data})
				}
			},function(err){

			})
	  }
}

const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#f2f2f2",
			flex:1
	  },
	  container_emply:{
			alignItems:'center',
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
	  degStyle:{
			width:Platform.OS==='ios'?16:14,
			height:Platform.OS==='ios'?16:14,
			marginLeft:10,
			marginRight:10,
			borderColor:"#bababa",
			borderWidth:Util.pixel,
			borderRadius:Platform.OS==='ios'?8:7
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
			height:22,
			borderColor:"#b3b3b3",
			borderWidth:1,
			flexDirection:'row',
			position:'absolute',
			right:10,
			bottom:0
	  },
	  changeNum:{
			width:20,
			height:20,
			alignItems: 'center',
			justifyContent: 'center'
	  },
	  viewInputView:{
			width:54,
			height:20,
			borderLeftColor:"#b3b3b3",
			borderRightColor:"#b3b3b3",
			borderLeftWidth:1,
			borderRightWidth:1
	  },
	  inputNum:{
			width:54,
			height:18,
			textAlign:'center',
			padding:0
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
	  },
	  loginBtn:{
			backgroundColor:"#f20583",
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
			marginTop:24,
			width:Util.size.width*0.3,
			borderRadius:2
	  }
});
module.exports=Cart