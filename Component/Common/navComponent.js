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
		Platform
		} from 'react-native';

import Util from './../Common/util';
export default class LaunchImage extends Component{
	  constructor(props) {
			super(props);
            this.style=this.props.noBorder?null:{borderBottomWidth:1,borderBottomColor:'#d4d4d4'};
	  }
	  render() {
			return (
					<View style={[styles.container,this.style]}>

						  <TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle}>
								<Image source={{uri:'back_icon'}} style={styles.backImg}/>
						  </TouchableOpacity>
						  <Text style={{color:"#333333",fontSize:16,}}>{this.props.title}</Text>
						  {this.props.right&&
						  <TouchableOpacity onPress={()=>Util._jumpFocus(this.props.navigator,this.props.go)} style={styles.RightViewStyle}>
								<Image source={{uri:'search_icon'}} tintColor="#6b6b6b" style={styles.SearchIcon}/>
						  </TouchableOpacity>}
					</View>
			);
	  }

}
const styles = StyleSheet.create({
	  container:{
			backgroundColor:"#fff",
			alignItems:'center',
			height:Platform.OS==='ios'?58:44,
			paddingTop:Platform.OS==='ios'?15:0,
			justifyContent:'center'
	  },
	  leftViewStyle:{
			width:Platform.OS==='ios'?28:24,
			height:Platform.OS==='ios'?28:24,
			position:'absolute',
			left:Platform.OS==='ios'?3:4,
			bottom:Platform.OS==='ios'?5:10,
			alignItems:'center',
			justifyContent:'center'

	  },
	  RightViewStyle:{
			width:Platform.OS==='ios'?28:24,
			height:Platform.OS==='ios'?28:24,
			position:'absolute',
			right:Platform.OS==='ios'?4:5,
			bottom:Platform.OS==='ios'?5:10,
			alignItems:'center',
			justifyContent:'center'
	  },
	  backImg:{
			width:Platform.OS==='ios'?18:16,
			height:Platform.OS==='ios'?18:16
	  },
	  SearchIcon:{
			width:Platform.OS==='ios'?16:14,
			height:Platform.OS==='ios'?16:14
	  }
});