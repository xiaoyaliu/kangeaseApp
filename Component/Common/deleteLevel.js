/**
 * Created by liuxiaoya；
 *date 2017/2/20 0020.
 *description数据加载完
 */

import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Platform,
		Modal,
		TouchableOpacity,
		Alert
		} from 'react-native';
import Util from './../Common/util';
var screenWidth=Util.size.width;
class Delete extends Component {
	  constructor(props) {
			super(props);
	  }


	  render() {
			return (
						  <Modal
								  animationType={"none"}
								  transparent={true}
								  visible={this.props.modalVisible}
								  onRequestClose={() => {Alert.alert("Modal has been closed.")}}
								  >
								<View style={{flex:1}} activeOpacity={1}>
									  <View style={styles.container}>
											<View style={styles.content}>
												  <Text style={styles.title}>{this.props.title}</Text>
												  <View style={styles.ope}>
														<TouchableOpacity onPress={()=>this.props.closeModal()} style={[styles.opeItem,{borderRightColor:"#ccc",borderRightWidth:Util.pixel}]}>
															  <Text style={styles.text1}>取消</Text>
														</TouchableOpacity>
														<TouchableOpacity onPress={()=>this.props.deleteSure()} style={styles.opeItem}>
															  <Text style={styles.text1}>删除</Text>
														</TouchableOpacity>
												  </View>
											</View>
									  </View>
								</View>
						  </Modal>

			);

	  }



}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			justifyContent:'center',
			alignItems:'center'
	  },
	  content:{
			width: Util.size.width * 0.7,
			backgroundColor:"#fff",
			borderRadius:5
      },
	  title:{
			textAlign:'center',
			fontSize:15,
			color:"#333",
			paddingTop:28,
			paddingBottom:28,
			borderBottomColor:"#cccccc",
			borderBottomWidth:Util.pixel
	  },
	  ope:{
			height:Platform.OS==='ios'?40:36,
			width:Util.size.width * 0.7,
			flexDirection:'row',
			borderBottomLeftRadius:5,
			borderBottomRightRadius:5,

	  },
	  opeItem:{
			width:Util.size.width * 0.35,
			height:Platform.OS==='ios'?42:38,
			justifyContent:'center',
			alignItems:'center'
	  },
	  text1:{
			color:"#226ae6",
			fontSize:14,

	  }

});
module.exports=Delete;