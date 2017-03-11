/**
 * Created by liuxiaoya；
 *date 2017/2/17 0017.
 *description:商品详情
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Image,
		ScrollView,
		Animated,
		Easing,
		TouchableOpacity,
		Alert
		} from 'react-native';
var screenWidth=Util.size.width;
import Util from './../Common/util';
var dataTest=require('./../data/cart.json');

import GoodsGoods from './goodsGoods';
import GoodsDetail from './goodsDetail';
import GoodsEvaluate from './goodsEvaluate';
import KECart from './../Shop/KECart';
var start=0;
var timestamp=0
class Goods extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  fadeAnim: new Animated.Value(6),
				  isShow: false,
				  currentPage:0,
				  item:0,
				  scrollEnabled:false,
				  isShowDetail:false,
				  isShowEvaluate:false,
				  cartNum:0,
				  rotation: new Animated.Value(0),
				  top: new Animated.Value(0),
				  left: new Animated.Value(0),
				  width: new Animated.Value(0),
				  height: new Animated.Value(0),
				  joincart:true
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
								<View style={styles.navItems}>

								      <TouchableOpacity activeOpacity={1} onPress={()=>this.scrollToView(0)} style={styles.navItemsView}><Text style={[{color:"#9b9b9b"},styles.textOne]}>商品</Text></TouchableOpacity>
									  <TouchableOpacity activeOpacity={1} onPress={()=>this.scrollToView(1)} style={styles.navItemsView}><Text style={[{color:"#9b9b9b"},styles.textOne]}>详情</Text></TouchableOpacity>
										<TouchableOpacity activeOpacity={1} onPress={()=>this.scrollToView(2)} style={styles.navItemsView}><Text style={[{color:"#9b9b9b"},styles.textOne]}>评价</Text></TouchableOpacity>
									  <Animated.View
											  style={[styles.animateLine,{transform: [{translateX: this.state.fadeAnim},]}]}>
									  </Animated.View>
								</View>
						  </View>
						  {/*滚动部分*/}
						  {this.state.isShow?
							<View style={{flex:1}}>
								<ScrollView
										ref='scrollView'
										horizontal={true}
										showsHorizontalScrollIndicator={false}
										pagingEnabled={true}
										scrollEnabled={this.state.scrollEnabled}
										onMomentumScrollEnd ={(e) => this.onAnimationEnd(e)}>

									  <ScrollView style={styles.scrollPage}
												  onScrollBeginDrag={(e) =>this.ScrollGoodsStart(e)}
												  onScrollEndDrag={(e) =>this.ScrollGoodsEnd(e)}
											  >
											<GoodsGoods data={this.state.goods} goodsFirstComment={this.state.goodsFirstComment?this.state.goodsFirstComment:""} changeEnabled={(value)=>this.setState({scrollEnabled:value})} num={this.state.num} goEvaluate={()=>this.scrollToView(2)}/>
									  </ScrollView>
									  <ScrollView style={styles.scrollPage}>
											{this.state.isShowDetail&&<GoodsDetail  data={this.state.content} goodsMsg={this.state.goods} />}
									  </ScrollView>
									  <ScrollView style={styles.scrollPage}>
											{this.state.isShowEvaluate&&<GoodsEvaluate  data={this.state.comment} num={this.state.num}/>}
									  </ScrollView>
								</ScrollView>
							</View>:null}
						  {/*详情页底部*/}
						  <View style={styles.bottomCommon}>
								<TouchableOpacity style={styles.goCart} onPress={()=>Util._jumpFocus(this.props.navigator,KECart)}>
								    <Image source={{uri:"tabbar_cart"}} style={{width:18,height:18,marginTop:4}}/>
									  <Text style={styles.textB}>购物车</Text>
									  <View style={styles.cartNum}><Text style={styles.textC}>{this.state.cartNum}</Text></View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.joinCart} onPress={()=>this.joinCart()}>
									  <Text style={styles.textA}>加入购物车</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.goBuy}>
									  <Text style={styles.textA} onPress={()=>this.buyNow()}>立即购买</Text>
								</TouchableOpacity>
						  </View>
						  {/*<View style={styles.level}>
						       <View style={styles.joinOpe}>

							   </View>
						  </View>*/}
						  {/* {!this.state.joincart&&
								<Animated.Image source={{uri:"http://192.168.1.176/images/goods/20160614/mthumb_d41ca01a89af2eb2c9b275a24f2edc65210615owq2cv.jpg"}} style={{
											position:'absolute',
											width: this.state.width.interpolate({
														inputRange: [0, 1],
														outputRange: [300,10]
												  }),

											height: this.state.height.interpolate({
														inputRange: [0, 1],
														outputRange: [300,10]
												  }),
											transform: [{
												  rotateZ: this.state.rotation.interpolate({
														inputRange: [0, 1],
														outputRange: ['0deg', '720deg']
												  })
											},
											{
											translateX: this.state.left.interpolate({
														inputRange: [0, 1],
														outputRange: [Util.size.width*0.25,62]
												  })
											},
											{
											translateY: this.state.top.interpolate({
														inputRange: [0, 1],
														outputRange: [0,Util.size.height-60]
												  })
											}
											]
										}}>
								</Animated.Image>}*/}
					</View>
			);

	  }
	  componentDidMount(){
			this._fetchData()
	  }
	  /*初始化详情页数据*/
	  _fetchData(){
			var self = this;
			let formData = new FormData();
			formData.append("act", "getGoodDetail");
			formData.append("gid",this.props.id);
			Util.get(formData, function (data) {
				  if (data.flag > 0) {
						var num=data.data.comment.length;
						self.setState({
							  isShow:true,
							  cartNum:data.data.cartGoodsNum,
							  goods:data.data.goods,
							  content:data.data.content,
							  comment:data.data.comment,
							  num:num
						})
						if(num>0){
							  self.setState({
									goodsFirstComment: data.data.comment[0]
							  })
						}
						self.setState({
							  isShow:true})
				  }else{
						if(data.flag.msg!=""){
							  Util.toast(data.flag.msg)
						}
				  }

			}, function (err) {
			})
	  }

	  ScrollGoodsStart(e){
			start=e.nativeEvent.contentOffset.y;
	  }
	  ScrollGoodsEnd(e){
			if(Math.round(e.nativeEvent.contentOffset.y)==Math.round(start)){
				  this.scrollToView(1)
			}
	  }
	 /* onScrollEnd(e){
			this.setState({
				  top: -e.nativeEvent.contentOffset.y,
			});

	  }*/
