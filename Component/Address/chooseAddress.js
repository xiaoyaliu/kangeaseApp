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
		ListView,
		ScrollView
		} from 'react-native';
import Util from './../Common/util';
import manageAddress from './../Address/manageAddress';
var dataTest=require('./../data/address.json');
class ChooseAddress extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  {/*头部导航*/}
						  <View style={styles.nav}>
								<TouchableOpacity onPress={()=>{this.props.navigator.pop()}} style={styles.leftViewStyle}>
									  <Image source={{uri:'back_icon'}} style={styles.backImg}/>
								</TouchableOpacity>
								<Text style={{color:"#333333",fontSize:16,}}>选择收货地址</Text>
								<TouchableOpacity style={styles.rightViewStyle} onPress={()=>this._jumpFocus(manageAddress,"管理收货地址")}>
									  <Text style={{color:"#333333",fontSize:14,textAlign:'right' }}>管理</Text>
								</TouchableOpacity>
						  </View>
						  {this.state.isShow&&
						  <ScrollView>
								<ListView dataSource={this.state.dataSource}
										  renderRow={(rowdata)=>this.renderRow(rowdata)}
										  style={{overflow:'hidden',paddingBottom:Platform.OS=='ios'?50:44}}
										/>
						  </ScrollView>}
						  <TouchableOpacity style={[{backgroundColor:"#f20583"},styles.loginBtn]} onPress={()=>{this.update()}}>
								<Text style={{color:"#ffffff",fontSize:15,}}>新增收货地址</Text>
						  </TouchableOpacity>

					</View>
			);

	  }
	  componentDidMount(){
			this._fetchData();
	  }
	  /*首页商品列表数据*/
	  _fetchData(callback){
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.setState({
				  dataSource:ds.cloneWithRows(dataTest.data),
				  isShow:true
			})

	  }
	  renderRow(rowdata){
			return(
					<View style={{borderBottomWidth:Util.pixel,borderBottomColor:'#dadada'}}>
						  <TouchableOpacity  style={styles.cellStyle} onPress={()=>this._jumpBack(rowdata.id)}>
								<View style={styles.addressMessage}>
									  <View style={styles.addressInfo}>
											<Text style={styles.text1}>{rowdata.name}</Text>
											<Text style={styles.text1}>{rowdata.mobile}</Text>
									  </View>
									  <View>
								           <Text style={styles.text2}>
												 {rowdata.isDefault&&<Text style={{color:"#f20583"}}>[默认地址]</Text>}
												 <Text>{rowdata.detail}</Text>
										   </Text>
									  </View>
								</View>
								{rowdata.id==this.props.id?<Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="contain"/>:
										<View style={styles.degStyle}></View>}
						  </TouchableOpacity>
					</View>
			);
	  }
	  //跳转回
	  _jumpBack(id){
			this.props.setAddressId(id);
			this.props.navigator.pop()
	  }
	  //跳转到component
	  _jumpFocus(component, title){

			const navigator = this.props.navigator;
			if (navigator){
				  navigator.push({
						component: component,
						title: title
				  });
			}
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
			width:Platform.OS==='ios'?20:18,
			height:Platform.OS==='ios'?20:18,
			marginLeft:10
	  },
	  degStyle:{
			width:Platform.OS==='ios'?20:18,
			height:Platform.OS==='ios'?20:18,
			marginLeft:10,
			borderColor:"#bababa",
			borderWidth:Util.pixel,
			borderRadius:Platform.OS==='ios'?10:9
	  },
		cellStyle:{
				  padding:10,
			     flexDirection:'row',
			     justifyContent:'space-between',
			     alignItems:'center',
			     backgroundColor:"#fff"
		},
	  addressMessage:{
			height:60,
			alignItems:'center',
			justifyContent:'center',
			width:Util.size.width-60,
	  },
	  addressInfo:{
			flexDirection:'row',
			width:Util.size.width-60,
			justifyContent:'space-between',
	  } ,text1:{
			fontSize:13,
			color:"#333"
	  },text2:{
			marginTop:6,
			lineHeight:16,
			fontSize:11,
			color:"#333"
	  },
	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
			width:Util.size.width,
			position:'absolute',
			left:0,
			bottom:0
	  }
});
module.exports=ChooseAddress