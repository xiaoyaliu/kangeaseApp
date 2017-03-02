/**
 * Created by liuxiaoya；
 *date 2017/2/20 0020.
 *description数据加载完
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		} from 'react-native';
import Util from './../Common/util';
var screenWidth=Util.size.width;
class GetBottom extends Component {
	  constructor(props) {
			super(props);
	  }

	  render() {
			return (
					<View style={styles.container}>
                         <View style={styles.line}></View>
						  <Text style={styles.title}>{this.props.title}</Text>
						  <View style={styles.line}></View>
					</View>
			);

	  }

}
const styles = StyleSheet.create({
	  container: {
			flexDirection:'row',
			width:Util.size.width,
			height:Platform.OS==='ios'?52:46,
			backgroundColor:"#f3f3f3",
			alignItems:'center',
			justifyContent:'center'
	  },
	  line:{
			backgroundColor:"#999",
			height:1,
			width:58,
			borderTopWidth:1,
			borderBottomWidth:1,
			borderTopColor:"#e7e7e7",
			borderBottomColor:"#cbcbcb"
	  },
	  title:{
			fontSize:12,
			color:"#999999",
			marginLeft:18,
			marginRight:18
	  }
});
module.exports=GetBottom;