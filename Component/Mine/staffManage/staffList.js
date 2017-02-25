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
		ListView,
		Alert
		} from 'react-native';

import Util from './../../Common/util';
import Nav from './../../Common/navComponent';
import ItemTitle from './../../Common/itemTitle';
var dataTest=require("./../../data/staff.json")
import { SwipeListView} from 'react-native-swipe-list-view';
class StaffList extends Component{
	  constructor(props) {
			super(props);
			this.state = {
				  isShow: false
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="员工管理" navigator={this.props.navigator}/>
						  {this.state.isShow && <SwipeListView
								  dataSource={this.state.dataSource}
								  renderRow={(data)=>this.renderRowList(data)}
								  renderHiddenRow={ (data) =>this.renderHide(data)}
								  disableRightSwipe={true}
								  rightOpenValue={-112}
								  />
						  }
					</View>
			);
	  }
	  componentDidMount(){
			this._fetchData();
	  }

	  _fetchData(callback){
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			let length=dataTest.data.length;
			var arr=[];
			for (var i=0; i<length; ++i) {
				  arr.push(i)
			}
			this.setState({
				  dataSource:ds.cloneWithRows(arr),
				  isShow:true
			})

	  }
	  renderRowList(rowdata){
			var data=dataTest.data[rowdata];
			return(

					<View style={styles.item}>
                          <Text style={styles.text1}>姓名：{data.name}</Text>
						  <Text style={styles.text1}>手机号：{data.mobile}</Text>
						  <Text style={styles.text1}>本月销售：{data.sale}</Text>
					</View>
			);
	  }
	  renderHide(data){
			return(
					<View style={styles.backRightBtnRight}>
						  <TouchableOpacity style={[styles.backRightBtn,{backgroundColor:"#f1b80c"}]} onPress={() => Alert.alert("111") }>
								<Text style={styles.backTextWhite}>修改</Text>
						  </TouchableOpacity>
					<TouchableOpacity style={[styles.backRightBtn,{backgroundColor:"#f20583"}]} onPress={() => Alert.alert("111") }>
						  <Text style={styles.backTextWhite}>删除</Text>
					</TouchableOpacity>
					</View>
			)
	  }


}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor:"#f1f1f1",

	  },
	  backRightBtn: {
			alignItems: 'center',
			justifyContent: 'center',
			width: 56,
			height:96
	  },

	  backRightBtnRight: {
			position: 'absolute',
			top: 0,
			backgroundColor: '#f20583',
			right: 0,
			flexDirection:"row"
	  },
	  backTextWhite: {
			color: '#fff',
			fontSize:13
	  },
	  text1:{
			fontSize:13,
			color:"#333333",
			lineHeight:18
	  },
	  item:{
			padding:10,
			marginBottom:10
	  }

});
module.exports=StaffList