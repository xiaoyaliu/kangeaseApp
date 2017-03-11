/**
 * Created by liuxiaoya£»
 *date 2017/2/17 0017.
 *description:¹ºÎï³µ
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Image,
		TouchableOpacity,
		ListView,
		TouchableHighlight,
		TextInput,
		Alert
		} from 'react-native';
import Util from './../Common/util';
import GoodsDetail from './../Goods/KEGoods';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
class Cart extends Component {
	  constructor(props) {
			super(props);

	  }

	  render() {
			return (
					<View>

					</View>
			);

	  }
	  componentDidMount(){
			//Util._jumpFocus(this.props.navigator,GoodsDetail,this.props.name,{id:this.props.id})
	  }

}


module.exports=Cart