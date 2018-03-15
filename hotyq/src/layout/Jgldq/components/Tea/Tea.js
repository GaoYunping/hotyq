import React, { Component } from 'react'

class Tea extends Component {
	constructor(props, context) {
    super(props, context)
    this.state = {
    	visible:false
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.showVideo1 = this.showVideo1.bind(this)
    this.showVideo2 = this.showVideo2.bind(this)
    this.showVideo3 = this.showVideo3.bind(this)
    this.showVideo4 = this.showVideo4.bind(this)
    this.showVideo5 = this.showVideo5.bind(this)
  }
  handleCancel(e) {
    this.setState({
      visible: false
    })
  }
  showVideo1(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMjQ3OTA0NDIwMA==')
  }
  showVideo2(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMjQ3OTA0MTMwNA==')
  }
  showVideo3(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMjQ3OTA4MTY2NA==')
  }
  showVideo4(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMjQ3OTA4MTYyNA==')
  }
  showVideo5(){
  	this.setState({
  		visible:true
  	})
  	this.playVideo('XMjQ3OTA4MTkwOA==')
  }
  playVideo(vid){
		// new YKU.Player('teaYoukuplayer',{
		// 	styleid: '0',
		// 	client_id: '320a457df632b818',
		// 	vid: vid,
		// 	autoplay: true,
		// 	//newPlayer: true,
		// });
  }
  componentDidMount() {
		
  	global.addBaiduAnchor()
  }
  render() {
  	const style = require('../../jgldq.scss')
  	// require('../../../../../style/videos')
    return (
      <div className={style.tea}>
      	<div className={style.detail}>
      		<div className={`${style.detailContent} ${style.content1}`}>
      			<div>
      				<div className={style.brand}>
      					<span className={style.detailTitle}>主推品牌：</span>
      					<img src={require("../../img/tea/tea_logo.png")} alt="" />
      				</div>
      				<div className={style.seckill}>
      					<p className={style.detailTitle}>秒杀商品：</p>
      					<div>
      						<img src={require('../../img/tea/tea_product_1.png')} alt="" />
      						<img src={require('../../img/tea/tea_product_2.png')} alt="" />
      						<img src={require('../../img/tea/tea_product_3.png')} alt="" />
      						<img src={require('../../img/tea/tea_product_4.png')} alt="" />
      					</div>
      				</div>
      				<p className={style.detailTitle}>促销形式：秒杀、游戏、互动</p>
      			</div>
      		</div>
      		<div className={`${style.detailContent} ${style.content2}`}>
      			<div>
      				<div className={style.content2Top}>
      					<span className={style.detailTitle}>精彩回放：</span>
      					<span className={style.detailDate}>更新时间：2017-01-18</span>
      				</div>
      				<div className={style.content2Videos}>
      					<div className={`${style.videosLeft}`}>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo1} className={style.videoMask}>
											<img className={style.play} src={require("../../img/play.png")} alt="" />
											<span>121:47</span>
										</div>
										<div className={style.video}></div>
										<p>论三茶六礼 品百味人生</p>
      						</div>
      					</div>
      					<div className={style.videosRight}>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo2} className={style.videoMask}>
									<img className={style.play} src={require("../../img/play.png")} alt="" />
									<span>00:55</span>
								</div>
								<div className={style.video}></div>
								<p>性价比茶叶限时秒杀</p>
      						</div>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo3} className={style.videoMask}>
									<img className={style.play} src={require("../../img/play.png")} alt="" />
									<span>01:28</span>
								</div>
								<div className={style.video}></div>
								<p>网友互动抽奖送好礼</p>
      						</div>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo4} className={style.videoMask}>
									<img className={style.play} src={require("../../img/play.png")} alt="" />
									<span>03:09</span>
								</div>
								<div className={style.video}></div>
								<p>美女主持卖萌五连拍</p>
      						</div>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo5} className={style.videoMask}>
									<img className={style.play} src={require("../../img/play.png")} alt="" />
									<span>01:25</span>
								</div>
								<div className={style.video}></div>
								<p>茶叶常识扫盲，铁观音是乌龙茶</p>
      						</div>
      					</div> 
      				</div>
      			</div>
      		</div>
      		<div className={`${style.detailContent} ${style.content3}`}>
      			<div>
      				<p className={style.detailTitle}>节目简介：</p>
      				<p>1、嘉宾、主持人结合公司年会、朋友聚会、拜访亲友等年末常见场景展开与“茶”有关的话题讨论。</p>
      				<p>2、茶业领域专业人士讲解茶的常见分类、购买茶的注意事项以及推荐各场合下最适合的茶品。</p>
      				<p>3、<span className={style.bigText}>大红袍、铁观音、金骏眉等茶叶超低价直播限时秒杀！</span> 网友趣味竞答，大奖随机放送！</p>
      				<p><span>4、</span><span>穿插小游戏互动与茶相关电影、诗歌、习俗文化等话题讨论，提升节目综艺感。同时刺激用户购买欲望，提高商品销售高转化率，达到直播变现的目的。</span></p>
      			</div>
      		</div>
      		<div className={`${style.detailContent} ${style.content4}`}>
      			<div>
      				<p className={style.detailTitle}>主持人／嘉宾 :</p>
      				<div className={style.content4Main}>
      					<img src={require('../../img/tea/tea_guest_1.png')} alt="" />
      					<img src={require('../../img/tea/tea_guest_2.png')} alt="" />
      					<img src={require('../../img/wine/wine_guest_4.png')} alt="" />
      				</div>
      			</div>
      		</div>
      	</div>
      	
      	{/* <Modal title="Basic Modal" visible={this.state.visible} width={965} closable={true} wrapClassName='video-module'
				      onOk={this.handleOk} onCancel={this.handleCancel}>
					<div id={`teaYoukuplayer`} style={{width:'100%',height:'100%'}}></div>
        </Modal> */}
        
      </div>
    )
  }
  
}
export default Tea