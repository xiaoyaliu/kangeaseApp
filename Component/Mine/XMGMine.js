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
		ScrollView,
		Image
		} from 'react-native';
import CommonMyCell from './XMGCommonMyCell'
import MiddleView from './XMLMineMiddleView'
class Mine extends Component {
collect
	  render() {
			return (
					 <View style={styles.container}>
						   <View>
						       <Image source={{uri:'see'}} style={styles.leftIconStyle}/>
								 <View>
								     <Text>小马哥电商</Text>
									   <Image source={{uri:'avatar_vip'}} style={{width:17,height:17}}/>
								 </View>
								 <Image source={{uri:'icon_cell_rightarrow'}} style={{width:17,height:17}}/>
						   </View>

						   <ScrollView>
						   <View styel={{marginTop:10}}>
								 <CommonMyCell leftIconName="collect" leftTitle="我的订单" rightTitle="全部订单"/>
						         <MiddleView/>
						   </View>
						  <View style={{marginTop:10}}>
						  <CommonMyCell leftIconName="draft" leftTitle="小马哥" rightTitle="账户余额：￥100"/>
						  <CommonMyCell leftIconName="like" leftTitle="抵用券" rightTitle="10张"/>
						  </View>
						  <View style={{marginTop:10}}>
								<CommonMyCell leftIconName="card" leftTitle="积分商城" />
						  </View>
						  <View style={{marginTop:10}}>
								<CommonMyCell leftIconName="new_friend" leftTitle="今日推荐" rightIconName="me_new"/>
						  </View>
						  <View style={{marginTop:10}}>
								<CommonMyCell leftIconName="pay" leftTitle="我要合作" rightTitle="轻松开店招财进宝"/>
						  </View>
						</ScrollView>
					</View>
			);
	  }
}
const styles = StyleSheet.create({
	  container: {
			flex: 1,
			flexDirection:'column',
			backgroundColor: '#e8e8e8',
	  },

});
module.exports=Mine