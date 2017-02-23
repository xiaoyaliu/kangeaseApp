/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description搜索
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		ScrollView,
		TouchableOpacity,
		Platform,
		Alert
		} from 'react-native';
import SearchComponent from './searchComponent'
import SearchList from './searchList'
import Util from './../Common/util'
class KESearch extends Component {
	  constructor(props) {
			super(props);
			this.state={
				  isSearch:false,
				  searchValue:""
			}
	  }
	  render() {
			return (
					<View style={styles.container}>
						  {/*搜索框*/}
						  <SearchComponent navigator={this.props.navigator} searchValue={(data)=>{this.changeSearchValue(data)}} comeFrom={this.props.comeFrom?this.props.comeFrom:""}/>
						  {this.state.isSearch?
						  <ScrollView>

						  <View style={{marginLeft:10,marginRight:10}}>
						       <View style={styles.hotSearchStyle}>
							        <Image source={{uri:"hot_search_icon"}} style={styles.hotSearchImage}/>
									<Text style={styles.hotSearchText}>热门搜索</Text>
							   </View>
								<View style={styles.hotSearchData}>
									  <TouchableOpacity style={styles.hotDataItems}>
											<Text style={styles.hotDataText}>孕妇牙膏</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.hotDataItems}>
											<Text style={styles.hotDataText}>孕妇牙膏</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.hotDataItems}>
											<Text style={styles.hotDataText}>口服液</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.hotDataItems}>
											<Text style={styles.hotDataText}>蜂蜜</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.hotDataItems}>
											<Text style={styles.hotDataText}>孕妇牙膏</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.hotDataItems}>
											<Text style={styles.hotDataText}>蜂蜜</Text>
									  </TouchableOpacity>
									  <TouchableOpacity style={styles.hotDataItems}>
											<Text style={styles.hotDataText}>孕妇牙膏</Text>
									  </TouchableOpacity>
								</View>
						  </View>

						  <View style={{marginLeft:10}}>
								<View style={styles.hotSearchStyle}>
									  <Image source={{uri:"search_icon"}} style={styles.hotSearchIcon}/>
									  <Text style={styles.hotSearchText}>历史搜索</Text>
								</View>
								<View>

									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
											<Text style={styles.hisDataText}>孕妇牙膏</Text>
											<Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>
									  <View style={styles.hisDataItemsView}>
											<TouchableOpacity style={styles.hisDataItems}>
												  <Text style={styles.hisDataText}>孕妇牙膏</Text>
												  <Image source={{uri:"arrow_history"}} style={styles.hotSearchArrow}/>
											</TouchableOpacity>
									  </View>

								</View>
						  </View>
								<View style={{justifyContent:"center",alignItems:'center'}}>
								<TouchableOpacity style={{justifyContent:"center",alignItems:'center',height:50,width:120}} onPress={()=>Alert.alert("111")}>
								   <Text style={{color:"#f20583",fontSize:15,fontFamily:"黑体"}} >清空历史记录</Text>
								</TouchableOpacity>
								</View>
					</ScrollView>:
								  <SearchList searchValue={this.state.searchValue}/>
						  }
					</View>
			);
	  }
	  changeSearchValue(value){
			this.setState({
				  searchValue:value
			})
	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			backgroundColor: '#fff'
	  },
	  hotSearchStyle:{
			flexDirection:'row',
			marginTop:10,
			height:30,
			alignItems:'center'
	  },
	  hotSearchImage:{
			width:12,
			height:14
	  },
	  hotSearchIcon:{
			width:Platform.OS==='ios'?16:14,
			height:Platform.OS==='ios'?16:14,
			tintColor:"#414141"
	  },
	  hotSearchText:{
			fontSize:15,
			color:"#333333",
			fontFamily:"黑体",
			marginLeft:4
	  },
	  hotSearchData:{
			flexDirection:'row',
			flexWrap:'wrap'
	  },
	  hotDataItems:{
			paddingLeft:10,
			paddingRight:10,
			height:24,
			borderRadius:3,
			alignItems:'center',
			justifyContent:'center',
			marginRight:10,
			marginTop:10,
			backgroundColor:"#e6e6e6"
	  },
	  hotDataText:{
			fontSize:12,
			color:"#333333",
			fontFamily:"黑体"
	  },
	  hisDataItemsView:{
			borderBottomColor:"#d9d9d9",
			borderBottomWidth:Util.pixel,
			width:Util.size.width-10
	  },
	  hisDataItems:{
			height:Platform.OS==='ios'?50:44,
			flexDirection:"row",
			justifyContent:"space-between",
			alignItems:'center'
	  },
	  hisDataText:{
			fontSize:13,
			color:"#333333",
			fontFamily:"黑体"
	  },
	  hotSearchArrow:{
			width:12,
			height:15,
			marginRight:10
	  }



});
module.exports=KESearch