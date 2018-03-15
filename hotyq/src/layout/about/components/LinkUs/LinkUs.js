import React, { Component } from 'react';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap'


import businessWX from './img/businessWX.png';
import serviceWX from './img/serviceWX.png';
import FanWeiXin from './img/hotFanWeiXin.jpg';
class LinkUs extends Component {
	
  render() {
		const style = require('./contact.scss');
    return (
      <div className={style.contact} >
   		<div className={style.contactCon}>
	        <div className={style.contactLeft} >	
	        	
				 			<dl>
								 <dt>商务合作</dt>
								 <dd>
								 		<p>TEL : 15652440727</p>
										<p>Mail : BD@hotyq.com</p>
										<p>WeChat : hotjuliana</p>
										<div>
											<img src={businessWX} alt=""/>
											<span>扫描二维码添加商务微信</span>
										</div>
									</dd>
							 </dl>
							 <dl>
								  <dt>客服</dt>
								  <dd>
									  <p>TEL : 010-57799869</p>
										<p>Mail : kf@hotyq.com</p>
										<p>QQ : 2284680653</p>
										<p>WeChat : kfhotyq</p>
										<div>
											<img src={serviceWX} alt=""/>
											<span>扫描二维码添加客服微信</span>
										</div>
									</dd> 
							 </dl>
							 <dl>
								 <dt>媒体账号</dt>
								 <dd className={style.weiboHref}>
			 						<a href="http://weibo.com/hotyq" rel="noopener" target='_blank' >红演圈微博</a>
								 </dd>
							 </dl>
			 				<div className={style.erweima}>
			 					<img src={FanWeiXin} alt=""/>
			 					<p className={style.erweides}>扫描二维码关注微信公众号</p>
			 				</div>
			 			
	        </div>
	        <div className={style.contactRight}>
							<div id="map" className={style.map}>
								<Map center={{lng: 116.486872, lat: 39.910896}}  style={{height:"100%"}} zoom="30" enableScrollWheelZoom="true">
            			<NavigationControl />
            			<Marker position={{lng: 116.486872, lat:39.910896}}  /> 
            			<InfoWindow position={{lng: 116.486872, lat:39.910896}} text="红演圈（北京）网络科技有限公司" title="京津冀文化产业协同发展中心"/> 
									
								</Map>
							</div>
							<div className={style.mapDes}>
								<p>红演圈（北京）网络科技有限公司</p>
								<p>地址：北京市朝阳区通惠河北路21号京津冀文化产业协同发展中心3层</p>
								<p>总机：010-57799869</p>
							</div>
	        </div>
   		</div>
      </div>
    )
  }
  
}

export default LinkUs
