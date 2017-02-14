/**
 * Created by liuxiaoya；
 *date 2017/2/14 0014.
 *description注册模块
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

import Util from './../Common/util';

export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
			//this.state={}
	  }
	  render() {
			return (
					<View style={styles.container}>

									  <Text>注册</Text>

					</View>
			);
	  }

}
const styles = StyleSheet.create({
	  container:{
			flex:1
	  }

});