/**
 * Created by liuxiaoya；
 *date 2017/2/14 0014.
 *description:公共头部导航
 */
import React, { Component } from 'react';
import {
		StyleSheet,
		Text,
		View,
		Image,
		TouchableOpacity,
		Platform,
		} from 'react-native';
import PickerItem from './PickerItem'
import Util from './../Common/util';
export default class Picker extends Component{
	  static Item = PickerItem;
	  constructor(props) {
			super(props);
			this.state = {
				  selectedValue: this.props.selectedValue,
				  selectedName:this.props.selectedName
			}
	  }
	  static propTypes = {
			...View.propTypes,
			  style: View.propTypes.style,
			  onValueChange: React.PropTypes.func,
			  }
	  render() {
			let children = this.props.children;
			let parentProps=this.props;
			if (!children.length) {
				  throw new Error("at least two child component are needed.");
			}
			let itemArr= [];
			const contentViews = children.map(
					(child,i) => {
						  itemArr[i]=(
								  <View style={styles.pickItem} key={i}>

								  <TouchableOpacity style={styles.pickItemTouch} onPress={(index,name)=>{child.props.isPop?this.jump(child.props.isPop,child.props.value):this.update(child.props.value,child.props.label)}}>
								     <Text style={{fontSize:12}}>{child.props.label}</Text>
										{this.getCheck(child.props.value)}
								  </TouchableOpacity>

								    </View>
						  )
					})
			return (
						  <TouchableOpacity style={styles.container} onPress={(index,name)=>{this.update(this.state.selectedValue,this.state.selectedName)}}>
								<View style={styles.picker}>
								<View style={styles.itemTitleView}>
									  <Text style={styles.itemTitleName}>{this.props.itemTitleName}</Text>
								</View>
								{itemArr}
								</View>
						  </TouchableOpacity>
			);
	  }
	  jump(isPop,value){
			var passProps={
				  currentDay:this.props.currentDay,
				  cronCyc_day:(id)=>{this.props.cronCyc_day(id);this.update(value,id)}
			}
			Util._jumpFocus(this.props.navigator,isPop,"",passProps)
	  }

	  getCheck(child){
			if(child==this.state.selectedValue){
				  return (
					<Image source={{uri:'checked_icon'}} style={{width:14,height:10,position:'absolute',top:10,right:14}} />
				  )
			}else{
				  return null;
			}
	  }
	  componentDidMount() {
			let selectedValue = this.props.selectedValue;

			//this.update(selectedValue);
	  }
	  update(index,name) {
			this.setState({
				  selectedValue: index,
				  selectedName:name
			});
			let show=false;
			if (this.props.onValueChange) {
				  this.props.onValueChange(index,name,show);
			}
	  }

}
const styles = StyleSheet.create({

	  container:{
			backgroundColor:"rgba(0,0,0,0.3)",
			width:Util.size.width,
			height:Util.size.height,
			position:'absolute',
			left:0,
			bottom:0,
			zIndex:10
	  },
	  picker:{
			position:'absolute',
			left:0,
			bottom:0,
			backgroundColor:'#fff',
			paddingBottom:20
	  },
	  itemTitleView:{
			width:Util.size.width,
			height:Platform.OS==='ios'?44:38,
			borderBottomColor:"#b3b3b3",
			borderBottomWidth:Util.pixel,
			alignItems:'center',
			justifyContent:'center',
	  },
	  itemTitleName:{
			fontSize:14
	  },
	  pickItem:{
			marginLeft:12
	  },
	  pickItemTouch:{
			borderBottomColor:"#ccc",
			borderBottomWidth:Util.pixel,
			height:Platform.OS==='ios'?46:40,
			justifyContent:'center',
			width:Util.size.width-24
	  }

});
