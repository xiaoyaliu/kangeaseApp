/**
 * Created by liuxiaoya；
 *date 2017/2/23 0014.
 *description:个人中心首页
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
		Platform
		} from 'react-native';

import Util from './../../Common/util';
import Nav from './../../Common/navComponent';
import ItemTitle from './../../Common/itemTitle';
class KEMine extends Component{
	  constructor(props) {
			super(props);

	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="我的积分" navigator={this.props.navigator}/>
						  <View style={{backgroundColor:"#fff"}}>
						      <View style={styles.myPoint}>
							      <Text style={styles.text1}>我的积分:32000</Text>
							  </View>
								<View style={styles.myFare}>
									  <View style={[styles.myFareItem,{borderRightColor:"#d9d9d9",borderRightWidth:0.5}]}>
									      <Text>当月消费：23000</Text>
									  </View>
									  <View style={styles.myFareItem}>
									       <Text>当月消费：23000</Text>
									  </View>
								</View>
						  </View>
						  <View>
								<ItemTitle title="积分明细"/>

						  </View>
					</View>
			);
	  }


}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",

	  },
	  myPoint:{
			paddingTop:22,
			paddingBottom:22,
			alignItems:'center',
			justifyContent:'center',
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:0.5
	  },
	  text1:{
			fontSize:14,
			color:"#333333"
	  },
	  myFare:{
			flexDirection:'row'
	  },
	  myFareItem:{
			width:Util.size.width*0.5,
			height:Platform.OS==='ios'?46:40,
			alignItems:'center',
			justifyContent:'center'
	  }


});
module.exports=KEMine