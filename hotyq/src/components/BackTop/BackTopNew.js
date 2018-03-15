import React, { Component } from 'react'
import backtop from './img/global_backtop.png'
import $ from "jquery"
class BackTop extends Component {

  

  render() {
  	let style = {
  		position:'fixed',
  		bottom:100,
  		right:'2.5rem',
  		cursor:'pointer',
  		zIndex:'999',
  		width:'60px',
  		height:'60px'
  	}
    return (
    	<img src={backtop} style={style}  alt="" className="backTop" />
    ) 
  }
  
  componentDidMount(){
	  $('.backTop').hide();
	  var arrUrl=window.location.href.split("/");
	  var len=arrUrl.length;
	  var signType=arrUrl[len-1];
	  // var width=document.documentElement.clientWidth;
	  if(signType !== 'hotyq' && signType !== 'hotmi' && signType !== 'hotfan'&& signType !== '' ){
  			var isCon=$(".backTop").width();
			  var tmpW=(parseInt($("body").width(),10)-1100)/2-parseInt(isCon,10)-20;
			  if(tmpW>=0){
				$('.backTop').css("right",tmpW+'px');
			  }else{
				$('.backTop').css("right",'0px');
			  }
  	   }
	  $(window).resize(function(){
	  	var isCon=$(".backTop").width();
	  	var tmpW=(parseInt($("body").width(),10)-1100)/2-parseInt(isCon,10)-20;
		  			if(tmpW>=0){
		  				$('.backTop').css("right",tmpW+'px');
		  			}else{
		  				$('.backTop').css("right",'0px');
		  			}
	  })
	  $(window).scroll(function(){
		  if ($(window).scrollTop()>200){
		  			var isCon=$(".backTop").width();
		  			var tmpW=(parseInt($("body").width(),10)-1100)/2-parseInt(isCon,10)-20;
		  			if(tmpW>=0){
		  				$('.backTop').css("right",tmpW+'px');
		  			}else{
		  				$('.backTop').css("right",'0px');
		  			}
			  $('.backTop').fadeIn(500);
		  }else{
		   $('.backTop').fadeOut(600);
		  }
		});
		$('.backTop').click(function(){
			$('html,body').animate({scrollTop:0},200);
			$('.backTop').fadeOut(600);
		})
  }
  
}

export default BackTop