//当一帧滚动完毕的时候调用
	  onAnimationEnd(e){
			//求出水平方向偏移量
			var offsetLeft=Math.round(e.nativeEvent.contentOffset.x);
			var width=Math.round(screenWidth)
			var currentPage=Math.floor(offsetLeft/width);
			var value=6+50*currentPage;
			Animated.timing(
					this.state.fadeAnim,
					{toValue:value ,
						  duration: 0 }
			).start();

			if(currentPage==0){
				  this.setState({
						scrollEnabled:false,
						currentPage:currentPage,
						fadeAnim:new Animated.Value(value)
				  })
			}else{
				  this.setState({scrollEnabled:true,
						currentPage:currentPage,
						fadeAnim:new Animated.Value(value)
				  })
				  if(currentPage==1&&!this.state.isShowDetail){
						this.setState({isShowDetail:true});
				  }
				  else if(currentPage==2&&!this.state.isShowEvaluate){
						this.setState({isShowEvaluate:true});
				  }
			}
	  }
	  scrollToView(item){
			var scrollView=this.refs.scrollView;
			var value=6+50*item;
			if(this.state.currentPage!=item){
				  if(item==1&&!this.state.isShowDetail){
						this.setState({isShowDetail:true});
				  }
				  else if(item==2&&!this.state.isShowEvaluate){
						this.setState({isShowEvaluate:true});
				  }
				  Animated.timing(
						  this.state.fadeAnim,
						  {toValue: value,
								duration: 100 }
				  ).start();
				  scrollView.scrollResponderScrollTo({x:screenWidth*item,y:0,animated:true})


				  if(item==0){
						this.setState({
							  scrollEnabled:false,
							  currentPage:item,
							  fadeAnim:new Animated.Value(value)
							  })
				  }else{
						this.setState({scrollEnabled:true,
							  currentPage:item,
							  fadeAnim:new Animated.Value(value)
						})
				  }

			}
	  }
	  //加入购物车
	  joinCart(){
			var self = this;
			/*if(!self.state.joincart){
				  return;
			}
			self.setState({
				  joincart:false
			});*/

			let formData = new FormData();
			formData.append("act", "addCartGoods");
			formData.append("goods_id", this.props.id);
			formData.append("number", "1");
			Util.get(formData, function (data) {
				  if (data.flag) {
						     /* self.startAnimate();
                               setTimeout(function(){

									 self.setState({
										   cartNum: data.data.number,
										   joincart:true
									 })
							   },2350);*/
                        let numberCart=data.data.number;
						self.setState({
							  cartNum: numberCart
						})
						Util.setStorage("cartNum",numberCart+"")
						if(self.props.badge){

							  self.props.badge(numberCart)
						}

				  }else{
						Util.toast("加入购物车失败")
				  }
			}, function (err) {
			})
	  }
