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
		} from 'react-native';


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
	  get: function(url, successCallback, failCallback){
			fetch(url)
					.then((response) => response.text())

			.then((responseText) => {
				  successCallback(JSON.parse(responseText));
	  })
.catch(function(err){
	  failCallback(err);
});
},
/*loading效果*/

};