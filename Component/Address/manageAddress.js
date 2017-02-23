/**
 * Created by liuxiaoya；
 *date 2017/2/22 0022.
 *description确认订单选择收货地址
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Image,
		TouchableOpacity,
		ScrollView,
		Alert
		} from 'react-native';
import Util from './../Common/util';
import Nav from './../Common/navComponent';
import DeleteView from './../Common/deleteLevel';
import newAddress from './../Address/newAddress.js';
var dataTest=require('./../data/address.json');
class ManageAddress extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false,
				  modalVisible:false,
				  deleteId:0,
				  defaultId:3
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  <DeleteView modalVisible={this.state.modalVisible} deleteSure={()=>this.deleteAddress()} closeModal={()=>this.setState({modalVisible:false})} title="确定要删除该收货地址吗"/>
						  <View style={styles.container}>
						  {/*头部导航*/}
						  <Nav title="管理收货地址" navigator={this.props.navigator}/>
						  {this.state.isShow&&
						  <ScrollView style={{marginBottom:Platform.OS=='ios'?50:44}}>
								{this.renderRow()}
						  </ScrollView>}
						  <TouchableOpacity style={[{backgroundColor:"#f20583"},styles.loginBtn]} onPress={()=>{Util._jumpFocus(this.props.navigator,newAddress,"新增收货地址")}}>
								<Text style={{color:"#ffffff",fontSize:15,fontFamily:"黑体"}}>新增收货地址</Text>
						  </TouchableOpacity>
                           </View>

					</View>
			);

	  }
	  componentDidMount(){
			this._fetchData();
	  }
	  /*首页商品列表数据*/
	  _fetchData(callback){
			this.setState({
				  isShow:true
			})

	  }
	  //删除地址
	  deleteAddress(){
			Alert.alert(this.state.deleteId+"");
			this.setState({modalVisible:false});
	  }
	  //设置默认地址
	  setDefaultAddress(id){

			this.setState({
				  defaultId:id
			})
	  }
	  renderRow(){
			var arr=[];
			var data=dataTest.data
			for(var i=0;i<data.length;i++){
				  let id=data[i].id;
				  arr.push(
						  <View  style={styles.cellStyle} key={i}>
								<View style={styles.addressMessage}>
									  <View style={styles.addressInfo}>
											<Text style={styles.text1}>{data[i].name}</Text>
											<Text style={styles.text1}>{data[i].mobile}</Text>
									  </View>
									  <Text style={styles.text2}>{data[i].detail}</Text>
								</View>
								<View style={styles.checkItem}>
									  <TouchableOpacity style={{flexDirection:'row',alignItems:'center',height:40}} onPress={()=>this.setDefaultAddress(id)}>
											{this.state.defaultId==id?<Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="contain"/>:
													<View style={[styles.degStyle,styles.circleIcon]}></View>}
											<Text style={styles.text3}>设为默认地址</Text>
									  </TouchableOpacity>
									  <View style={styles.ope}>
											<TouchableOpacity style={styles.btn}>
												  <Text style={styles.text3}>编辑</Text>
											</TouchableOpacity>
											<TouchableOpacity style={styles.btn} onPress={()=>this.setState({modalVisible:true,deleteId:id})}>
												  <Text style={styles.text3}>删除</Text>
											</TouchableOpacity>
									  </View>
								</View>
						  </View>
				  )
			}
			return arr

	  }
	  //跳转回
	  _jumpBack(id){
			this.props.setAddressId(id);
			this.props.navigator.pop()
	  }


}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#f1f1f1",
			flex:1
	  },
	  nav:{
			borderBottomWidth:Util.pixel,
			borderBottomColor:'#d4d4d4',
			backgroundColor:"#fff",
			alignItems:'center',
			height:Platform.OS==='ios'?50:44,
			paddingTop:Platform.OS==='ios'?15:0,
			justifyContent:'center'
	  },
	  leftViewStyle:{
			width:Platform.OS==='ios'?28:24,
			height:Platform.OS==='ios'?28:24,
			position:'absolute',
			left:Platform.OS==='ios'?3:4,
			bottom:Platform.OS==='ios'?18:10,
			alignItems:'center',
			justifyContent:'center'

	  },
	  backImg:{
			width:Platform.OS==='ios'?18:16,
			height:Platform.OS==='ios'?18:16
	  },
	  rightViewStyle:{
			position:'absolute',
			height:Platform.OS==='ios'?50:44,
			bottom:0,
			width:34,
			right:10,
			justifyContent:'center'
	  },
	  circleIcon:{
			width:Platform.OS==='ios'?18:16,
			height:Platform.OS==='ios'?18:16,
			marginLeft:10,
			borderRadius:Platform.OS==='ios'?9:8,
			marginRight:4
	  },
	  degStyle:{
			borderColor:"#bababa",
			borderWidth:Util.pixel,
	  },
		cellStyle:{
			     backgroundColor:"#fff",
			      marginBottom:10
		},
	  addressMessage:{
			paddingLeft:10,
			paddingRight:10,
			paddingTop:14,
			paddingBottom:10,
			justifyContent:'center',
			borderBottomWidth:1,
			borderBottomColor:'#dadada',
	  },
	  addressInfo:{
			flexDirection:'row',
			justifyContent:'space-between',
	  } ,text1:{
			fontFamily:"黑体",
			fontSize:13,
			color:"#333"
	  },text2:{
			marginTop:4,
			fontFamily:"黑体",
			fontSize:11,
			color:"#333"
	  },
		text3:{
			  fontFamily:"黑体",
			  fontSize:12,
			  color:"#333"
},
	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
			width:Util.size.width,
			position:'absolute',
			left:0,
			bottom:0,
			zIndex:1
	  },
	  checkItem:{
			flexDirection:'row',
			height:Platform.OS=='ios'?48:42,
			alignItems:'center',
			justifyContent:'space-between',
	  },
	  ope:{
			flexDirection:'row',
	  },
	  btn:{
			height:Platform.OS=='ios'?30:28,
			paddingLeft:12,
			paddingRight:12,
			alignItems:'center',
			justifyContent:'center',
			borderRadius:2,
			borderWidth:Util.pixel,
			borderColor:'#999',
			marginRight:10
	  }
});
module.exports=ManageAddress