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
				  imageShow:false
			}
			this.imgHeight=new Array;
	  }

	  render() {
			return (
					<View style={styles.container}>
								<View style={{backgroundColor:"#fff"}}>
									  <ItemTitle title="商品参数"/>
									  <View style={{paddingLeft:10,paddingTop:6,paddingBottom:12}}>
											<View style={{flexDirection:'row',marginTop:6}}>
												  <Text style={[styles.text999,{marginRight:16}]}>商品名称</Text>
												  <Text style={styles.text333} numberOfLines={1}>骨源液</Text>
											</View>
											<View style={{flexDirection:'row',marginTop:6}}>
												  <Text style={[styles.text999,{marginRight:16}]}>通用名称</Text>
												  <Text style={styles.text333} numberOfLines={1}>骨源液</Text>
											</View>
											<View style={{flexDirection:'row',marginTop:6}}>
												  <Text style={[styles.text999,{marginRight:16}]}>生产企业</Text>
												  <Text style={styles.text333} numberOfLines={1}>骨源液</Text>
											</View>
											<View style={{flexDirection:'row',marginTop:6}}>
												  <Text style={[styles.text999,{marginRight:16}]}>生产规格</Text>
												  <Text style={styles.text999}>6小盒*15小袋/小盒</Text>
											</View>
									  </View>
								</View>
								<View style={styles.detail}>
									  <ItemTitle title="商品详情"/>
									  <View style={{marginLeft:10,paddingTop:14}}>
											{this.state.imageShow&&this.renderImage()}
									  </View>
									  <GetBottom title="已经到底了"/>
								</View>
					</View>
			);

	  }
	  componentDidMount() {

			var dataImage=dataTest.data;
			var that=this;
			dataImage.map(function (item,index,input) {//渲染图片详情
				  Image.getSize(item.image, (width, height) => {
						that.imgHeight[index]=(screenWidth - 20) / width * height;
						if(index===dataImage.length-1){
							  that.setState({
									imageShow:true
							  });

						}
				  });

			})

     }
	  renderImage(){
			var dataImage=dataTest.data;
			var trueHeight=this.imgHeight
			var imageArr=dataImage.map(function (item,index,input) {
						return <Image key={index} source={{uri:dataImage[index].image}} style={{width:screenWidth-20,height:trueHeight[index]}} resizeMode="contain"/>;
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