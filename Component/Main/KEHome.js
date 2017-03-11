/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Image,
		Text,
		View,
		Platform //判断当前系统
		} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Util from './../Common/util'
var Index=require('../Index/KEIndex');//首页
var Cart=require('../Shop/KECart');//购物车
var Mine=require('../Mine/KEMine');//个人中心
var Search=require('../Search/KESearch');//搜索页
 class Main extends Component {
	  constructor(props){
			super(props);
			this.state={
				  selectedTab:'index',
				  cartNum:0
			}
	  }
	  render() {
			return (
					<TabNavigator tabBarStyle={{backgroundColor:"#ffffff",borderTopWidth:1,borderTopColor:"#f1f1f1"}} >
						  {this.renderTabBarItem("首页",'tabbar_index','tabbar_index_selected','index',false,<Index navigator={this.props.navigator} badge={(value)=>this.setState({cartNum:value})}/>)}
						  {this.renderTabBarItem("搜索",'tabbar_search','tabbar_search_selected','search',false,<Search navigator={this.props.navigator} comeFrom={1}/>)}
						  {this.renderTabBarItem("购物车",'tabbar_cart','tabbar_cart_selected','cart',true,<Cart navigator={this.props.navigator} nav={()=>this.setState({selectedTab:"index"})} badge={(value)=>this.setState({cartNum:value})}/>)}
						  {this.renderTabBarItem("个人中心",'tabbar_mine','tabbar_mine_selected','mine',false,<Mine navigator={this.props.navigator}/>)}
					</TabNavigator>
			);
	  }
	  renderTabBarItem(title,iconName,selectedIconName,selectedTab,badge,componentName){
			return(
					<TabNavigator.Item
							titleStyle={{color:"#999999",marginTop:3,marginBottom:3}}
							selectedTitleStyle={{color:"#f20583"}}
							selected={this.state.selectedTab === selectedTab}
							//badgeText={badgeText?this.state.cartNum:""}
							//badge={{backgroundColor:"#f20583"}}
							renderBadge={()=>this.renderBadge(badge)}
							title={title}
							renderIcon={() => <Image style={styles.iconStyle} source={{uri:iconName}} />}
							renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:selectedIconName}} />}
							onPress={()=>{this.setState({selectedTab:selectedTab})}}
							>
						  {componentName}
					</TabNavigator.Item>
			)
	  }
	  componentDidMount() {
			 var self=this;

			Util.getStorage("userId").then((value)=>{
				  let formData = new FormData();
				  formData.append("act","getCartGoodsCount");
				  if(value){
						formData.append("user_id",value);
				  }
				  Util.get(formData, function (data) {
						self.setState({
							  cartNum:data
						})
				  }, function () {

				  })
			})
	   }
	   renderBadge(badge){
			 if(badge){
			 return(    <View style={styles.badge}>
					     <Text style={styles.badgeText}>{this.state.cartNum}</Text>
				        </View>
			 )
			 }
	   }

}
const styles = StyleSheet.create({
	  iconStyle:{
			width:Platform.OS==='ios'?22:18,
			height:Platform.OS==='ios'?22:18
	  },
	  badge:{

			backgroundColor: "#f20583",
			borderRadius:8,
			height:14,
			paddingLeft:4,
			paddingRight:4,
			alignItems:"center",
			justifyContent:'center'
	  },
	  badgeText:{
			fontSize:Platform.OS==='ios'?12:11,
			color: '#fff',
			textAlign: 'center'
	  }
});
module.exports=Main;