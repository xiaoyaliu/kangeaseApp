/**
 轮播
 */

import React, { Component } from 'react';
import {
		ScrollView,
		StyleSheet,
		Text,
		TouchableOpacity,
		View,
		Image,
		Platform
		} from 'react-native';
import Dimensions from 'Dimensions';
var TimerMixin = require('react-timer-mixin');
var screenWidth=Dimensions.get('window').width;
var Thumb = React.createClass({
	  mixins: [TimerMixin],
	  getDefaultProps(){
			return{
				  duration:5000
			}
	  },
	  getInitialState(){
			return{
				  currentPage:0,
				  onStartShouldSetResponder:0
			}
	  },
	  onStartShouldSetResponder(e){
			console.log(111111)
			this.props.changeEnabled(false)
			return true
      },

	  render(){
			return(
					<View style={{width:screenWidth,height:screenWidth}}   onStartShouldSetResponder={()=>this.onStartShouldSetResponder()}>
						  <ScrollView  ref='scrollView'
								 horizontal={true}
								 showsHorizontalScrollIndicator={false}
								 pagingEnabled={true}
								 onPress={()=>console.log(222)}
								 onScrollEndDrag={this.onEndDrag}
								 onScrollBeginDrag={this.onStartDrag}
								 onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}>
								{this.renderAllImage()}
						  </ScrollView>
						  {this.renderPageCircle()}
					</View>
			)
	  },

	  componentDidMount(){

	  },
	  /*	  startTimer(){
	   var img=this.props.img;
	   var scrollView=this.refs.scrollView;
	   this.timer=this.setInterval(function(){
	   var currentPage=0;
	   if(this.state.currentPage<img.length-1){
	   currentPage=this.state.currentPage+1;
	   }else{
	   currentPage=0;
	   }
	   this.setState({
	   currentPage:currentPage
	   })
	   //让scrollView滚动
	   var offsetX=currentPage*screenWidth;
	   scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true})
	   },this.props.duration)
	   },*/
	  renderAllImage(){
			var img=this.props.img;
			var allChild=[];
			for(var i=0;i<img.length;i++){
				  allChild.push(
						  <View activeOpacity={1} key={i} style={{width:screenWidth,height:screenWidth,alignItems:'center',justifyContent:'center',backgroundColor:"#fff"}}>
								<Image  source={{uri:img[i].imgUrl}} style={{width:screenWidth-40,height:screenWidth-40}} />
						  </View>
				  )
			}
			return allChild;
	  },
	  //返回所有原点
	  renderPageCircle(){
			var img=this.props.img;
			return <View style={styles.circle}><Text style={styles.circleIcon}>{this.state.currentPage+1}/{img.length}</Text></View>;
	  },
	  //当一帧滚动完毕的时候调用
	  onAnimationEnd(e){
			//求出水平方向偏移量
			var offsetLeft=Math.round(e.nativeEvent.contentOffset.x);
			var width=Math.round(screenWidth)
			var currentPage=Math.floor(offsetLeft/width);
			this.setState({
				  currentPage:currentPage
			});
			//this.props.item(currentPage)
	  },
	  //当结束手动拖拽的时候调用。
	  /* onEndDrag(){
	   this.startTimer()
	   },*/
	  //当开始手动拖拽的时候调用。
	  /*onStartDrag(){
	   this.clearInterval(this.timer)
	   }*/
})

var styles = StyleSheet.create({
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

	  }
});
module.exports=Thumb;