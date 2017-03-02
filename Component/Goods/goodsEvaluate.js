/**
 * Created by liuxiaoya；
 *date 2017/2/18 0018.
 *description商品评价
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		ListView,
		Image
		} from 'react-native';
import Util from './../Common/util';
import ItemTitle from './../Common/itemTitle';
var dataTest=require('./../data/searchList.json');
class Goods extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  <View style={{height:10,backgroundColor:"#f1f1f1"}}></View>
						  <View>
								<ItemTitle title="商品评价"/>
								{this.state.isShow&&<ListView dataSource={this.state.dataSource}
										renderRow={(rowdata)=>this.renderRow(rowdata)}/>}
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
			this.setState({
				  dataSource:ds.cloneWithRows(dataTest.info),
				  isShow:true
			})
	  }

	  renderRow(rowdata){
			return(
					<View style={{marginLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10,borderBottomWidth:1,borderBottomColor:"#b3b3b3"}}>
						  <View style={styles.evaluatePart}>
								<View style={{flexDirection:'row',width:100}}>
									  <Image source={{uri:"star_check"}} style={styles.star}/>
									  <Image source={{uri:"star_check"}} style={styles.star}/>
									  <Image source={{uri:"star_check"}} style={styles.star}/>
									  <Image source={{uri:"star_check"}} style={styles.star}/>
									  <Image source={{uri:"star_check"}} style={styles.star}/>
								</View>
								<Text style={styles.text4}>心***兰</Text>
						  </View>
						  <Text style={styles.text5}>用着不错，挺管用的，是正品，比专柜卖的便宜很多,用完还要再来买。用着不错，挺管用的，是正品，比专柜卖的便宜很多，用完还要再来买。</Text>
                          <Text style={styles.text4}>2017.01.21</Text>
						  <View style={{flexDirection:'row'}}>
						        <Image source={{uri:"http://www.kangease.com/images/goods/20160614/f8787da6f335272ef5e12d613adcb1ae175749wkqtdj.jpg"}} style={styles.evaImg}/>
								<Image source={{uri:"http://www.kangease.com/images/goods/20160614/f8787da6f335272ef5e12d613adcb1ae175749wkqtdj.jpg"}} style={styles.evaImg}/>
								<Image source={{uri:"http://www.kangease.com/images/goods/20160614/f8787da6f335272ef5e12d613adcb1ae175749wkqtdj.jpg"}} style={styles.evaImg}/>
						  </View>
					</View>
			);
	  }

}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#fff"
	  },
	  evaluatePart:{
			flexDirection:'row',
			justifyContent:'space-between'
	  },
	  star:{
			width:12,
			height:12,
			marginRight:3
	  },
	  text4:{
			fontSize:10,
			color:"#999",

	  },
	  text5:{
			fontSize:11,
			color:"#333333",
			lineHeight:18,
			marginBottom:2
	  },
	  evaImg:{
			width:50,
			height:50,
			marginRight:8
	  }
});

module.exports=Goods;