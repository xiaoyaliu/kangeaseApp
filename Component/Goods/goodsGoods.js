/**
 * Created by liuxiaoya；
 *date 2017/2/18 0018.
 *description
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Image,
		TouchableOpacity
		} from 'react-native';
import Util from './../Common/util';
import ItemTitle from './../Common/itemTitle';
import LunBoCom from './Lunbo';//图片轮播
var img=["http://www.kangease.com/images/goods/20160614/f8787da6f335272ef5e12d613adcb1ae175749wkqtdj.jpg","http://www.kangease.com/images/goods/20160614/7d81255d1deda11c432a10e34c45ba5d210615lsp39i.jpg","http://www.kangease.com/images/goods/20160614/d41ca01a89af2eb2c9b275a24f2edc65210615owq2cv.jpg"]
class Goods extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  data:this.props.data
			}
	  }
	  onStartShouldSetResponder(){
			this.props.changeEnabled(true)
			return true
	  }
	  render() {
			let data=this.state.data;
			return (
					<View style={styles.container} ref="aaa">
						  <LunBoCom img={data.picArr} changeEnabled={(value)=>this.props.changeEnabled(value)}/>
						  {/*基本信息*/}
						  <View onStartShouldSetResponder={()=>this.onStartShouldSetResponder()}>
						  <View style={[styles.message,{padding:10}]}>
								<Text style={styles.text3}>{data.goods_name}</Text>
								<Text style={styles.text2}>¥{data.market_price}</Text>
								<Text style={styles.text1}>通用名：{data.goods_alias}</Text>
								<Text style={styles.text1}>生产企业：{data.business}</Text>
								<Text style={styles.text1}>产品规格：{data.norms}</Text>
						  </View>
						  {/*商品评价*/}
                           <View style={[styles.message,{paddingBottom:18}]}>
								 <ItemTitle title={"商品评价（"+this.props.num+"）"}/>
								 {this.props.goodsFirstComment!=""&&
                                 <View style={{padding:10}}>
								     <View style={styles.evaluatePart}>
									     <View style={{flexDirection:'row',width:100}}>
											   {this.renderStar()}
										 </View>
										   <Text style={styles.text4}>{Util.encryptStr(this.props.goodsFirstComment.user_name)}</Text>
									 </View>
									   <Text style={[styles.text5,{marginTop:4}]}>{this.props.goodsFirstComment.content}</Text>

								 </View>}
								 <TouchableOpacity style={styles.goEvaluate} onPress={()=>this.props.goEvaluate()}>
									   <Text style={{fontSize:11,color:"#999"}}>查看全部评价</Text>
								 </TouchableOpacity>
						   </View>
						 <View style={styles.bottomView}>
							   <Text style={styles.text5}>继续拖动，查看图文详情</Text>
						 </View>
						</View>
					 </View>
			);

	  }
	  renderStar(){
			var star=this.props.goodsFirstComment.comment_rank;
			var arr=[];
			for(let i=0;i<5;i++){
				  if(star>i){
						arr.push( <Image source={{uri:"star_check"}} style={styles.star} key={i}/>)
				  }else{
						arr.push( <Image source={{uri:"star"}} style={styles.star} key={i}/>)
				  }
			}
			return arr;
	  }
}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#f1f1f1"
	  },
	  message:{
			backgroundColor:"#fff",
			marginTop:10
	  },
	  text1:{
			fontSize:11,
			color:"#999",
			marginTop:2
	  },
	  text2:{
			fontSize:14,
			color:"#f10583",
			marginTop:4
	  },
       text3:{
			 marginTop:4,
	          fontSize:13,
			  color:"#333333",

          },
           text5:{
	          fontSize:11,
			  color:"#333333",

          },
	  text4:{
			fontSize:10,
			color:"#999",

	  },
	  star:{
			width:12,
			height:12,
			marginRight:3
	  },
	  evaluatePart:{
			flexDirection:'row',
			justifyContent:'space-between'
	  },

	  bottomView:{
			width:Util.size.width,
			height:Platform.OS==='ios'?50:44,
			justifyContent:'center',
			alignItems:'center'
	  },
	  goEvaluate:{
			width:90,
			height:24,
			marginTop:14,
			justifyContent:'center',
			alignItems:'center',
			borderWidth:1,
			borderColor:"#999",
			marginLeft:Util.size.width/2-46
	  }

});
module.exports=Goods;