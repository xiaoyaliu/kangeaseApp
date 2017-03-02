/**
 * Created by liuxiaoya；
 *date 2017/2/17 0017.
 *description:搜索结果
 */
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
		Animated,
		TouchableOpacity,
		ActivityIndicator,
		ScrollView,
		ListView,
		Alert
		} from 'react-native';
import Util from './../Common/util';
var dataTest=require('./../data/searchList.json');
class SearchList extends Component {
	  constructor(props) {
			super(props);
			this.state = {
				  current_order:"default",
				  isShow: false,
				  dataNumber:0,
				  fadeAnim: new Animated.Value(0),
			}
	  }

	  render() {
			return (
					<View style={styles.container}>
                            <View style={styles.topTabBar}>
								  <View style={styles.topTabBarBox}>
									   <TouchableOpacity style={styles.tabBarItem} onPress={()=>this.renderList("default")}>
										   <Text style={[styles.tabBarText,{color:this.state.current_order=="default"?"#f20583":"#999999"}]}>综合</Text>
									   </TouchableOpacity>
										<TouchableOpacity style={styles.tabBarItem}onPress={()=>this.renderList("number")}>
											  <Text style={[styles.tabBarText,{color:this.state.current_order==="numberUp"||this.state.current_order==="numberDown"?"#f20583":"#999999"}]}>销量</Text>
											  {this.renderNumberImage()}
										</TouchableOpacity>
										<TouchableOpacity style={styles.tabBarItem}onPress={()=>this.renderList("price")}>
											  <Text style={[styles.tabBarText,{color:this.state.current_order==="priceUp"||this.state.current_order==="priceDown"?"#f20583":"#999999"}]}>价格</Text>
											  {this.renderPriceImage()}
										</TouchableOpacity>
								  </View>
								  <Animated.View
										  style={[styles.animateLine,{transform: [{translateX: this.state.fadeAnim}, ]}]}>
								  </Animated.View>
				        	</View>
						  {/*首页商品列表*/}
						  {this.state.dataNumber>0?
						  <View style={styles.container}>
						  {this.state.isShow?
								  <ScrollView>


										<View style={styles.dataNum}>
											  <Text style={{color:"#999999",fontSize:11}}>搜索到{this.state.dataNumber}个于“{this.props.searchValue}”相关的商品</Text>
										</View>
										<ListView dataSource={this.state.dataSource}
												  initialListSize={12}
												  pageSize ={6}
												  renderRow={(rowdata)=>this.renderRow(rowdata)}
												  style={{overflow:'hidden'}}
												  scrollRenderAheadDistance={100}
												/>
										<View style={styles.dataNum}>
											  <Text style={{color:"#999999",fontSize:11}}>{this.state.dataNumber}个于“减肥”相关的商品加载完毕</Text>
										</View>
								  </ScrollView>:
								  (<ActivityIndicator
										  animating={true}
										  style={[{height: 80}]}
										  size="large"
										  />)}
								</View>:
						  <View style={styles.container_emply}>
								<Image source={{uri:"sad_icon"}} style={{width:Util.size.width*0.21,height:Util.size.width*0.21,marginTop:Util.size.width*0.19}}/>
								<Text style={{marginTop:24,color:"#333",fontSize:13}}>抱歉，没有找到与“减肥”相关的商品</Text>
								<TouchableOpacity style={styles.loginBtn} onPress={()=>{this.update()}}>
									  <Text style={{color:"#f20583",fontSize:15}}>返回首页</Text>
								</TouchableOpacity>
						  </View>
						  }
					</View>
			);

	  }
	  componentDidMount(){
			this._fetchData();
	  }
	  /*首页商品列表数据*/
	  _fetchData(callback){
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.setState({
				  dataSource:ds.cloneWithRows(dataTest.info),
				  isShow:true,
				  dataNumber:dataTest.info.length
			})
	  }

