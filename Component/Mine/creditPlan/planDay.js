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
		TextInput,
		Alert
		} from 'react-native';

import Util from './../../Common/util';
import Nav from './../../Common/navComponent';
class InsertStaff extends Component{
	  constructor(props) {
			super(props);
			this.state={
				  finish:false,
				  dayValue:this.props.currentDay
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="自定义天数" navigator={this.props.navigator}/>
						  <View style={styles.main}>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>天数</Text>
									  <TextInput style={styles.styleRight} keyboardType ="numeric" onChangeText ={(value)=>this.changeValue(value)} value={this.state.dayValue} underlineColorAndroid='transparent'placeholder="请输入天数" placeholderTextColor="#b2b2b2"/>
								</View>

						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.finish?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1} onPress={()=>this.SubmitDay()}>
								<Text style={{color:this.state.finish?"#ffffff":"#e6a4c0",fontSize:15,}}>确定</Text>
						  </TouchableOpacity>

					</View>
			);
	  }

	  changeValue(value){

			if(!Util.regex.intB(value)){
				  this.setState({
						finish:false,
						dayValue:value
				  })
			}else{
				  this.setState({
						finish:true,
						dayValue:value
				  })
			}
	  }
	  SubmitDay(){
			if(this.state.finish){
				  let day=this.state.dayValue;
				  this.props.cronCyc_day(day);
				  this.props.navigator.pop()
			}
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
	  styleLeft:{
			paddingLeft:10,
			width:76,
			fontSize:13,
			color:"#333",

	  },
	  styleRight:{
			width:Util.size.width-86,
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