/**
 * Created by liuxiaoya；
 *date 2017/2/17 0017.
 *description:商品详情
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		} from 'react-native';
import Util from './util';
class ItemTitle extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						 <Text style={{fontSize:14,color:"#333"}}>{this.props.title}</Text>
					</View>
			);

	  }


}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#fff",
			height:Platform.OS==='ios'?50:44,
			justifyContent:'center',
			marginLeft:10,
			borderBottomWidth:1,
			borderBottomColor:"#ccc"
	  }

});
module.exports=ItemTitle;