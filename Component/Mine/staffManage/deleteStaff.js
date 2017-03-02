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
		ScrollView,
		Image,
		Alert
		} from 'react-native';

import Util from './../../Common/util';
import Nav from './../../Common/navComponent';
var dataTest=require("./../../data/staff.json");
var tab=[];
var deleteArr=[];
import DeleteView from './../../Common/deleteLevel';
import { SwipeListView} from 'react-native-swipe-list-view';
class DeleteStaff extends Component{
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false,
				  selectAll:true,
				  tabs:[],
				  modalVisible:false
			}

	  }
	  render() {
			return (
					<View style={styles.container}>
						  <DeleteView modalVisible={this.state.modalVisible} deleteSure={()=>this.deleteStaff()} closeModal={()=>this.setState({modalVisible:false})} title="确定要删除该员工信息吗"/>
						  <Nav title="删除员工" navigator={this.props.navigator}/>
						  {this.state.isShow && <ScrollView style={{marginBottom:Platform.OS==='ios'?54:48}}>
                                {this.renderList()}
						  </ScrollView>}
						  <View style={styles.bottomFix}>
								<TouchableOpacity style={styles.checkAll}>
									  {this.state.selectAll?<Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="stretch"/>:
									  <View style={styles.degStyle}></View>}
									  <Text style={{color:"#333333",fontSize:14,marginLeft:2}}>全选</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.checkout} onPress={()=>this.delete()}>
									  <Text style={styles.checkoutText}>删除</Text>
								</TouchableOpacity>
						  </View>
					</View>
			);
	  }
	  componentDidMount(){
			this._fetchData();
	  }

	  _fetchData(callback){
			for(var i=0;i<dataTest.data.length;i++){
				 tab[i]={
						isSelected: false
				  };
			};
			this.setState({
				  tabs:tab,
				  isShow:true
			})
	  }
	  renderList(){

			var data=dataTest.data;
			var arr=[];

			for(let i=0;i<data.length;i++){
				  let item=data[i];
                  let j=item.id;
				  arr.push(
						  <View style={styles.rowFront} key={i}>
								<View style={styles.listItems} style={{flexDirection:'row',alignItems:'center'}}>
									  <TouchableOpacity onPress={()=>this.changeState(i,j)}>
											{!this.state.tabs[i].isSelected?
											<View style={styles.degStyle}></View>:
											  <Image source={{uri:"checked_circle_icon"}} style={styles.circleIcon} resizeMode="stretch"/>
											}
										</TouchableOpacity>
									  <View>
											<Text style={styles.text1}>姓名：{item.name}</Text>
											<Text style={styles.text1}>手机号：{item.mobile}</Text>
											<Text style={styles.text1}>本月销售：{item.sale}</Text>
									  </View>
								</View>
						  </View>
				  )
			}
			return arr;
	  }

     changeState(i,j){
		   tab[i].isSelected=!tab[i].isSelected;
		   deleteArr.push(j)
		   this.setState(
				   {
						 tabs:tab
				   }
		   )
	 }
	  delete(){
              if(deleteArr.length>0)
			    this.setState({modalVisible:true});

	  }
	  deleteStaff(){
             console.log(deleteArr)
	  }

}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",

	  },
	  backTextWhite: {
			color: '#fff',
			fontSize:13
	  },
	  text1:{
			fontSize:13,
			color:"#333333",
			lineHeight:22
	  },
	  rowFront:{
			paddingBottom:12,
			paddingTop:10,
			backgroundColor:"#fff",
			marginBottom:10
	  },
	  listItems:{
			width:Util.size.width
	  },
	  bottomFix:{
			backgroundColor:"#fff",
			width:Util.size.width,
			height:Platform.OS==='ios'?54:48,
			flexDirection:'row',
			justifyContent:"space-between",
			position:'absolute',
			bottom:0,
			left:0,
			borderTopWidth:1,
			borderTopColor:"#b3b3b3"
	  },
	  checkAll:{

			height:Platform.OS==='ios'?54:48,
			flexDirection:'row',
			alignItems:'center'
	  },
	  checkout:{
			height:Platform.OS==='ios'?54:48,
			width:90,
			backgroundColor:"#f20583",
			alignItems:'center',
			justifyContent:'center'
	  },
	  checkoutText:{
			color:"#fff"
	  },
	  circleIcon:{
			width:Platform.OS==='ios'?16:14,
			height:Platform.OS==='ios'?16:14,
			marginLeft:10,
			marginRight:10
	  },
	  degStyle:{
			width:Platform.OS==='ios'?16:14,
			height:Platform.OS==='ios'?16:14,
			marginLeft:10,
			marginRight:10,
			borderColor:"#bababa",
			borderWidth:Util.pixel,
			borderRadius:Platform.OS==='ios'?8:7
	  },


});
module.exports=DeleteStaff