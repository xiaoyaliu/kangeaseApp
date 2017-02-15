/**
 * Created by liuxiaoya；
 *date 2017/2/14 0014.
 *description:公共头部导航
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
		Platform,
		StatusBar
		} from 'react-native';


export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);

	  }
	  render() {
			return (
					<View style={styles.container}>

						  <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle}>
								<Image source={{uri:'back_icon'}} style={styles.backImg}/>
						  </TouchableOpacity>
						  <Text style={{color:"#333333",fontSize:16}}>{this.props.title}</Text>
					</View>
			);
	  }

}
const styles = StyleSheet.create({
	  container:{
			backgroundColor:"#fff",
			alignItems:'center',
			height:Platform.OS==='ios'?50:44,
			paddingTop:Platform.OS==='ios'?12:0,
			justifyContent:'center',
			borderBottomWidth:1,
			borderBottomColor:'#d4d4d4'
	  },
	  leftViewStyle:{
			width:Platform.OS==='ios'?28:24,
			height:Platform.OS==='ios'?28:24,
			position:'absolute',
			left:Platform.OS==='ios'?2:3,
			bottom:Platform.OS==='ios'?18:10,
			alignItems:'center',
			justifyContent:'center'

	  },
	  backImg:{
			width:Platform.OS==='ios'?18:16,
			height:Platform.OS==='ios'?18:16
	  }
});