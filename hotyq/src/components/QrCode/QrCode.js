import React, { Component } from 'react'
import qrcode from './img/global_qrcode.png'
import bigQr from './img/global_big_qr.png'
import $ from "jquery"
class QrCode extends Component {
	
	componentDidMount(){
		var arrUrl=window.location.href.split("/");
		var len=arrUrl.length;
		var signType=arrUrl[len-1];
		// var width=document.documentElement.clientWidth;
		if(signType !== 'hotyq' && signType !== 'hotmi' && signType !== 'hotfan' && signType!==""){
			var isCon=$(".qrCode").width();
			var tmpW=(parseInt($("body").width(),10)-1100)/2-parseInt(isCon,10)-20;
			if(tmpW>=0){
			$('.qrCode').css("right",tmpW+'px');
			}else{
			$('.qrCode').css("right",'0px');
			}
		}else{
			console.log("不从新计算")
		}
	  $(window).resize(function(){
	  	var isCon=$(".qrCode").width();
	  	var tmpW=(parseInt($("body").width(),10)-1100)/2-parseInt(isCon,10)-20;
		if(tmpW>=0){
			$('.qrCode').css("right",tmpW+'px');
		}else{
			$('.qrCode').css("right",'0px');
		}
	  })
	  $(window).scroll(function(){
			var isCon=$(".qrCode").width();
			var tmpW=(parseInt($("body").width(),10)-1100)/2-parseInt(isCon,10)-20;
			if(tmpW>=0){
				$('.qrCode').css("right",tmpW+'px');
			}else{
				$('.qrCode').css("right",'0px');
			}
		});
  }
	mouseOver(){
  	$('#globalBigQr').show();
  }
  mouseOut(){
  	$('#globalBigQr').hide();
  }
  render() {
  	let bigQrStyle = {
  		position:'absolute',
  		top:'-96px',
  		left:'-270px',
  		display:'none',
  		width:"190px",
  		height:"253px"
  	}
  	let style = {
  		position:'fixed',
  		bottom:170,
  		right:'2.5rem',
  		cursor:'pointer',
  		zIndex:'999',
  		width:'60px',
  		height:'60px'
  	}
    return (
    	<div style={style} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} className="qrCode">
    		<img src={qrcode} alt="" />
    		<img id='globalBigQr' src={bigQr} style={bigQrStyle}  alt=""/>
    	</div>
    ) 
  }
  
  
  
  
}

export default QrCode