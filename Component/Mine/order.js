/**
 * Created by liuxiaoya；
 *date 2017/2/23 0014.
 *description:新增收货地址
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TextInput,
		TouchableOpacity,
		Platform
		} from 'react-native';

import Util from './../Common/util';
import Nav from './../Common/navComponent';
import Toast from 'react-native-root-toast';
export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);

	  }
	  render() {
			return (
					<View style={styles.container}>
						 <Text>测试</Text>
					</View>
			);
	  }


}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",

	  },

});