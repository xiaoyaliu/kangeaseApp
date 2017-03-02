import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
        Alert,
		Switch,
		Platform
		} from 'react-native';
import Util from './../Common/util'
class CommonCell extends Component {
     constructor(props){
		   super(props);
		   this.style=this.props.noBorder?null:{borderBottomWidth:0.5,borderBottomColor:'#ccc'};
	 }
	  render() {
			return (
					<TouchableOpacity style={styles.container} disabled={this.props.navigator?false:true} onPress={()=>{Util._jumpFocus(this.props.navigator,this.props.component)}}>
						  <View style={[styles.cell,this.style]}>
						  {/*左边*/}
						  <Text style={{marginLeft:10,fontSize:13,color:'#666',}}>{this.props.title}</Text>
						  {/*右边*/}
						  {this.renderRightView()}
						  </View>
					</TouchableOpacity>
			);
	  }
	  renderRightView(){

				  return(
						  <View style={{flexDirection:'row',alignItems:'center'}}>
								{this.rightTitle()}
						  <Image source={{uri:'arrow_icon'}} style={styles.arrowImg} tintColor="#b3b3b3"/>
				         </View>
				   )

	  }
	  rightTitle(){
			if(this.props.rightTitle&&this.props.rightTitle.length>0){
				  return(
						  <Text style={{marginRight:6,fontSize:12,color:'#b2b2b2',}}>{this.props.rightTitle}</Text>
				  )
			}
	  }
}
const styles = StyleSheet.create({
	  container:{
			backgroundColor:"#fff",
	  },
	  cell:{
			height: Platform.OS==='ios'?48:42,
			flexDirection:'row',
			justifyContent:'space-between',
			alignItems:'center',
			marginLeft:10
	  },
	  arrowImg:{
			width:8,
			height:13,
			marginRight:10
	  }

});
module.exports=CommonCell;