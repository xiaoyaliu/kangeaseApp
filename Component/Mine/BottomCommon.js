/**
 * Created by liuxiaoya��
 *date 2017/2/23 0014.
 *description:Ա���б�
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		TouchableOpacity,
		Platform,
		} from 'react-native';

import Util from './../Common/util';

class BottomCommon extends Component{
	  constructor(props) {
			super(props);
	  }
	  render() {
			return (
					<View style={styles.container}>
                           <TouchableOpacity style={[styles.item,styles.item1]} onPress={()=>{Util._jumpFocus(this.props.navigator,this.props.leftComponet)}}>
						         <Text style={{fontSize:13,color:"#333"}}>{this.props.leftTitle}</Text>
						   </TouchableOpacity>
						  <TouchableOpacity style={[styles.item,{backgroundColor:"#f20583"}]} onPress={()=>{Util._jumpFocus(this.props.navigator,this.props.rightComponent)}}>
								<Text style={{fontSize:13,color:"#fff"}}>{this.props.rightTitle}</Text>
						  </TouchableOpacity>
					</View>
			);
	  }

}
const styles = StyleSheet.create({
	  container:{
			flexDirection:'row',
			position:'absolute',
			bottom:0,
			left:0
	  },
	  item:{
			alignItems: 'center',
			justifyContent: 'center',
			width:Util.size.width*0.5,
			height:Platform.OS==='ios'?50:44
	  },
	  item1:{
			backgroundColor:"#fff",
			borderTopColor:"#b3b3b3",
			borderTopWidth:0.5
	  }
});
module.exports=BottomCommon