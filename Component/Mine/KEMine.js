/**
 * Created by liuxiaoya；
 *date 2017/2/23 0014.
 *description:个人中心首页
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
		Platform,
        ScrollView
		} from 'react-native';

import Util from './../Common/util';
import Order from './order/order'
import Point from './point/point'
import CommonCell from './../Common/ComponentCell';
import StaffManage from './staffManage/staffList';
import StaffLevel from './staffLevel/staffLevelList'
import Personal from './personalData/myData'
import ChangePwd from './chanfePwd'
class KEMine extends Component{
	  constructor(props) {
			super(props);

	  }
	  render() {
			return (
					<View style={styles.container}>
		                  <ScrollView>
						  {/*header*/}
						  <View style={styles.header}>
								<Text style={[styles.text,{fontSize:15}]}>个人中心</Text>
								<View style={styles.myMessage}>
									  <Image source={{uri:"head"}} style={styles.head}/>
									  <Text style={[styles.text,{fontSize:12,marginTop:Platform.OS==='ios'?8:4,marginBottom:2}]}>测试</Text>
									  <Text style={[styles.text,{fontSize:12}]}>积分：333</Text>
								</View>
						  </View>
						  <View style={styles.goodsState}>
								<TouchableOpacity style={styles.goodsStateItem}>
                                    <Image source={{uri:"delivery_icon"}} style={styles.img1}/>
									  <Text>待发货</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.goodsStateItem}>
									  <Image source={{uri:"take_over_icon"}} style={styles.img2}/>
									  <Text>待收货</Text>
								</TouchableOpacity>
						  </View>
						  <View>
								<CommonCell title="我的订单" rightTitle="查看全部订单" noBorder={true} navigator={this.props.navigator} component={Order}/>
						  </View>
						  <View style={{marginTop:10}}>
								<CommonCell title="我的积分" navigator={this.props.navigator} component={Point}/>
								<CommonCell title="员工管理" navigator={this.props.navigator} component={StaffManage}/>
								<CommonCell title="员工等级" noBorder={true} navigator={this.props.navigator} component={StaffLevel}/>
						  </View>
						  <View style={{marginTop:10}}>
								<CommonCell title="个人资料" navigator={this.props.navigator} component={Personal}/>
								<CommonCell title="修改密码" noBorder={true} navigator={this.props.navigator} component={ChangePwd}/>
						  </View>
						  <View style={{marginTop:10}}>
								<CommonCell title="关于康亿"/>
						  </View>
				      </ScrollView>
					</View>
			);
	  }


}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",

	  },
	  header:{
			height:Util.size.height*0.35,
			backgroundColor:"#f20583",
			alignItems:'center',
			justifyContent:'space-between',
			paddingTop:Platform.OS==='ios'?32:25,
			paddingBottom:Platform.OS==='ios'?36:25
	  },
	  head:{
			width:70,
			height:70,
			borderRadius:35,
			borderColor:"#fff",
			borderWidth:1
	  },
	  myMessage:{
			alignItems:'center',
			justifyContent:'center'
	  },
	  text:{
			color:"#fff"
	  },
	  goodsState:{
			padding:10,
			borderBottomColor:"#ccc",
			borderBottomWidth:0.5,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'space-around',
			backgroundColor:"#fff"
	  },
	  goodsStateItem:{
			alignItems:'center',
			justifyContent:'center',
			padding:6
	  },
      textA:{
	        color:"#666",
			fontSize:12
	  },
	  img1:{
			width:21,
			height:19,
		    marginBottom:Platform.OS==='ios'?6:2
	  },
	  img2:{
			width:19,
			height:19,
		  marginBottom:Platform.OS==='ios'?6:2
	  }

});
module.exports=KEMine