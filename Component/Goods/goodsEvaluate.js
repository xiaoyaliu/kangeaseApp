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
class Goods extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  data:this.props.data,
				  isShow: false
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  <View style={{height:10,backgroundColor:"#f1f1f1"}}></View>
						  <View>
								<ItemTitle title={"商品评价（"+this.props.num+"）"}/>
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
			if(this.props.data.length>0){
				let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				this.setState({
					  dataSource:ds.cloneWithRows(this.props.data),
					  isShow:true
				})
			}
	  }

	  renderRow(rowdata){
			return(
					<View style={{marginLeft:10,paddingTop:10,paddingBottom:10,paddingRight:10,borderBottomWidth:1,borderBottomColor:"#b3b3b3"}}>
						  <View style={styles.evaluatePart}>
								<View style={{flexDirection:'row',width:100}}>
									  {this.renderStar(rowdata.comment_rank)}
								</View>
								<Text style={styles.text4}>{Util.encryptStr(rowdata.user_name)}</Text>
						  </View>
						  <Text style={styles.text5}>{rowdata.content}</Text>
                          <Text style={styles.text4}>{rowdata.add_time}</Text>
						  <View style={{flexDirection:'row'}}>
						        <Image source={{uri:"http://www.kangease.com/images/goods/20160614/f8787da6f335272ef5e12d613adcb1ae175749wkqtdj.jpg"}} style={styles.evaImg}/>
								<Image source={{uri:"http://www.kangease.com/images/goods/20160614/f8787da6f335272ef5e12d613adcb1ae175749wkqtdj.jpg"}} style={styles.evaImg}/>
								<Image source={{uri:"http://www.kangease.com/images/goods/20160614/f8787da6f335272ef5e12d613adcb1ae175749wkqtdj.jpg"}} style={styles.evaImg}/>
						  </View>
					</View>
			);
	  }
	  renderStar(starNum){
			var arr=[];
			for(let i=0;i<5;i++){
				  if(starNum>i){
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