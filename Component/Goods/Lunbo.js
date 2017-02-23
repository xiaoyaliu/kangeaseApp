/**
 �ֲ�
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
				  currentPage:0
			}
	  },
	  render(){
			return(
					<View style={{width:screenWidth,height:screenWidth}}>
						   <ScrollView
						   ref='scrollView'
						   horizontal={true}
						   showsHorizontalScrollIndicator={false}
						   pagingEnabled={true}
						   onScrollEndDrag={this.onEndDrag}
						   onScrollBeginDrag={this.onStartDrag}
						   onMomentumScrollEnd={(e) => this.onAnimationEnd(e)}

						   >
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
				//��scrollView����
				var offsetX=currentPage*screenWidth;
				scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true})
		  },this.props.duration)
	  },*/
	  renderAllImage(){
			var img=this.props.img;
	       var allChild=[];
			for(var i=0;i<img.length;i++){
				  allChild.push(
						  <TouchableOpacity activeOpacity={1} key={i} style={{width:screenWidth,height:screenWidth,alignItems:'center',justifyContent:'center',backgroundColor:"#fff"}}>
								<Image  source={{uri:img[i]}} style={{width:screenWidth-40,height:screenWidth-40}} />
						  </TouchableOpacity>
				  )
			}
			return allChild;
	   },
	  //��������ԭ��
	  renderPageCircle(){
			var img=this.props.img;
			return <View style={styles.circle}><Text style={styles.circleIcon}>{this.state.currentPage+1}/{img.length}</Text></View>;
	  },
	  //��һ֡������ϵ�ʱ�����
	  onAnimationEnd(e){
			//���ˮƽ����ƫ����
			var offsetLeft=Math.round(e.nativeEvent.contentOffset.x);
			var width=Math.round(screenWidth)
			var currentPage=Math.floor(offsetLeft/width);
			this.setState({
				  currentPage:currentPage
			});
			this.props.item(currentPage)
	  },
	  //�������ֶ���ק��ʱ����á�
	 /* onEndDrag(){
			this.startTimer()
	  },*/
	  //����ʼ�ֶ���ק��ʱ����á�
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
			fontFamily:"����"
	  }
});
module.exports=Thumb;