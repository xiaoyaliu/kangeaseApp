import React, { Component ,PropTypes} from 'react';
import {
		Text,
		View,
		TouchableOpacity,
		StyleSheet,
		Platform,
		Dimensions,
		Image,
		Modal,
		TextInput,
		InteractionManager
		} from 'react-native';
export default class AlertModal extends Component{
	  constructor(props){
			super(props)
			this.state = { visible: this.props.visible };
	  }
	  close=()=>{
			this.setState({ visible: false });
	  }
	  componentWillReceiveProps(props) {
			this.setState({ visible: props.visible });
	  }
	  renderContent=()=>{
			return ( <View style={[styles.background,{width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height* 0.3}]}>
				  <TouchableOpacity activeOpacity={0.5} onPress={this.props.openPicker}>
						<Text style={{fontSize:12, color:'black', margin:10}}>打开相册</Text>
				  </TouchableOpacity>
				  <TouchableOpacity activeOpacity={0.5} onPress={this.props.openCamera}>
						<Text style={{fontSize:12, color:'black',margin:10}}>打开相机</Text>
				  </TouchableOpacity>
				  <TouchableOpacity activeOpacity={0.5} onPress={this.close}>
						<Text style={{fontSize:12, color:'black',margin:10}}>取消</Text>
				  </TouchableOpacity>
			</View>)
	  }
	  render(){
			return(
					<View>
					<Modal
							animationType='slide'//进场动画 fade
							onRequestClose={() => this.close()}
							visible={this.state.visible}//是否可见
							transparent={true} //背景透明
							>
						  <TouchableOpacity style={{flex:1}} activeOpacity={1} onPress={this.close}//点击灰色区域消失
								  >
								<View style={styles.container}>
									  {this.renderContent()}
								</View>
						  </TouchableOpacity>
					</Modal>
					<Text>111</Text>
						  </View>
			)
	  }
}
const styles = StyleSheet.create({
	  container:{
			flex:1,
			backgroundColor: 'rgba(0, 0, 0, 0.25)',
			position: 'absolute',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			justifyContent:'center',
			alignItems:'center'
	  },
	  background: {
			backgroundColor: "gray",
			justifyContent: 'center',
			alignItems: 'center'
	  }
})  