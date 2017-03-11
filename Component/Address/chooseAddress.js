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
import InsetAddress from './newAddress';
class ChooseAddress extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false,
				  isShowNull:false
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
						  {/*头部导航*/}
						  <View style={styles.nav}>
								<TouchableOpacity onPress={()=>{this.props.checkAddress();this.props.navigator.pop()}} style={styles.leftViewStyle}>
									  <Image source={{uri:'back_icon'}} style={styles.backImg}/>
								</TouchableOpacity>
								<Text style={{color:"#333333",fontSize:16,}}>选择收货地址</Text>
								<TouchableOpacity style={styles.rightViewStyle} onPress={()=>Util._jumpFocus(this.props.navigator,manageAddress,"管理收货地址",{updateAddress:(value)=>{this.updateAddress(value)}})}>
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
						  {this.state.isShowNull&&
						  <View style={{flex:1,alignItems:'center'}}>
								<Image source={{uri:"address_null"}} style={{width:82,height:82,marginTop:Util.size.width*0.18}} resizeMode='stretch'/>
								<Text style={{color:"#999",fontSize:13,marginTop:12}}>您暂时还没有收货地址</Text>
						  </View>
						  }
						  <TouchableOpacity style={[{backgroundColor:"#f20583"},styles.loginBtn]} onPress={()=>Util._jumpFocus(this.props.navigator,InsetAddress,"添加收货地址",{updateAddress:()=>this.updateInsertAddress()})}>
								<Text style={{color:"#ffffff",fontSize:15}}>新增收货地址</Text>
						  </TouchableOpacity>
					</View>
			);

	  }
	  componentDidMount(){
			this._fetchData();
	  }
	  /*首页商品列表数据*/
	  _fetchData(){
			let self=this;
			let formData = new FormData();
			formData.append("act","showAddressInfo");
            Util.get(formData,function(data){
				  console.log(data)
                  if(data.flag){
						if(data.data.length>0){
						let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
						self.setState({
							  dataSource:ds.cloneWithRows(data.data),
							  isShow:true
						})
						}else{
							  self.setState({
									isShowNull:true
							  })
						}
				  }
		       },function(){})
	  }
	  updateInsertAddress(){
			this._fetchData();
	  }
	  renderRow(rowdata){
			return(
					<View style={{borderBottomWidth:Util.pixel,borderBottomColor:'#dadada'}}>
						  <TouchableOpacity  style={styles.cellStyle} onPress={()=>this._jumpBack(rowdata)}>
								<View style={styles.addressMessage}>
									  <View style={styles.addressInfo}>
											<Text style={styles.text1}>{rowdata.consignee}</Text>
											<Text style={styles.text1}>{rowdata.mobile}</Text>
									  </View>
									  <View>
								           <Text style={styles.text2}>
												 {rowdata.is_default==="1"&&<Text style={{color:"#f20583"}}>[默认地址]</Text>}
												 <Text>{rowdata.provinceName+" "+rowdata.cityName+" "+rowdata.districtName+" "+rowdata.address}</Text>
										   </Text>
									  </View>
								</View>
								{rowdata.address_id==this.props.id?<Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="contain"/>:
										<View style={styles.degStyle}></View>}
						  </TouchableOpacity>
					</View>
			);
	  }
	  updateAddress(value){
			if(value.length>0){
				  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				  this.setState({
						dataSource:ds.cloneWithRows(value)
					   })
				  if(!this.state.isShow){
						this.setState({
							  isShow:true
						})
				  }
			  }else{
				  this.setState({
						isShow:false,
						isShowNull:true
				  })
			}

	  }
	  //跳转回
	  _jumpBack(id){
			this.props.setAddress(id);
			this.props.navigator.pop()
	  }
	  InsertAddress(){

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
			height:Platform.OS==='ios'?58:44,
			paddingTop:Platform.OS==='ios'?15:0,
			justifyContent:'center'
	  },
	  leftViewStyle:{
			width:Platform.OS==='ios'?28:24,
			height:Platform.OS==='ios'?28:24,
			position:'absolute',
			left:Platform.OS==='ios'?3:4,
			bottom:Platform.OS==='ios'?6:10,
			alignItems:'center',
			justifyContent:'center'

	  },
	  backImg:{
			width:Platform.OS==='ios'?18:16,
			height:Platform.OS==='ios'?18:16
	  },
	  rightViewStyle:{
			position:'absolute',
			height:Platform.OS==='ios'?43:44,
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
		/*	alignItems:'center',*/
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