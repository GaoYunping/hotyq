import React, { Component } from 'react'
import { Link , browserHistory,history } from 'react-router'
import { connect } from 'react-redux'
import {newsCenter,latestVedio,latestNews,indexCarousel,indexRedList} from '../actions'

import logos from '../style/img/logoIndexIcon.png'
import demoImg from '../style/img/companyDemo.jpg'


import joinCompanyWrap1 from '../style/img/companyParne01.png'
import joinCompanyWrap2 from '../style/img/companyParne02.png'
import joinCompanyWrap3 from '../style/img/companyParne03.png'
import joinCompanyWrap4 from '../style/img/companyParne04.png'
import joinCompanyWrap5 from '../style/img/companyParne05.png'
import joinCompanyWrap6 from '../style/img/companyParne06.png'

import defaultImg from '../style/img/app_icon_defualt.jpg'
import dyInfoTit from '../style/img/dyna-info.png'
import foreignTit from '../style/img/foreign-cooper.png'
import companyParnerTit from '../style/img/company-parner.png'

var path = require('path')
import { selectHomeList,getKeyWrods } from '../actions'
import { setTimeout } from 'timers';
const videoStyle = require('../style/videos')
import style from '../style/glabalNavIndex.scss'
let videoOneSource = null;
class GlobalNavIndexs extends Component {
  constructor(props, context) {
    super(props, context)
    this.props.dispatch(newsCenter())
    this.props.dispatch(latestVedio())
    this.props.dispatch(latestNews())
    this.props.dispatch(indexCarousel())
    this.props.dispatch(getKeyWrods())
    this.props.dispatch(indexRedList())
 }

  componentDidMount() {
	 var isHeight=document.body.clientHeight>680?document.body.clientHeight:680;
		 window.scrollTo(0,0);
		addBaiduAnchor()
		setTimeout(function(){
			var mySwiper = new Swiper('.swiper-container',{
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
					pagination: '.swiper-pagination',
					autoplay: 5000,//可选选项，自动滑动
					loop:true,
					preventClicks : false,//默认true
					
					
			})
		},1000)
	/*$("body").on('mouseover','.tab-btn-wrap li',function(){
		var index=$(this).index();
		console.log(index)
		$(this).addclass("actives").siblings().removeclass("actives");
		$(".tab-con-wrap>div").eq(index).show().siblings().hide();
	})*/
 }
 

  render() {
	const { newsCenterArr,latestNewsArr,latesVideoArr,carouselArr,keysList,redsList } = this.props;
	this.imgArray=carouselArr.reportList;
  	
    const { user } = this.props;
    return (
    		<div style={{width:'100%',minWidth:'1100px'}}>
				  <Banner  bannerData={carouselArr.reportList}/>
					<div className={style.adImg} ><a href={carouselArr.reportList2[0].url}><img src={carouselArr.reportList2[0].imgUrl} /></a></div>
					<p className={style.commonTitle}>
					 <img src={dyInfoTit}/>
					</p>
					<div className={style.dynaWrap}>
						 <ItemLeft leftData={latesVideoArr.tolatestVideo[0]} />
						 <ItemRight rightData={latestNewsArr.tolatesNews} />
					</div>
					<ForeignCoope foreignData={carouselArr} />
					<CompanyFriend/>
					
					
			</div>
    )
  }

}

