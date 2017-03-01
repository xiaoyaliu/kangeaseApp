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
		Image,
		TouchableOpacity,
		Platform,
		TextInput,
		Alert
		} from 'react-native';

import Util from './../../Common/util';
import Nav from './../../Common/navComponent';
import  Picker from './../../Common/PickerComponent';
var dataTest=require("./../../data/plan.json");
class InsertStaff extends Component{
	  constructor(props) {
			super(props);
			this.state={
				  rankName:"",
				  rankValue:3,
				  picker:false,
				  finish:false
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="新增员工级别" navigator={this.props.navigator}/>
						  <View style={styles.main}>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>级别</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>

								<TouchableOpacity onPress={()=>this.setState({picker:true})}>
									  <View style={styles.ViewItem}>
											<Text style={styles.styleLeft}>选择上级</Text>
											<Text style={styles.styleRight}>{this.state.rankName}</Text>
											<View style={styles.rightArrow}>
												  <Image source={{uri:"arrow_icon"}} style={styles.arrow}/>
											</View>
									  </View>
								</TouchableOpacity>
						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.finish?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1}>
								<Text style={{color:this.state.login?"#ffffff":"#e6a4c0",fontSize:16,fontFamily:"黑体"}}>保存</Text>
						  </TouchableOpacity>
						  {this.state.picker&&
						  <Picker itemTitleName="选择上级" selectedValue={this.state.rankValue} selectedName={this.state.rankName} onValueChange={(value,name,show) => this.setState({rankValue: value,rankName:name,picker:show})}>
								<Picker.Item label="股东" value="1"></Picker.Item>
								<Picker.Item label="分总" value="2"></Picker.Item>
								<Picker.Item label="店长" value="4"></Picker.Item>
								<Picker.Item label="总经理" value="5"></Picker.Item>
						  </Picker>}

					</View>
			);
	  }


	  componentDidMount(){

	  }
}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",
	  },
	  ViewItem:{
			height:Platform.OS==='ios'?50:44,
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:Util.pixel,
			flexDirection:"row",
			alignItems:'center'
	  },
	  rightArrow:{
			position:"absolute",
			right:12,
			top:0,
			height:Platform.OS==='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
	  },
	  arrow:{
			width:Platform.OS==='ios'?10:8,
			height:Platform.OS==='ios'?17:14
	  },
	  styleLeft:{
			paddingLeft:10,
			width:96,
			fontSize:13,
			color:"#333",
			fontFamily:"黑体"
	  },
	  styleRight:{
			width:Util.size.width-106,
			textAlign:'right',
			paddingRight:20,
			color:"#999999"
	  },
	  main:{
			backgroundColor:"#fff"
	  },

	 loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			borderRadius:2,
			justifyContent:'center',
			marginTop:24,
			marginLeft:30,
			marginRight:30
	  }

});
module.exports=InsertStaff