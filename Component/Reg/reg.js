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
		TextInput,
		TouchableOpacity,
		Platform
		} from 'react-native';

import Util from './../Common/util';
import Nav from './../Common/navComponent';
export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
			//this.state={}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="注册" navigator={this.props.navigator}/>
						  <View>
						     <View style={styles.ViewItem}>
							       <Text></Text>
								   <TextInput underlineColorAndroid='transparent'/>
							 </View>
						  </View>
					</View>
			);
	  }

}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1"
	  },
	  ViewItem:{
			height:Platform.OS==='ios'?50:44
	  }

});