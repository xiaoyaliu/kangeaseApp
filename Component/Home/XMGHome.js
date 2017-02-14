/**
 * Created by liuxiaoya；
 *date 2017/1/12 0012.
 *description
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		TextInput,
		Image,
		Dimensions,
		Platform, //判断当前系统,
		TouchableOpacity,
        Alert
		} from 'react-native';
var {width,height}=Dimensions.get('window');
class Home extends Component {

	  render() {
			return (
					<View style={styles.container}>
						  {this.renderNavBar()}
					</View>
			);
	  }
	  renderNavBar(){
			return(
				  <View style={styles.topView}>
					<TouchableOpacity onPress={()=>{Alert.alert("点击了")}}>
				     <Text style={styles.topInput}>郑州</Text>
					</TouchableOpacity>
					 <TextInput style={styles.topTextInput} placeholder="输入商家，品类，商圈" underlineColorAndroid='transparent'/>
				      <View style={styles.navRight}>
					    <Image style={styles.navRightImgStyle} source={{uri:'icon_homepage_message'}}/>
						<Image style={styles.navRightImgStyle} source={{uri:'icon_homepage_scan'}}/>
					  </View>
				  </View>
			)
	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			backgroundColor: '#F5FCFF',
	  },
	  topView:{
			flexDirection:'row',
			height:Platform.OS==='ios'?48:44,
			alignItems:'center',
			backgroundColor:'rgba(255,96,0,1.0)'
	  },
	  topInput:{
           paddingLeft:10,
			paddingRight:10,
			color:"#fff"
	  },
	  topTextInput:{
            flex:1,
			backgroundColor:'#fff',
			height:Platform.OS==='ios'?30:26,
			borderRadius:15,
			paddingTop:0,
			paddingBottom:0,
			paddingLeft:15,
			marginRight:6
     },
	  navRight:{
			flexDirection:'row',
	  },
	  navRightImgStyle:{
			marginRight:2,
			width:Platform.OS==='ios'?30:24,
			height:Platform.OS==='ios'?30:24
	  }

});
module.exports=Home