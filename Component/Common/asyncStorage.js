/**
 * Created by liuxiaoya��
 *date 2016/12/27 0027.
 *description
 */
/*!
 *
 * AsyncStorage React Native module
 * ��Ҫ�ṩ�����ȡ����ȡ
 *
 */
import React, { Component } from 'react';
import {
		AsyncStorage,
		} from 'react-native';
module.exports = {
	 setItem:function(name,value){
		   AsyncStorage.setItem("name",data.info.user_name)
	 },
	  getItem:function(name){
			AsyncStorage.getItem("name",(error,res)=> {
			      return res;
			})
	  }
};