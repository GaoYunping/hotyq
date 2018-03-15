import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Swiper from "swiper";
import $ from "jquery";
import Modal from "../../components/Modal/Modal"
const style = require("./home.scss");
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={
      view:true
    }
    this.onShow = this.onShow.bind(this)
    
  }
  onShow(){
    this.setState({view:false})
  }


  render() {
    let {view}=this.state
    let {onShow}=this
    return (
      <div className={ style.homeWrap}>
        <Modal show={view} onShow={onShow}   btn={true}>
          <div style={{width:"500px" ,height:"200px",background:"red" }}></div>
        </Modal>
				<Banner></Banner>
        <div className={style.adImg} >
          <a href={"carouselArr.reportList2[0].url"}>
            <img src={require("./img/01.png")} alt="" />
          </a>
        </div>
        <div className={style.dynamicWrap}>
          <p className={style.dynamicTitle}>
					 <img alt=""  src={require("./img/dyna-info.png")}/>
					</p>
          <div className={style.dynamicCon}>
            <ItemLeft/>
            <ItemRight/>
						 {/* <ItemLeft leftData={latesVideoArr.tolatestVideo[0]} /> */}
						 {/* <ItemRight rightData={latestNewsArr.tolatesNews} /> */}
				  </div>
        </div>
        <ForeignCoope/>
        <CompanyFriend/>
        
			</div>
    )
  }
}


class Banner extends Component{
  componentDidMount(){
    new Swiper("#swiperCon",{
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination:{
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 5000,//1秒切换一次
      },
      loop:true
    })
  }
	 render(){
		return (
        <div className={`swiper-container ${style.indexReset}`} id="swiperCon">
        <div className="swiper-wrapper"  style={{width:'100%',height:'100%'}}>
          <div className="swiper-slide" style={{width:'100%',height:'100%',background:"#999"}}>
              <a href={"#"}  style={{display:"block",width:'100%',height:'100%'}}>
                <img alt=""  src={require("./img/01.png")} style={{width:'100%',height:'100%',objectFit:"cover"}}  />
              </a>
          </div>
          
        
        </div>
		    <div className={`swiper-button-prev ${style.swiperButtonPrev} `}></div>
		    <div className={`swiper-button-next ${style.swiperButtonNext} `}></div>
		    <div className={`swiper-pagination ${style.swiperPagination} `}></div>
      </div>)
	 }
 }