class ItemList extends React.Component{
	constructor(){
		super(...arguments);
	}
	render(){
		if(this.props.type==0){
			return (<ul>
			 {this.props.rightData.map((item,index)=>{
				 return  <li key={index}>
		             <Link to={`/info/${item.id}`}>
						<dl>
							<dt>
								<img src={item.img} />
							</dt>
							<dd>
								<h3>{item.title}</h3>
								<p>{item.brief}</p>
								<time>{item.add_date}</time>
							</dd>
						</dl>
						</Link>
				</li>
			    })}
			</ul>)
		}else{
			return (<ul>
			 {this.props.rightData.map((item,index)=>{
				 return  <li key={index}>
		             <Link href={item.url}>
						<dl>
							<dt>
								<img src={item.img} />
							</dt>
							<dd>
								<h3>{item.title}{this.props.type}</h3>
								<p>{item.brief}</p>
								<time>{item.add_date}</time>
							</dd>
						</dl>
						</Link>
				</li>
			    })}
			</ul>)
		}
		
	}
}
class ItemRight extends React.Component{
	constructor(){
		super(...arguments);
		this.state={
				isShow:[{isShow:true,url:"information/hotMessage/1",showName:"infoList2"},{isShow:false,url:"information/mediaReport/1",showName:"infoList1"}]
		}
		this.moseFn=this.moseFn.bind(this);
	}
	moseFn(ev){
		console.log(ev.target.getAttribute("data-index"))
		var i=ev.target.getAttribute("data-index")
		var tmpData=this.state.isShow;
		var isShow=this.state.isShow.map((item,index)=>{
			if(index==i){
				tmpData[index].isShow=true;
			}else{
				tmpData[index].isShow=false;
			}
			return tmpData;
		})
		this.setState({isShow:tmpData})
		console.log(this.state.isShow)
		
		
		
		
	}
	 render(){
		 console.log(this.state.isShow[0].isShow)
		 console.log("1111111111111111111111111111111")
		 console.log(this.props.rightData)
		 return ( <div className={style.dynaWrapR}>
				            <ol className="tab-btn-wrap">
								<li className={this.state.isShow[0].isShow?"actives":""} data-index="0" onMouseOver={this.moseFn} >公司动态</li>
								<li className={this.state.isShow[1].isShow?"actives":""} data-index="1" onMouseOver={this.moseFn} >媒体报道</li>
							</ol>
							<div className={`${style.contentWrap} tab-con-wrap` }>
							   {Object.keys(this.props.rightData).map((item,index)=>{
								   console.log("ppppppppppppppppppppppppppp")
								   console.log({item})
								   console.log({index})
								   
								   return (
										   <div className={style.tabList} key={index}>
										   
										    {this.state.isShow[index].isShow?<ItemList rightData={this.props.rightData[this.state.isShow[index].showName]} type={index}  />:""}
										    {this.state.isShow[index].isShow?<p className={style.moreTitle}><span><Link to={this.state.isShow[index].url}>查看更多></Link></span></p>:""}

										    </div>
								   )
							   })}
							    
							</div>
	
						 </div>)
	 }
}
class ItemLeft extends React.Component{
	constructor() {
	    super(...arguments)
	    this.videoOneSource=null;
	    this.showVideo=this.showVideo.bind(this);
	    this.hiddenVideoFn=this.hiddenVideoFn.bind(this);
	    this.handleCancel=this.handleCancel.bind(this);
	    this.state = {
	            intShow: 0,
	            display:false,
	            prevEnter: false,
	            nextEnter: false,
	            thumbEnter: false
	          };
	 }
	hiddenVideoFn(){
		this.setState({
			display:false
		})
		
		
	}
	handleCancel() {
	  $("#videoOneSource").html("");
	  this.setState({
	    display: false
	  })	 
	 
	}
showVideo(ev){
	  const id = $(ev.currentTarget).attr('id');
	   var vid=id.split(".html")[0].split("id_")[1];
	  this.setState({
	  		display:true
	  	})
	  	var _this=this
	  	setTimeout(function(){
	  		_this.playVideo(vid);
	  	},30)
}
	playVideo(vid){
		this.videoOneSource = new YKU.Player('videoOneSource',{
			styleid: '0',
			client_id: '320a457df632b818',
			vid: vid,
			autoplay: true,
		});
	}
	 render(){
		 return ( <div className={style.dynaWrapL}>
			    <ul >
				{this.props.leftData.map((item,index)=>{
					return <li key={index} onClick={this.showVideo} id={item.url}><img src={item.img}  /><p ><span>{item.title}</span></p></li>
				})}
			</ul>
			<p className={style.moreTitle}>
				<span>
				  <Link to="information/hotVideo">查看更多></Link>
				</span>
			</p>
			<Modal title="Basic Modal" visible={this.state.display} width={965} closable={true} wrapClassName='video-module'
			      onOk={this.handleOk} onCancel={this.handleCancel}>
				<div id={`videoOneSource`} style={{width:'100%',height:'100%'}}></div>
            </Modal>
		 </div>)
	 }
}
 class Banner extends React.Component{
	 render(){
		 return (<div className="swiper-container index-reset" id="swiperCon">
			<div className="swiper-wrapper"  style={{width:'100%',height:'100%'}}>
			
			{this.props.bannerData.map((item,index)=>{
				return <div className="swiper-slide" style={{width:'100%',height:'100%'}} key={index} style={{width:"100%",background:"#999"}}>
				     <a href={item.url}  style={{display:"block",width:'100%',height:'100%'}}><img src={item.imgUrl} style={{width:'100%',height:'100%',objectFit:"cover"}}  /></a>
		            </div>
			})}
		 
		</div>
		<div className="swiper-button-prev"></div>
		<div className="swiper-button-next"></div>
		<div className="swiper-pagination" ></div>
</div>)
	 }
 }
 
 
 class ForeignCoope extends React.Component{
	 render(){
		 return (<div className={style.foreignCoope}>
				 <div className={style.main}>
					<p className={style.commonTitle}>
						<img src={foreignTit}/>
					</p>
					<ul>
						{this.props.foreignData.reportList3.map((item,index)=>{
							return <li key={index}><a href={item.url}><img src={item.imgUrl} /></a></li>
						})}
					  	
					</ul>						
				 </div>	
				</div>)
	 }
 }
 class CompanyFriend extends React.Component{
	render(){
		return( <div className={style.companyParne}>
	    <p className={style.commonTitle}>
			<img src={companyParnerTit}/>
		</p>
		<ul className={style.companyList}>
			<li>
				  <p>视频媒体</p>
					<img src={joinCompanyWrap1}/>
			</li>
			<li>
			   <p>影视机构</p>
					<img src={joinCompanyWrap2}/>
			</li>
			<li>
			    <p>培训机构</p>
					<img src={joinCompanyWrap3}/>
			</li>
			<li>
			    <p>直播平台</p>
					<img src={joinCompanyWrap4}/>
			</li>
			<li>
			    <p>TV合作商家</p>
					<img src={joinCompanyWrap5}/>
			</li>
			<li>
			   <p>校园市场机构</p>
					<img src={joinCompanyWrap6}/>
			</li>
		</ul>
	</div>)
	}
 }
function mapStateToProps(state, ownProps) {
	const { newsCenter } = state
	const newsCenterArr = newsCenter.newsCenterList || []
	const latestNewsArr=state.tolatestNews || []
	const latesVideoArr=state.tolatestVideo || []
	const carouselArr=state.toIndexCarousel.toIndexCarousel || {"reportList":[{"imgUrl":""}],"reportList2":[{"imgUrl":""}],"reportList3":[{"imgUrl":""}]}
	//关键词列表
	const keysList=state.getKeys.redKeys
	//首页推荐红人
	const redsList =state.indexRedsList.data;
	console.log(latesVideoArr)
  return {
		newsCenterArr,
		latestNewsArr,
		latesVideoArr,
		keysList,
		redsList,
		carouselArr
  }
}

//export default connect(mapStateToProps)(GlobalNavIndexs)
module.exports = connect(mapStateToProps)(GlobalNavIndexs)

