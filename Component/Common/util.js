/**
 * Created by liuxiaoya；
 *date 2016/12/27 0027.
 *description
 */
/*!
 *
 * Util模块 React Native module
 * 主要提供工具方法
 *
 */
import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import {
		PixelRatio,
		AsyncStorage
		} from 'react-native';

import Toast from 'react-native-root-toast';
module.exports = {
	  /*最小线宽*/
	  pixel: 1 / PixelRatio.get(),

	  /*屏幕尺寸*/
	  size: {
			width: Dimensions.get('window').width,
			height: Dimensions.get('window').height
	  },
	  /**
	   * 基于fetch的get方法
	   * @method post
	   * @param {string} url
	   * @param {function} callback 请求成功回调
	   */
	  get: function(formData, successCallback, failCallback){
			let Url="http://192.168.1.176/appClientApi/controlApi.php";
			fetch(Url,
					{method: 'POST',
						  body: formData}
			).then((response) => response.text())

			.then((responseText) => {
				  successCallback(JSON.parse(responseText));
	        })
            .catch(function(err){
	               failCallback(err);
            });
            },
	  //跳转到component
	  _jumpFocus(navigator,component, title,pramas){
			if (navigator){
				  navigator.push({
						component: component,
						title: title,
						passProps:pramas
				  });
			}
	  },
		//正则表达式
	  regex:{
			mobile:function(value){
				  let s = /^1[3|4|5|7|8]\d{9}$/;
				 return s.test(value)?true:false
			},
			//正整数
			intB:function(value){
				  let s =/^[0-9]*[1-9][0-9]*$/;
				  return s.test(value)?true:false
			},
			//用户名3-16位汉字字母英文
			Username:function(value){
				  let s=/^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
				  return s.test(value)?true:false
			}

	  },
	  setStorage:function(name,value){
			AsyncStorage.setItem(name,value);
			console.log(name,value)
	  },
	  getStorage:function(key){
			return new Promise((resolve,reject)=>{
			AsyncStorage.getItem(key,(error,res)=>{
				  if (!error) {
						try {
							  resolve(res);
						} catch (e) {
							  reject(error);
						}
				  }else {
						reject(error);
				  }
			});
			});
	  },

	  removeStorage:function(key){
			AsyncStorage.removeItem(key,(error,res)=>{
				  if(!error){

				  }
			})
	  },
	  quit:function(navigator,component){
			var that=this;
			let formData = new FormData();
			formData.append("act","userLogout");
			this.get(formData,function(data){
                if(data.flag){
					  AsyncStorage.removeItem("username",(error,res)=>{
							if(!error){
								  that._jumpFocus(navigator,component)
							}else{

							}
					  })
				}
			},function(){

			})

	  },
	  toast:function(mag){
			Toast.show(mag, {
				  duration: Toast.durations.SHORT,
				  position: Toast.positions.CENTER,
				  shadow: true,
				  animation: false,
				  hideOnPress: true,
				  delay: 0,
				  onShow: () => {

				  },
				  onShown: () => {

				  },
				  onHide: () => {

				  },
				  onHidden: () => {

				  }
			})
	  },
	  //加密英文
	  encryptStr:function(name){
			let first=name.substring(0,1);
			let last1=name.substring(name.length-1,name.length);
			if(name.length<3){
				  name=first+"***";
			}else{
				  name=first+"***"+last1;
			}
			return name;
	  }

};