/****************************** 测试 begin ******************************/

  global.imgUrl = 'http://'+'testweb.hotyq.com'+'/src/style/img'//测试
  global.api = 'http://www.hotyq.com:9988/index/newsapi'//测试
  global.news='http://www.hotyq.com:9988/official/index'
  global.guanW='http://www.hotyq.com:9988' //测试
  global.videoUrl='http://'+'testweb.hotyq.com'+'/src/video.html'
  global.searchLibrary='http://www.hotyq.com:8999'
  global.register='https://www.hotyq.com:9999/api/0650'
  global.annunciate="http://testweb.hotyq.com"

  
//http://192.168.0.28:9988

/****************************** 测试 end ******************************/

//console.log(window.location.hostname)

/****************************** 线上 begin *****************************/
// global.imgUrl =  'http://'+window.location.hostname+'/hotyq/src/style/img'//线上
// global.api = 'http://'+window.location.hostname+'/index/newsapi'//线上
// global.news='http://'+window.location.hostname+'/official/index'//线上
// global.guanW='http://'+window.location.hostname //线上
// global.videoUrl='http://'+window.location.hostname+'/hotyq/src/video.html'
// global.searchLibrary='http://api.hotyq.com:8089'
// global.register='https://api.hotyq.com:8099/api/0650'
// global.annunciate="http://www.hotyq.com"	  
	

/****************************** 线上 end ******************************/
/********************************人才招聘******************************/
/*global.imgUrl =  'http://www.hotyq.com/hotyq/src/style/img'//线上
global.api = 'http://www.hotyq.com/index/newsapi'//线上
global.news='http://www.hotyq.com/official/index'//线上
global.guanW='http://www.hotyq.com'
global.videoUrl='http://www.hotyq.com/hotyq/src/video.html'
global.searchLibrary='http://api.hotyq.com:8089'*/
/*********************************************************************/
	

//添加百度统计锚点
global.addBaiduAnchor = function(){

		
	var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?17db08ec9ac3c30accefeb4a1cc91662";
  var s = document.getElementsByTagName("script")[0];
  if(s.src.indexOf('hm.baidu.com') !== -1){
	s.parentNode.removeChild(s)
	s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
  }else{
	s.parentNode.insertBefore(hm, s);
  }
}

global.serviceCateId = 12;
global.currentScreenIndex=0;
global.initServiceCateIdList=[];
document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/19.2+'px';
document.getElementsByTagName('html')[0].style.opacity=1;
window.onresize=function(){
	//document.getElementsByTagName('html')[0].style.webkitTransition='all 0.3s';
	document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/19.2+'px';
};