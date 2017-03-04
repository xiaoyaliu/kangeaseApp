/**
 * Created by liuxiaoya
 *date 2017/2/17 0017.
 *description支付成功
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Image,
		TouchableOpacity,
		} from 'react-native';
import Util from './../Common/util';
import Nav from './../Common/navComponent';
class PaySuccess extends Component {
	  constructor(props) {
			super(props);
			this.state = {

			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="支付成功" navigator={this.props.navigator}/>
						  <View style={styles.main}>
								<Image source={{uri:"success"}} style={{width:Util.size.width*0.22,height:Util.size.width*0.22,marginTop:22}}/>
								<Text style={{color:"#323232",fontSize:16,marginTop:10}}> 支付成功！</Text>
						  </View>
						  <View style={{marginLeft:10,marginRight:10,marginTop:12}}>
						        <Text style={{fontSize:13,color:"#323232"}}>送货信息</Text>
								<Text style={{fontSize:12,color:"#323232",lineHeight:18,marginTop:8}}>我们将尽快安排发货，请买家保持手机通讯畅通，以便快递员能第一时间联系到您！</Text>
								<View style={styles.ope}>
                                     <TouchableOpacity style={[styles.go,{borderColor:"#f20583"}]}>
										   <Text style={{fontSize:13,color:"#f20583"}}>继续购物</Text>
									 </TouchableOpacity>
									  <TouchableOpacity style={[styles.go,{borderColor:"#666"}]}>
											<Text style={{fontSize:13,color:"#666"}}>查看订单</Text>
									  </TouchableOpacity>
								</View>
						  </View>
					</View>
			);

	  }


}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#fff",
			flex:1
	  },
	  main:{
			alignItems:'center',
			borderBottomWidth:0.5,
			paddingBottom:30,
			borderBottomColor:"#d9d9d9"
	  },
	  ope:{
            marginTop:14,
			flexDirection:'row',
			justifyContent:'space-between'
	  },
	  go:{
			width:Util.size.width*0.5-20,
			height:Platform.OS==='ios'?48:42,
			alignItems:'center',
			justifyContent:'center',
			borderWidth:1,
			borderRadius:2
	  }
});
module.exports=PaySuccess;