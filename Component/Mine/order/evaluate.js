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
		ScrollView,
		TextInput,
		Alert
		} from 'react-native';

import Util from './../../Common/util';
import Nav from './../../Common/navComponent';
var dataTest=require("./../../data/logis.json");
class Evaluate extends Component{
	  constructor(props){
			super(props);
			this.state={
				  isShow:false,
				  store:[]
			}
	  }
	  render() {
			return (

					<View style={styles.container}>
						  <Nav title="评价订单" navigator={this.props.navigator}/>
						  {this.state.isShow&&
						  <ScrollView>
						     {this.renderList()}
						  </ScrollView>}
					</View>
			);
	  }
	  componentDidMount(){
			this.fetchData()
	  }
	  fetchData(){
			this.score=[]
			for(var i=0;i<dataTest.data.length;i++){
				  this.score[i]=0
			};
			this.setState({
				  score:this.score,
				  isShow:true
			})
	  }
	  renderList(){
			var data=dataTest.data;
			var arr=[];
			for(let i=0;i<data.length;i++) {
				  let currentScore=this.state.score[i]
				  arr.push(<View key={i} style={{marginBottom:10,backgroundColor:"#fff"}}>
						<View  style={styles.cellStyle}>
							  <Image source={{uri: "http://img.youde.com/images/goods/20151202/f3ccdd27d2000e3f9255a7e3e2c48800101636mkzh1w.jpg"}} style={{width:72, height:72}}/>
							  <View style={styles.goods_middle}>
									<Text style={styles.goods_name} numberOfLines={2}>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</Text>
									<Text style={styles.goods_price}>¥99.00</Text>
							  </View>
							  <Text style={[styles.addressAddress,{marginTop:56,marginLeft:8}]}>X1</Text>
						</View>
						<View style={styles.giveScore}>
							  <Text style={styles.text1}>满意度评分</Text>
							  <View style={{flexDirection:'row'}}>
									<TouchableOpacity style={styles.touchView} onPress={()=>this.renderScore(i,1)}>
										  <Image source={{uri:currentScore>=1?"star_check":"star"}} style={styles.star}/>
									</TouchableOpacity>
									<TouchableOpacity style={styles.touchView} onPress={()=>this.renderScore(i,2)}>
										  <Image source={{uri:currentScore>=2?"star_check":"star"}} style={styles.star}/>
									</TouchableOpacity>
									<TouchableOpacity style={styles.touchView} onPress={()=>this.renderScore(i,3)}>
										  <Image source={{uri:currentScore>=3?"star_check":"star"}} style={styles.star}/>
									</TouchableOpacity>
									<TouchableOpacity style={styles.touchView} onPress={()=>this.renderScore(i,4)}>
										  <Image source={{uri:currentScore>=4?"star_check":"star"}} style={styles.star}/>
									</TouchableOpacity>
									<TouchableOpacity style={styles.touchView} onPress={()=>this.renderScore(i,5)}>
										  <Image source={{uri:currentScore==5?"star_check":"star"}} style={styles.star}/>
									</TouchableOpacity>
							  </View>
						</View>
						<TextInput multiline ={true} style={styles.TextInputStyle} textAlignVertical="top" placeholder="分享你的心得" placeholderTextColor="#999999"  underlineColorAndroid='transparent'/>
						<TouchableOpacity style={styles.touchUpload} >
								<Image source={{uri:"camera"}} style={styles.camera}/>
						 </TouchableOpacity>
				  </View>)
			}
			return arr;
	  }
	  renderScore(i,j){
			this.score[i]=j;
			this.setState({
				  score:this.score
			})
	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			backgroundColor: "#f1f1f1",
	  },
	  cellStyle:{
			height:86,
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
			fontSize:12,
			color:"#333333",
			lineHeight:18
	  },
	  goods_price:{
			fontSize:12,
			color:"#686868",
			marginTop:26
	  },
	  addressAddress:{
			width:Util.size.width-73,
			fontSize:12,
			color:"#999999",
			lineHeight:18
	  },
	  giveScore: {
			height:Platform.OS==='ios'?46:40,
			alignItems:'center',
			flexDirection:'row',
			marginLeft:10,
			marginRight:10,
			borderTopColor:"#cdcdcd",
			borderTopWidth:0.5,
			justifyContent:"space-between"
	  },
	  text5:{
			fontSize:14,
			color:"#333"
	  },
	  touchView:{
			height:Platform.OS==='ios'?46:40,
			alignItems:'center',
			justifyContent:"center",
			width:20,
			marginRight:6
	  },
	  star:{
			width:12,
			height:12
	  },
	  text1:{
			fontSize:14,
			color:"#525252"
	  },
	  TextInputStyle:{
			marginLeft:10,
			color:"#333",
			width:Util.size.width-20,
			height:Platform.OS==='ios'?108:102,
			padding:6,
			fontSize:12,
			borderWidth:0.5,
			borderColor:'#ccc',
			backgroundColor:"#f2f2f2",
			borderRadius:4
	  },
	  touchUpload:{
			width:60,
			height:60,
			alignItems:'center',
			justifyContent:"center",
			borderWidth:0.5,
			borderColor:'#ccc',
			backgroundColor:"#f2f2f2",
			marginTop:8,
			marginLeft:10,
			marginBottom:10
	  },
	  camera:{
			width:30,
			height:24
	  }
});

module.exports=Evaluate