	  renderRow(rowdata){
			return(
					<View style={{borderBottomWidth:1,borderBottomColor:'#cccccc'}}>
						  <TouchableOpacity  style={styles.cellStyle} onPress={()=>Alert.alert("222")}>
								<Image source={{uri: rowdata.goods_img}} style={{width:80, height:80}}/>
								<View style={styles.goods_middle}>
									 <Text style={styles.goods_name} numberOfLines={2}>{ rowdata.goods_name}测试测试测试测试测试测试测试测试测试测试测试测试</Text>
									  <Text style={styles.goods_price}>¥{rowdata.shop_price}</Text>
								</View>
						  </TouchableOpacity>
						  <TouchableOpacity style={{position:'absolute',bottom:40,right:10,justifyContent:'center',alignItems:"center"}} onPress={()=>Alert.alert("111")}>
						  <Image source={{uri: "tabbar_cart_selected"}} style={{width:16, height:16}} />
						  </TouchableOpacity>
					</View>
			);
	  }
	  //排序图片
	  renderNumberImage(){
			var current_order=this.state.current_order;
			if(current_order==="numberDown"){
				  return(
						  <Image source={{uri:"down_icon"}} style={{width:8,height:13,marginLeft:4}}/>
				  )
			}else if(current_order==="numberUp"){
				  return(
						  <Image source={{uri:"up_icon"}} style={{width:8,height:13,marginLeft:4}}/>
				  )
			}else{
				  return(
						  <Image source={{uri:"up_icon"}} style={{width:8,height:13,marginLeft:4}} tintColor="#999999"/>
				  )
			}
	  }
	  //排序图片
	  renderPriceImage(){
			var current_order=this.state.current_order;
			if(current_order==="priceDown"){
				  return(
						  <Image source={{uri:"down_icon"}} style={{width:8,height:13,marginLeft:4}}/>
				  )
			}else if(current_order==="priceUp"){
				  return(
						  <Image source={{uri:"up_icon"}} style={{width:8,height:13,marginLeft:4}}/>
				  )
			}else{
				  return(
						  <Image source={{uri:"up_icon"}} style={{width:8,height:13,marginLeft:4}} tintColor="#999999"/>
				  )
			}
	  }
	  //排序渲染
	  renderList(type){
			var current_order=this.state.current_order;
			if(type=="default"&&current_order!="default"){
				  this.setState({
						  current_order:"default"
				  });
				  Animated.timing(
						  this.state.fadeAnim,
						  {toValue: 0,
								duration: 300 }
				  ).start();
			}else if(type=="number"&&current_order!="numberUp"&&current_order!="numberDown"){
				  this.setState({
						current_order:"numberDown"
				  });
				  Animated.timing(
						  this.state.fadeAnim,
						  {toValue: Util.size.width/3,
								duration: 300 }
				  ).start();
			}else if(type=="number"&&current_order==="numberUp"){
				  this.setState({
						current_order:"numberDown"
				  });
			}else if(type=="number"&&current_order==="numberDown"){
				  this.setState({
						current_order:"numberUp"
				  });
			}else if(type=="price"&&current_order!="priceUp"&&current_order!="priceDown"){

				  this.setState({
						current_order:"priceDown"
				  });
				  Animated.timing(
						  this.state.fadeAnim,
						  {toValue: Util.size.width/3*2,
								duration: 300, }
				  ).start();
			}else if(type=="price"&&current_order==="priceUp"){
				  this.setState({
						current_order:"priceDown"
				  });
			}else if(type=="price"&&current_order==="priceDown"){
				  this.setState({
						current_order:"priceUp"
				  });
			}
	  }
}
const styles = StyleSheet.create({
	  container: {
			backgroundColor:"#fff",
			flex:1
	  },
	  container_emply:{
			alignItems:'center',
			backgroundColor:"#f1f1f1",
			flex:1
	  },
	  topTabBar:{
			height:Platform.OS==='ios'?52:46,
			borderBottomWidth:1,
			borderBottomColor:'#b3b3b3'
	  },
	  topTabBarBox:{
			flexDirection:'row'
	  },
	  tabBarItem:{
           width:Util.size.width/3,
			height:Platform.OS==='ios'?52:46,
			flexDirection:'row',
			alignItems:'center',
			justifyContent:'center'
	  },
	  tabBarText:{
			fontSize:14,

	  },
	  animateLine:{
			position:'absolute',
			width:Util.size.width/3,
			height:3,
			backgroundColor:"#f20583",
			bottom:-1
	  },
	  cellStyle:{
			height:96,
			flexDirection:'row',
			alignItems:'center',
			paddingLeft:10,
			paddingRight:10
	  },
	  goods_middle:{
			width:Util.size.width-150,
			marginLeft:10
	  },
	  goods_name:{
			fontSize:12,
			color:"#333333",
			lineHeight:18
	  },
	  goods_price:{
			fontSize:12,
			color:"#323232",
			marginTop:12
	  },
	  dataNum:{
			height:Platform.OS==='ios'?48:42,
			alignItems:'center',
			justifyContent:'center',
            backgroundColor:"#f1f1f1"
	  },
	  loginBtn:{
			height:Platform.OS=='ios'?50:44,
			alignItems:'center',
			justifyContent:'center',
			marginTop:24,
			width:Util.size.width*0.4,
			borderRadius:2,
			borderColor:"#f20583",
			borderWidth:1
	  }


});
module.exports=SearchList