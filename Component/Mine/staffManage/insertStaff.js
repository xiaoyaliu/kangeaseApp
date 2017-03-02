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
				  rankName:"部长",
				  rankValue:3,
				  picker1:false,
				  picker2:false,
				  selectedPlanName:"",
				  finish:false
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="新增员工" navigator={this.props.navigator}/>
						  <View style={styles.main}>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>姓名</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>电话</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>
								<TouchableOpacity onPress={()=>this.setState({picker1:true})}>
									  <View style={styles.ViewItem}>
											<Text style={styles.styleLeft}>等级</Text>
											<Text style={styles.styleRight}>{this.state.rankName}</Text>
											<View style={styles.rightArrow}>
												  <Image source={{uri:"arrow_icon"}} style={styles.arrow}/>
											</View>
									  </View>
								</TouchableOpacity>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>公司名称</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>店面名称</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>推荐人</Text>
									  <TextInput placeholder="非必填项" placeholderTextColor="#b2b2b2" style={styles.styleRight} underlineColorAndroid='transparent'/>
								</View>
								<TouchableOpacity onPress={()=>this.setState({picker2:true})}>
									  <View style={styles.ViewItem}>
											<Text style={styles.styleLeft}>授信计划</Text>
											<Text style={styles.styleRight}>{this.state.selectedPlanName}</Text>
											<View style={styles.rightArrow}>
												  <Image source={{uri:"arrow_icon"}} style={styles.arrow}/>
											</View>
									  </View>
								</TouchableOpacity>
								<View style={styles.ViewItem}>
									  <Text style={styles.styleLeft}>手动授信额度</Text>
									  <TextInput style={styles.styleRight} underlineColorAndroid='transparent' placeholder="请输入整数" placeholderTextColor="#b2b2b2"/>
								</View>
						  </View>
						  <TouchableOpacity style={[{backgroundColor:this.state.finish?"#f20583":"#cc046f"},styles.loginBtn]} activeOpacity ={1}>
								<Text style={{color:this.state.login?"#ffffff":"#e6a4c0",fontSize:16,}}>保存</Text>
						  </TouchableOpacity>
						  {this.state.picker1&&
						  <Picker itemTitleName="等级" selectedValue={this.state.rankValue} selectedName={this.state.rankName} onValueChange={(value,name,show) => this.setState({rankValue: value,rankName:name,picker1:show})}>
								<Picker.Item label="股东" value="1"></Picker.Item>
								<Picker.Item label="分总" value="2"></Picker.Item>
								<Picker.Item label="店长" value="4"></Picker.Item>
								<Picker.Item label="总经理" value="5"></Picker.Item>
						  </Picker>}
						  {this.state.picker2&&
								<TouchableOpacity style={styles.pickerM} onPress={()=>this.setState({picker2:false})}>
									  <View style={styles.picker}>
											<View style={styles.itemTitleView}>
												  <Text style={styles.itemTitleName}>授信计划</Text>
											</View>
											{this.itemArr()}
									  </View>
								</TouchableOpacity>
						  }
					</View>
			);
	  }
	  itemArr(){
			var data=dataTest.data;
            var arr=[];
			for(var i=0;i<data.length;i++){
				  let id=data[i].id;
				  let name=data[i].name;
				  arr.push(<View style={styles.pickItem} key={i}>
						<TouchableOpacity style={styles.pickItemTouch} onPress={()=>this.update2(id,name)}>
							  <Text style={{fontSize:12,color:'#333'}}>{name}</Text>
							  <Text style={{fontSize:11,color:"#666",marginTop:4}}>{data[i].item1} {data[i].item2} {data[i].item3}</Text>
							  {this.getCheck(id)}
						</TouchableOpacity>
				  </View>)
			}
			return arr;
	  }
	  getCheck(id){
			if(id==this.state.selectedId){
				  return (
						  <Image source={{uri:'checked_icon'}} style={{width:14,height:10,position:'absolute',top:10,right:14}} />
				  )
			}else{
				  return null;
			}
	  }
	  update2(index,name) {
			this.setState({
				  selectedId: index,
				  selectedPlanName:name,
				  picker2:false
			});
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
			color:"#333"
	  },
	  styleRight:{
			width:Util.size.width-106
	  },
	  main:{
			backgroundColor:"#fff"
	  },
	  pickerM:{
			backgroundColor:"rgba(0,0,0,0.3)",
			width:Util.size.width,
			height:Util.size.height,
			position:'absolute',
			left:0,
			bottom:0,
			zIndex:10
	  },
	  picker:{
			position:'absolute',
			left:0,
			bottom:0,
			backgroundColor:'#fff',
			paddingBottom:20
	  },
	  itemTitleView:{
			width:Util.size.width,
			height:Platform.OS==='ios'?44:38,
			borderBottomColor:"#b3b3b3",
			borderBottomWidth:1,
			alignItems:'center',
			justifyContent:'center'
	  },
	  itemTitleName:{
			fontSize:14
	  },
	  pickItem:{
			marginLeft:12
	  },
	  pickItemTouch:{
			borderBottomColor:"#ccc",
			borderBottomWidth:1,
			height:Platform.OS==='ios'?66:60,
			justifyContent:'center',
			width:Util.size.width-24
	  } ,loginBtn:{
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