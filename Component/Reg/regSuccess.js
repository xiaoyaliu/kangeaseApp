/**
 * Created by liuxiaoya；
 *date 2017/2/16 0016.
 *description
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
import Nav from './../Common/navComponent';
import Main from './../Main/KEMain'
export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);

	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="注册条款" navigator={this.props.navigator}/>
						  <View style={{alignItems:'center'}}>
								<Image source={{uri:"reg_success"}} style={{width:Util.size.width*0.4,height:Util.size.width*0.4,marginTop:Util.size.width*0.2}}/>
								<Text style={{fontSize:16,color:"#1f1f1f",marginTop:20,marginBottom:16}}>提交成功！</Text>
								<Text style={{fontSize:12,color:"#666666"}}>您的注册信息已成功提交，请等待审核</Text>
								<Text style={{fontSize:12,color:"#666666"}}>在此期间请留意短信通知</Text>
						  </View>


						  <View style={styles.main}>
								<TouchableOpacity style={[{backgroundColor:"#f20583"},styles.loginBtn]} onPress={()=>{this.update()}}>
									  <Text style={{color:"#ffffff",fontSize:15}}>去逛逛</Text>
								</TouchableOpacity>
						  </View>

					</View>
			);
	  }
	  update() {
			const navigator = this.props.navigator;
			if (navigator) {
				  navigator.push({
						component: Main,
						title: "首页"
				  });
			}
	  }

}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#ffffff"
	  },
	  main:{
           alignItems:'center'
	  },

	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
			marginTop:28,
			width:Util.size.width*0.3,
			borderRadius:2
	  }

});