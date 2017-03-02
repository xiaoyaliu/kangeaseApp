/**
 * Created by liuxiaoya；
 *date 2017/2/14 0014.
 *description注册条款
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

	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="注册条款" navigator={this.props.navigator}/>
						  <View>
						  </View>

						  <View style={styles.main}>
								<TouchableOpacity style={[{backgroundColor:"#f20583"},styles.loginBtn]} onPress={()=>{this.update()}}>
									  <Text style={{color:"#ffffff",fontSize:15}}>我已阅读并同意该条款约定</Text>
								</TouchableOpacity>
						  </View>

					</View>
			);
	  }
	  update() {
			if (this.props.onAgreeChange) {
				  this.props.onAgreeChange();
			}
			this.props.navigator.pop();
	  }


}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#ffffff"
	  },
	  main:{
			marginTop:12
	  },

	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
			marginTop:24,
			width:Util.size.width-100,
			marginLeft:50
	  }

});