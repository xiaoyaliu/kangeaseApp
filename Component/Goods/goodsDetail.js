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
		Image,
		Platform,
		ScrollView
		} from 'react-native';
import Util from './../Common/util';
import GetBottom from './../Common/getBottom';
import ItemTitle from './../Common/itemTitle';
var dataTest=require('./test.json');
var screenWidth=Util.size.width;
class Goods extends Component {
	  constructor(props) {
			super(props);
			this.state={
				  data:this.props.data,
				  goodsMsg:this.props.goodsMsg,
				  imageShow:false
			}
			this.imgHeight=new Array;
	  }

	  render() {
			let goodsMsg=this.props.goodsMsg;
			return (
					<View style={styles.container}>
								<View style={{backgroundColor:"#fff"}}>
									  <ItemTitle title="商品参数"/>
									  <View style={{paddingLeft:10,paddingTop:6,paddingBottom:12}}>
											<View style={{flexDirection:'row',marginTop:6}}>
												  <Text style={[styles.text999,{marginRight:16}]}>商品名称</Text>
												  <Text style={styles.text333} numberOfLines={1}>{goodsMsg.goods_name}</Text>
											</View>
											<View style={{flexDirection:'row',marginTop:6}}>
												  <Text style={[styles.text999,{marginRight:16}]}>通用名称</Text>
												  <Text style={styles.text333} numberOfLines={1}>{goodsMsg.goods_alias}</Text>
											</View>
											<View style={{flexDirection:'row',marginTop:6}}>
												  <Text style={[styles.text999,{marginRight:16}]}>生产企业</Text>
												  <Text style={styles.text333} numberOfLines={1}>{goodsMsg.business}</Text>
											</View>
											<View style={{flexDirection:'row',marginTop:6}}>
												  <Text style={[styles.text999,{marginRight:16}]}>生产规格</Text>
												  <Text style={styles.text999}>{goodsMsg.norms}</Text>
											</View>
									  </View>
								</View>
								<View style={styles.detail}>
									  <ItemTitle title="商品详情"/>
									  <View style={{marginLeft:10,paddingTop:14,paddingBottom:20}}>
											{this.state.imageShow&&this.renderImage()}
									  </View>
									  {this.state.imageShow&&<GetBottom title="已经到底了"/>}
								</View>
					</View>
			);

	  }
	  componentDidMount() {
			var dataImage=this.state.data.detailiIMG;
			if(dataImage.length>0){
			var that=this;
			dataImage.map(function (item,index,input){//渲染图片详情
				  Image.getSize(item, (width, height) => {
						that.imgHeight[index]=(screenWidth - 20) / width * height;
						if(index===dataImage.length-1){
							  that.setState({
									imageShow:true
							  });

						}
				  });
			})
			}

     }
	  renderImage(){
			var dataImage=this.state.data.detailiIMG;
			var trueHeight=this.imgHeight;
			var imageArr=dataImage.map(function (item,index,input) {
						return <Image key={index} source={{uri:dataImage[index]}} style={{width:screenWidth-20,height:trueHeight[index]}} resizeMode="contain"/>;
			})
			return imageArr;

	  }

}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#f3f3f3"
	  },
	  text999:{
			fontSize:12,
			color:"#999999",

	  },
	  text333:{
			fontSize:12,
			color:"#333",

	  },
      detail:{
             backgroundColor:"#fff",
			 marginTop:Platform.OS==='ios'?44:38,
	  }
});
module.exports=Goods;