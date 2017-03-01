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
import CommonCell from './ComponentCell';
import  Picker from './../../Common/PickerComponent';
import  Name from './changeName';
import  CompanyName from './companyName';

class InsertStaff extends Component{
	  constructor(props) {
			super(props);
			this.state={
				  sex:"男",
				  sexId:"1",
				  picker:false,
				  level:"分总",
				  mobile:"13783684005",
				  company:"",
				  username:"111",
				  name:""
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  <Nav title="个人资料" navigator={this.props.navigator}/>
						  <TouchableOpacity style={styles.cell} onPress={()=>uploadImg()}>
									  {/*左边*/}
									  <Image source={{uri:'faceimg'}} style={styles.faceImg}/>
									  {/*右边*/}
									  <Image source={{uri:'arrow_icon'}} style={styles.arrowImg} tintColor="#b3b3b3"/>
						  </TouchableOpacity>
						  <View style={{marginTop:10}}>
								<CommonCell title="用户名" rightTitle={this.state.username} rightArrow={false} />
								<CommonCell title="姓名" rightTitle={this.state.name} navigator={this.props.navigator} component={Name} rightArrow={true}/>
								<TouchableOpacity onPress={()=>this.setState({picker:true})}>
								<CommonCell title="性别" rightTitle={this.state.sex}  isSex={true} noBorder={true} />
								</TouchableOpacity>
						  </View>
						  <View style={{marginTop:10}}>
								<CommonCell title="公司名称" rightTitle={this.state.company}  rightArrow={true} navigator={this.props.navigator} component={CompanyName}/>
								<CommonCell title="手机号" rightTitle={this.state.mobile}  rightArrow={false}/>
								<CommonCell title="等级" rightTitle={this.state.level} noBorder={true}  rightArrow={false}/>

						  </View>

						  {this.state.picker&&
						  <Picker itemTitleName="性别"  selectedValue={this.state.sexId} selectedName={this.state.sex} onValueChange={(value,name,show) =>this.changeSex(value,name,show)}>
								<Picker.Item label="男" value="1"></Picker.Item>
								<Picker.Item label="女" value="2"></Picker.Item>
						  </Picker>}
					</View>
			);
	  }

	  componentDidMount(){

	  }
	  changeSex(value,name,show){
			this.setState({sexId: value,sex:name,picker:show})
	  }
	  uploadImg(){
			ImagePicker.openPicker({
				  multiple: true
			})
					.then(images => {
						  // 这里将会获取到选中图片的数组
						  // uploading file here ...
						  console.log('images 数组：',images)
					})
					.catch((error)=>{
						  console.log(error)
					});
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
	  arrowImg:{
			width:8,
			height:13,
			marginRight:10
	  },
	  faceImg:{
			width:Platform.OS==='ios'?48:42,
			height:Platform.OS==='ios'?48:42,
			borderRadius:Platform.OS==='ios'?24:21,
	  },
	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			borderRadius:2,
			justifyContent:'center',
			marginTop:24,
			marginLeft:30,
			marginRight:30
	  },
	  cell:{
			height: Platform.OS==='ios'?68:62,
			flexDirection:'row',
			justifyContent:'space-between',
			alignItems:'center',
			paddingLeft:10,
			backgroundColor:"#fff"
	  },

});
module.exports=InsertStaff