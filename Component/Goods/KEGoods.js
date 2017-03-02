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
		TouchableOpacity,
		Alert
		} from 'react-native';
var screenWidth=Util.size.width;
import Util from './../Common/util';
var dataTest=require('./../data/cart.json');

import GoodsGoods from './goodsGoods';
import GoodsDetail from './goodsDetail';
import GoodsEvaluate from './goodsEvaluate';
var img=[];
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
				  top:0,
				  scrollEnabled:false
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
											  style={[styles.animateLine,{transform: [{translateX: this.state.fadeAnim}, ]}]}>
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
												  onMomentumScrollEnd ={(e) => this.onScrollEnd(e)}
											  >
											<GoodsGoods changeEnabled={(value)=>this.setState({scrollEnabled:value})} num={10} goEvaluate={()=>this.scrollToView(2)}/>
									  </ScrollView>
									  <ScrollView style={styles.scrollPage}>
											<GoodsDetail/>
									  </ScrollView>
									  <ScrollView style={styles.scrollPage}>
										   <GoodsEvaluate/>
									  </ScrollView>
								</ScrollView>
							</View>:null}
						  {/*详情页底部*/}
						  <View style={styles.bottomCommon}>
								<TouchableOpacity style={styles.goCart}>
								    <Image source={{uri:"tabbar_cart"}} style={{width:18,height:18,marginTop:4}}/>
									  <Text style={styles.textB}>{this.state.currentPage}购物车</Text>
									  <View style={styles.cartNum}><Text style={styles.textC}>40</Text></View>
								</TouchableOpacity>
								<TouchableOpacity style={styles.joinCart}>
									  <Text style={styles.textA}>加入购物车</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.goBuy}>
									  <Text style={styles.textA}>立即购买</Text>
								</TouchableOpacity>
						  </View>
					</View>
			);

	  }
	  componentDidMount(){
			img=["http://www.kangease.com/images/goods/20160614/f8787da6f335272ef5e12d613adcb1ae175749wkqtdj.jpg","http://www.kangease.com/images/goods/20160614/7d81255d1deda11c432a10e34c45ba5d210615lsp39i.jpg","http://www.kangease.com/images/goods/20160614/d41ca01a89af2eb2c9b275a24f2edc65210615owq2cv.jpg"]
			this.setState({
				  isShow:true
			});
	  }
	  /*首页商品列表数据*/
	  _fetchData(callback){


	  }

	  ScrollGoodsStart(e){
			start=e.nativeEvent.contentOffset.y;
	  }
	  ScrollGoodsEnd(e){
			console.log(start)
			console.log(e.nativeEvent.contentOffset.y&&start!=0)
			if(Math.round(e.nativeEvent.contentOffset.y)==Math.round(start)){
				  this.scrollToView(1)
			}
	  }
	  onScrollEnd(e){
			this.setState({
				  top: -e.nativeEvent.contentOffset.y,
			});

	  }
//当一帧滚动完毕的时候调用
	  onAnimationEnd(e){
			//求出水平方向偏移量
			var offsetLeft=Math.round(e.nativeEvent.contentOffset.x);
			var width=Math.round(screenWidth)
			var currentPage=Math.floor(offsetLeft/width);
			var value=6+50*currentPage
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
			}
	  }
	  scrollToView(item){
			var scrollView=this.refs.scrollView;
			var value=6+50*item;
			if(this.state.currentPage!=item){
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
			fontSize:14,

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
	  }
});
module.exports=Goods;