class ItemLeft extends Component{
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
		// this.videoOneSource = new YKU.Player('videoOneSource',{
		// 	styleid: '0',
		// 	client_id: '320a457df632b818',
		// 	vid: vid,
		// 	autoplay: true,
		// });
	}
	 render(){
		 return (
      <div className={style.dynaWrapL}>
			  <ul >
          <li onClick={this.showVideo} id={"item.url"}><img alt=""  src={require("./img/05.png")} /><p ><span>{"FJHKSDFKJ"}</span></p></li>
          <li onClick={this.showVideo} id={"item.url"}><img alt=""  src={require("./img/05.png")} /><p ><span>{"FJHKSDFKJ"}</span></p></li>
          <li onClick={this.showVideo} id={"item.url"}><img alt=""  src={require("./img/05.png")} /><p ><span>{"FJHKSDFKJ"}</span></p></li>
          <li onClick={this.showVideo} id={"item.url"}><img alt=""  src={require("./img/05.png")} /><p ><span>{"FJHKSDFKJ"}</span></p></li>
          <li onClick={this.showVideo} id={"item.url"}><img alt=""  src={require("./img/05.png")} /><p ><span>{"FJHKSDFKJ"}</span></p></li>
          <li onClick={this.showVideo} id={"item.url"}><img alt=""  src={require("./img/05.png")} /><p ><span>{"FJHKSDFKJ"}</span></p></li>
          <li onClick={this.showVideo} id={"item.url"}><img alt=""  src={require("./img/05.png")} /><p ><span>{"FJHKSDFKJ"}</span></p></li>
          
          
          
          {/* {this.props.leftData.map((item,index)=>{
            return <li key={index} onClick={this.showVideo} id={item.url}><img alt=""  src={item.img}  /><p ><span>{item.title}</span></p></li>
          })} */}
			  </ul>
        <p className={style.moreTitle}>
          <span>
            <Link to="information/hotVideo">查看更多></Link>
          </span>
        </p>
			{/* <Modal title="Basic Modal" visible={this.state.display} width={965} closable={true} wrapClassName='video-module'
			      onOk={this.handleOk} onCancel={this.handleCancel}>
				<div id={`videoOneSource`} style={{width:'100%',height:'100%'}}></div>
      </Modal> */}
		 </div>)
	 }
}
class ItemRight extends Component{
	constructor(){
		super(...arguments);
		this.state={
      ss:0
				// isShow:[{isShow:true,url:"information/hotMessage/1",showName:"infoList2"},{isShow:false,url:"information/mediaReport/1",showName:"infoList1"}]
		}
		this.moseFn=this.moseFn.bind(this);
	}
	moseFn(ev){
		// console.log(ev.target.getAttribute("data-index"))
		// var i=ev.target.getAttribute("data-index")
		// var tmpData=this.state.isShow;
		// var isShow=this.state.isShow.map((item,index)=>{
		// 	if(index==i){
		// 		tmpData[index].isShow=true;
		// 	}else{
		// 		tmpData[index].isShow=false;
		// 	}
		// 	return tmpData;
		// })
		// this.setState({isShow:tmpData})
		// console.log(this.state.isShow)
		
		
		
		
	}
	 render(){
		 
		 return ( 
        <div className={style.dynaWrapR}>
          <ol className="tab-btn-wrap">
            <li data-index="0"  >公司动态</li>
            <li  data-index="1" >媒体报道</li>
          </ol>
          <div className={`${style.contentWrap} tab-con-wrap` }>

              <div className={style.tabList}>
                    
                <ItemList />
                <p className={style.moreTitle}><span><Link to={"/"}>查看更多></Link></span></p>

              </div>


              {/* {Object.keys(this.props.rightData).map((item,index)=>{
                return (
                    <div className={style.tabList} key={index}>
                    
                      {this.state.isShow[index].isShow?<ItemList rightData={this.props.rightData[this.state.isShow[index].showName]} type={index}  />:""}
                      {this.state.isShow[index].isShow?<p className={style.moreTitle}><span><Link to={this.state.isShow[index].url}>查看更多></Link></span></p>:""}

                    </div>
                )
              })} */}
              
          </div>

      </div>)
	 }
}
class ItemList extends  Component{
	constructor(){
		super(...arguments);
    this.state={
      ss:0
    }
	}
	render(){
		
			return (<ul>

        <li>
          <Link to={"/"}>
            <dl>
              <dt>
                <img alt=""  src={require("./img/03.png")} />
              </dt>
              <dd>
                <h3>{"感受感受大概"}{this.props.type}</h3>
                <p>{'發送客戶方開始繳費卡'}</p>
                <time>{'是否合適開發好了'}</time>
              </dd>
            </dl>
          </Link>
				</li>
        <li>
          <Link to={"/"}>
            <dl>
              <dt>
                <img alt=""  src={require("./img/03.png")} />
              </dt>
              <dd>
                <h3>{"感受感受大概"}{this.props.type}</h3>
                <p>{'發送客戶方開始繳費卡'}</p>
                <time>{'是否合適開發好了'}</time>
              </dd>
            </dl>
          </Link>
				</li>
        <li>
          <Link to={"/"}>
            <dl>
              <dt>
                <img alt=""  src={require("./img/03.png")} />
              </dt>
              <dd>
                <h3>{"感受感受大概"}{this.props.type}</h3>
                <p>{'發送客戶方開始繳費卡'}</p>
                <time>{'是否合適開發好了'}</time>
              </dd>
            </dl>
          </Link>
				</li>
        <li>
          <Link to={"/"}>
            <dl>
              <dt>
                <img alt=""  src={require("./img/03.png")} />
              </dt>
              <dd>
                <h3>{"感受感受大概"}{this.props.type}</h3>
                <p>{'發送客戶方開始繳費卡'}</p>
                <time>{'是否合適開發好了'}</time>
              </dd>
            </dl>
          </Link>
				</li>
        


			 
			</ul>)
		
			 
		
	}
}

// 對外合作
class ForeignCoope extends Component{
	 render(){
		 return (<div className={style.foreignCoope}>
				 <div className={style.main}>
					<p className={style.commonTitle}>
						<img alt=""  src={require('./img/foreign-cooper.png')}/>
					</p>
					<ul>

            <li ><a href={'#'}><img alt=""  src={require("./img/02.png")} /></a></li>
            <li ><a href={'#'}><img alt=""  src={require("./img/02.png")} /></a></li>
            <li ><a href={'item.url'}><img alt=""  src={require("./img/02.png")} /></a></li>
            <li ><a href={'item.url'}><img alt=""  src={require("./img/02.png")} /></a></li>
						{/* {this.props.foreignData.reportList3.map((item,index)=>{
							return <li key={index}><a href={item.url}><img alt=""  src={item.imgUrl} /></a></li>
						})} */}
					  	
					</ul>						
				 </div>	
				</div>)
	 }
 }

class CompanyFriend extends Component{
	render(){
		return( 
      <div className={style.companyParne}>
        <p className={style.commonTitle}>
          <img alt=""  src={require("./img/company-parner.png")}/>
        </p>
        <ul className={style.companyList}>
          <li>
              <p>视频媒体</p>
              <img alt=""  src={require("./img/companyParne01.png")}/>
          </li>
          <li>
            <p>影视机构</p>
              <img alt=""  src={require("./img/companyParne02.png")}/>
          </li>
          <li>
              <p>培训机构</p>
              <img alt=""  src={require("./img/companyParne03.png")}/>
          </li>
          <li>
              <p>直播平台</p>
              <img alt=""  src={require("./img/companyParne04.png")}/>
          </li>
          <li>
              <p>TV合作商家</p>
              <img alt=""  src={require("./img/companyParne05.png")}/>
          </li>
          <li>
            <p>校园市场机构</p>
              <img alt=""  src={require("./img/companyParne06.png")}/>
          </li>
        </ul>
      </div>
    )
	}
 }