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
		ListView,
		Alert
		} from 'react-native';

import Util from './../../Common/util';
import Nav from './../../Common/navComponent';
import BottomCommon from "./../BottomCommon";
import InsertStaff from "./insertStaffLevel"
import DeleteStaff from "./deleteStaffLevel"
var dataTest=require("./../../data/staffLevel.json")
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
						  <Nav title="员工等级" navigator={this.props.navigator}/>
						  {this.state.isShow && <SwipeListView
								  dataSource={this.state.dataSource}
								  renderRow={(data)=>this.renderRowList(data)}
								  renderHiddenRow={ (data) =>this.renderHide(data)}
								  disableRightSwipe={true}
								  rightOpenValue={Platform.OS==='ios'?-112:-100}
								  style={{marginBottom:Platform.OS==='ios'?52:46,marginTop:18}}
								  />
						  }
                          <BottomCommon leftTitle="选择" rightTitle="新增级别" navigator={this.props.navigator} leftComponet={DeleteStaff} rightComponent={InsertStaff}/>
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
					<View style={styles.rowFront}>
						  <View style={styles.listItems}>
								<Text style={[styles.text1,{width:80}]}>{data.name}</Text>
								<Text style={styles.text1}>{data.num}人</Text>
						 </View>
					</View>
			);
	  }
	  renderHide(data){
			return(
					<View style={styles.rowBack}>
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
			width: Platform.OS==='ios'?56:50,
			height:Platform.OS==='ios'?50:44,
	  },

	  rowBack: {
			position: 'absolute',
			top: 0,
			right: 0,
			flexDirection:"row"
	  },
	  backTextWhite: {
			color: '#fff',
			fontSize:13
	  },
	  text1:{
			fontSize:13,
			color:"#333333"
	  },
	  rowFront:{
			marginBottom:10,
			backgroundColor:"#fff"
	  },
	  listItems:{
	        width:Util.size.width,
			height:Platform.OS==='ios'?50:44,
			paddingLeft:10,
			flexDirection:'row',
			alignItems:'center'
	  }

});
module.exports=StaffList