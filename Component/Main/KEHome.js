/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Image,
		Platform //判断当前系统
		} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

var Index=require('../Index/KEIndex');//首页
var Cart=require('../Shop/KECart');//购物车
var Mine=require('../Mine/KEMine');//个人中心
var Search=require('../Search/KESearch');//搜索页
 class Main extends Component {
	  constructor(props){
			super(props);
			this.state={
				  selectedTab:'index'
			}
	  }
	  render() {
			return (
					<TabNavigator tabBarStyle={{backgroundColor:"#ffffff",borderTopWidth:1,borderTopColor:"#f1f1f1"}} >
						  {this.renderTabBarItem("首页",'tabbar_index','tabbar_index_selected','index',<Index navigator={this.props.navigator}/>)}
						  {this.renderTabBarItem("搜索",'tabbar_search','tabbar_search_selected','search',<Search navigator={this.props.navigator} comeFrom={1}/>)}
						  {this.renderTabBarItem("购物车",'tabbar_cart','tabbar_cart_selected','cart',<Cart navigator={this.props.navigator}/>)}
						  {this.renderTabBarItem("个人中心",'tabbar_mine','tabbar_mine_selected','mine',<Mine navigator={this.props.navigator}/>)}
					</TabNavigator>
			);
	  }
	  renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName){
			return(
					<TabNavigator.Item
							titleStyle={{color:"#999999",marginTop:3,marginBottom:3}}
							selectedTitleStyle={{color:"#f20583"}}
							selected={this.state.selectedTab === selectedTab}
							title={title}
							renderIcon={() => <Image style={styles.iconStyle} source={{uri:iconName}} />}
							renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:selectedIconName}} />}
							onPress={()=>{this.setState({selectedTab:selectedTab})}}
							>
						  {componentName}
					</TabNavigator.Item>
			)
	  }
}
const styles = StyleSheet.create({
	  iconStyle:{
			width:Platform.OS==='ios'?22:18,
			height:Platform.OS==='ios'?22:18
	  }
});
module.exports=Main;