/*	  startAnimate(){
			let timing = Animated.timing;
			Animated.sequence([
				  Animated.parallel([ 'rotation'].map(property =>{
						return timing(this.state[property], {
							  toValue: 1,
							  duration: 1500,
							  easing: Easing.linear
						});
				  })),
				  Animated.delay(200),
				  Animated.parallel([ 'top','left','width','height'].map(property =>{
						return timing(this.state[property], {
							  toValue: 1,
							  duration: 600,
							  easing: Easing.easeOutQuad
						});
				  })),
				  Animated.parallel([ 'top','left','width','height', 'rotation'].map(property=>{
						return timing(this.state[property], {
							  toValue:0,
							  duration:0
						})
				  }))

			]).start();
	  }*/
	  buyNow(){
			var self = this;
			let formData = new FormData();
			formData.append("act", "addCartGoods");
			formData.append("goods_id", this.props.id);
			formData.append("number", 1);
			Util.get(formData, function (data) {
				  if (data.flag > 0) {
						Util.setStorage("cartNum",data.data.number)
						Util._jumpFocus(self.props.navigator,KECart);

				  }else{
						Util.toast("加入购物车失败")
				  }

			}, function (err) {
			})
	  }
}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#f2f2f2",
			flex:1
	  },
	  scrollPage:{
			width:screenWidth
	  },
	  nav:{
			backgroundColor:"#fff",
			alignItems:'center',
			height:Platform.OS==='ios'?60:44,
			paddingTop:Platform.OS==='ios'?15:0,
			justifyContent:'center',
			borderBottomWidth:1,
			borderBottomColor:'#d4d4d4',
			position:'relative',
			zIndex:10
	  },
	  lunbo:{
			width:screenWidth,
			position:'absolute',
			left:0,
			zIndex:2
	  },
	  animateImg:{
			width:0,
			height:0,
			position:'absolute'
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
	  navItems:{
			flexDirection:"row",
            width:150
	  },
	  navItemsView:{
			width:38,
			marginLeft:6,
			marginRight:6,
			height:Platform.OS==='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
	  },
	  animateLine:{
			position:'absolute',
			width:38,
			height:2,
			backgroundColor:"#f20583",
			bottom:Platform.OS==='ios'?2:0,
			zIndex:3
	  },
	  textOne:{
			fontSize:14,

	  },
	  circle:{
			flexDirection:'row',
			height:38,
			width:38,
			borderRadius:22,
			backgroundColor:"#b1b1b1",
			position:'absolute',
			bottom:20,
			right:10,
			alignItems:'center',
			justifyContent:'center'
	  },
	  circleIcon:{
			color:"#fff",
			fontSize:14,

	  },
	  bottomCommon:{
			height:Platform.OS==='ios'?54:48,
			flexDirection:'row'
	  },
	  goCart:{
			width:110,
			alignItems:'center',
			justifyContent:'center',
			backgroundColor:"#fff",
			borderTopWidth:1,
			borderTopColor:"#b3b3b3"
	  },
	  joinCart:{
			width:(screenWidth-110)/2,
			backgroundColor:"#f1b80c",
			alignItems:'center',
			justifyContent:'center'
	  },
	  goBuy:{
			width:(screenWidth-110)/2,
			backgroundColor:"#f20583",
			alignItems:'center',
			justifyContent:'center'
	  },
	  textA:{
			color:"#fff",
			fontSize:14
	  },
	  textB:{
			color:"#999",
			fontSize:10,
			marginTop:2
	  },
	  cartNum:{
          backgroundColor:"#f20583",
			borderRadius:10,
			position:'absolute',
			left:58,
			top:Platform.OS==='ios'?4:3,
			paddingLeft:4,
			paddingRight:4
	  },
	  textC:{
			color:"#fff",
			fontSize:10
	  },
	  level:{
			backgroundColor:"rgba(0,0,0,0.3)",
			width:Util.size.width,
			height:Util.size.height,
			position:'absolute',
			left:0,
			bottom:0,
			zIndex:10
	  },
	  joinOpe:{
			position:'absolute',
			left:0,
			bottom:0,
			width:Util.size.width,
			height:200,
			backgroundColor:'#fff',
			paddingBottom:20
	  }
});
module.exports=Goods;