/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description首页
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
		TextInput,
		ListView,
		ScrollView,
		ActivityIndicator,
		Platform,
		Alert
		} from 'react-native';
import Util from './../Common/util';
var dataTest=require('./../data/index.json');
var SearchComponent=require('./../Search/KESearch');
var GoodsDetail=require('./../Goods/KEGoods');
class KEIndex extends Component {
	  constructor(props) {
			super(props);
			var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.state = {
				  dataSource: ds.cloneWithRows([]),
				  isShow: false
			};
	  }
	  render() {
			return (
					<View style={styles.container}>
						  {/*搜索*/}
					    <View style={styles.header}>
						      <Image source={{uri:"logo_index"}} style={styles.leftLogo}/>
							  <View style={styles.rightSearch}>
									<Image source={{uri:"search_icon"}} style={styles.searchLogo}/>
									<TextInput style={styles.searchInput} ref="searchInput" onFocus={()=>{this.refs.searchInput.blur();this._jumpFocus(SearchComponent,"搜索页")}} placeholder ="请输入您要搜索的商品" placeholderTextColor="#b2b2b2" underlineColorAndroid ="transparent"/>
							  </View>
						</View>
						  {/*首页商品列表*/}
						  {this.state.isShow?
						  <ScrollView style={styles.container}>
								<ListView dataSource={this.state.dataSource}
										  pageSize={6}
										  renderRow={(rowdata)=>this.renderRow(rowdata)}
                                />
						  </ScrollView>:
						  (<ActivityIndicator
							animating={true}
							style={[{height: 80}]}
							size="large"
							/>)}

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
					   dataSource:ds.cloneWithRows(dataTest.data),
					   isShow:true
				 })
	  }

	  renderRow(rowdata){
			return(
					<TouchableOpacity  style={styles.cellStyle}  onPress={()=>this._jumpFocus(GoodsDetail,"商品详情页")}>
						  <Image source={{uri: rowdata.image}} style={{width:Util.size.width, height:Util.size.width*0.418}}/>
					</TouchableOpacity>
			);
	  }
  //跳转到商品详情
	  _jumpFocus(component, title){

			const navigator = this.props.navigator;
			if (navigator){
				  navigator.push({
						component: component,
						title: title
				  });
			}
	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			backgroundColor: '#ffffff',
	  },
	  header:{
			flexDirection:'row',
			height:Platform.OS==='ios'?66:50,
			paddingLeft:10,
			paddingRight:10,
			backgroundColor:"#f20583",
			alignItems:'center'
	  },
	  leftLogo:{
            width:Platform.OS==='ios'?69:63,
			height:Platform.OS==='ios'?10:9
	  },
	  rightSearch:{
			marginLeft:12,
			width:Platform.OS==='ios'?Util.size.width-102:Util.size.width-96,
			borderRadius:3,
			height:Platform.OS==='ios'?36:32,
			backgroundColor:"#ffffff",
			flexDirection:'row',
			alignItems:'center'
	  },
	  searchLogo:{
			width:Platform.OS==='ios'?16:14,
			height:Platform.OS==='ios'?16:14,
			marginLeft:4,
	  },
	  searchInput:{
			width:Platform.OS==='ios'?Util.size.width-122:Util.size.width-114,
			height:Platform.OS==='ios'?36:32,
			paddingTop:0,
			paddingBottom:0
	  },
	  cellStyle:{
			marginTop:12
	  }

});
module.exports=KEIndex;