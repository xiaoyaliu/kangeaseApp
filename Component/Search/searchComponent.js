/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description搜索框组件
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Image,
		TextInput,
		TouchableOpacity,
		Alert
		} from 'react-native';
import Util from './../Common/util';
class SearchComponent extends Component {
	  constructor(props) {
			super(props);
			this.state={
				  searchClear:false,
				  searchValue:""
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  {Platform.OS=='ios'?

											  <View style={styles.viewSearch}>
													<Image source={{uri:"search_icon"}} style={styles.searchLogo}/>
													<TextInput autoFocus={true} ref="searchInput"  clearButtonMode="while-editing" onChangeText ={(value)=>this.popToValue(value)} value={this.state.nameValue}  style={styles.TextInputStyle} placeholder ="请输入您要搜索的商品" placeholderTextColor="#cccccc"/>
											  </View>
								  :
										<View  style={styles.viewSearch}>
													<Image source={{uri:"search_icon"}} style={styles.searchLogo}/>
													<TextInput autoFocus={true} ref="searchInput"  onChangeText ={(value)=>this.popToValue(value)}  value={this.state.searchValue}  style={styles.TextInputStyle} placeholder ="请输入您要搜索的商品" placeholderTextColor="#cccccc" underlineColorAndroid='transparent'/>
											  {this.renderNameClear()}
										</View>
						  }
						     <Text style={styles.cancelSearchText} onPress={()=>this.cancelSearch()}>取消</Text>
					</View>
			);
	  }
	  popToValue(value){
			this.setState({searchValue:value});
			this.props.searchValue(value)
	  }
	  //取消搜索
	  cancelSearch(){
			const navigator = this.props.navigator;
			if(navigator&&this.props.comeFrom===1){
				  this.clearNameContent();
				  this.refs.searchInput.blur();
			}else{
				  navigator.pop()
			}

	  }
	  //用户名清空按钮状态判断
	  clearNameState(value){
			this.setState({
				  searchValue:value
			});
			if(value==""){
				  this.setState({
						searchClear:false
				  })
			}else{
				  this.setState({
						searchClear:true
				  })
			}
	  }
	  //用户名清空按钮显示判断
	  renderNameClear(){
			if(this.state.searchClear&&Platform.OS!='ios'){
				  return (<TouchableOpacity style={styles.clearBtn} onPress={()=>this.clearNameContent()}>
						<Image source={{uri:'clearmodese'}} style={{width:13,height:13}} resizeMode ="stretch"/>
				  </TouchableOpacity>)

			}else{
				  return(<TouchableOpacity>
				  </TouchableOpacity>);
			}
	  }
	  clearNameContent(){
			this.setState({
				  searchClear:false,
				  searchValue:""
			});
	  }
}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#fff",
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'center',
			height:Platform.OS==='ios'?64:48,
			paddingTop:Platform.OS==='ios'?15:0,
			borderBottomWidth:1,
			borderBottomColor:'#b3b3b3'
	  },
	  viewSearch:{
			width:Util.size.width-70,
			borderRadius:3,
			height:Platform.OS==='ios'?34:32,
			backgroundColor:"#e6e6e6",
			flexDirection:'row',
			alignItems:'center',
			marginRight:10
	  },
	  searchLogo:{
			width:Platform.OS==='ios'?16:14,
			height:Platform.OS==='ios'?16:14,
			marginLeft:6,
			tintColor:"#b3b3b3"
	  },
	  TextInputStyle:{
			width:Util.size.width-120,
			height:Platform.OS==='ios'?34:32,
			marginLeft:2,
			paddingTop:0,
			paddingBottom:0
	  },
	  clearBtn:{
			position:'absolute',
			right:1,
			bottom:0,
			alignItems:'center',
			justifyContent:'center',
			width:Platform.OS==='ios'?36:32,
			height:Platform.OS==='ios'?36:32,
			zIndex:2
	  },
	  cancelSearchText:{
			fontSize:14,
			color:"#333333"
	  }

});
module.exports=SearchComponent