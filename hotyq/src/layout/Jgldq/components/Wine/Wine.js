import React, { Component } from 'react'
import logo from '../../img/wine/wine_logo.png'
import product1 from '../../img/wine/wine_product_1.png'
import product2 from '../../img/wine/wine_product_2.png'
import product3 from '../../img/wine/wine_product_3.png'
import product4 from '../../img/wine/wine_product_4.png'
import guest1 from '../../img/wine/wine_guest_1.png'
import guest2 from '../../img/wine/wine_guest_2.png'
import guest3 from '../../img/wine/wine_guest_3.png'
import guest4 from '../../img/wine/wine_guest_4.png'
import play from '../../img/play.png'
class Wine extends Component {
  render() {
  	const style = require('../../jgldq.scss')
  	// require('../../../../../style/videos')
    return (
      <div className={style.wine}>
      	
      	<div className={style.detail}>
      		<div className={`${style.detailContent} ${style.content1}`}>
      			<div>
      				<div className={style.brand}>
      					<span className={style.detailTitle}>主推品牌：</span>
      					<img src={logo} alt=""/>
      				</div>
      				<div className={style.seckill}>
      					<p className={style.detailTitle}>秒杀商品：</p>
      					<div>
      						<img src={product1} alt="" />
      						<img src={product2} alt="" />
      						<img src={product3} alt="" />
      						<img src={product4} alt="" />
      					</div>
      				</div>
      				<p className={style.detailTitle}>促销形式：秒杀、游戏、互动</p>
      			</div>
      		</div>
      		<div className={`${style.detailContent} ${style.content2}`}>
      			<div>
      				<div className={style.content2Top}>
      					<span className={style.detailTitle}>精彩回放：</span>
      					<span className={style.detailDate}>更新时间：2017-01-06</span>
      				</div>
      				<div className={style.content2Videos}>
      					<div className={`${style.videosLeft}`}>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo1} className={style.videoMask}>
									<img className={style.play} src={play} alt="" />
									<span>121:20</span>
								</div>
								<div className={style.video}></div>
								<p>酒逢知己之千杯不醉</p>
      						</div>
      					</div>
      					<div className={style.videosRight}>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo2} className={style.videoMask}>
									<img className={style.play} src={play} alt="" />
									<span>08:12</span>
								</div>
								<div className={style.video}></div>
								<p>大咖美女畅聊各地不同酒文化</p>
      						</div>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo3} className={style.videoMask}>
									<img className={style.play} src={play} alt="" />
									<span>01:30</span>
								</div>
								<div className={style.video}></div>
								<p>网友互动抽奖送好礼</p>
      						</div>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo4} className={style.videoMask}>
									<img className={style.play} src={play} alt="" />
									<span>03:29</span>
								</div>
								<div className={style.video}></div>
								<p>红葡萄酒和白葡萄酒的区别有哪些</p>
      						</div>
      						<div className={style.videoBox}>
      							<div onClick={this.showVideo5} className={style.videoMask}>
									<img className={style.play} src={play} alt="" />
									<span>01:33</span>
								</div>
								<div className={style.video}></div>
								<p>性价比红酒、干白限时秒杀</p>
      						</div>
      					</div> 
      				</div>
      			</div>
      		</div>
      		<div className={`${style.detailContent} ${style.content3}`}>
      			<div>
      				<p className={style.detailTitle}>节目简介：</p>
      				<p>1、嘉宾、主持人结合公司年会、朋友聚会、拜访亲友等年末常见场景展开与“酒”有关的话题讨论。</p>
      				<p>2、专业品酒师讲解酒的常见分类以及红酒品鉴方法，推荐适合不同场合各个价位的酒类。</p>
      				<p>3、<span className={style.bigText}>张裕红酒超低价直播限时秒杀！</span> 网友趣味竞答，大奖随机放送！</p>
      				<p><span>4、</span><span>穿插小游戏互动与酒相关电影、习俗文化等话题讨论，提升节目综艺感。同时刺激用户购买欲望，提高商品销售高转化率，达到直播变现的目的。</span></p>
      			</div>
      		</div>
      		<div className={`${style.detailContent} ${style.content4}`}>
      			<div>
      				<p className={style.detailTitle}>主持人／嘉宾 :</p>
      				<div className={style.content4Main}>
      					<img src={guest1}  alt="" />
      					<img src={guest2} alt="" />
      					<img src={guest3} alt="" />
      					<img src={guest4} alt="" />
      				</div>
      			</div>
      		</div>
      	</div>
      	{/* <Modal title="Basic Modal" visible={this.state.visible} width={965} closable={true} wrapClassName='video-module'
				      onOk={this.handleOk} onCancel={this.handleCancel}>
					<div id={`wineYoukuplayer`} style={{width:'100%',height:'100%'}}></div>
        </Modal> */}
      </div>
    )
  }
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
  	// this.playVideo('XMjQ4MTM2MjQ3Mg==')
  }
  showVideo2(){
  	this.setState({
  		visible:true
  	})
  	// this.playVideo('XMjQ4MTc1Mjg2MA==')
  }
  showVideo3(){
  	this.setState({
  		visible:true
  	})
  	// this.playVideo('XMjQ4MTc1MjY1Ng==')
  }
  showVideo4(){
  	this.setState({
  		visible:true
  	})
  	// this.playVideo('XMjQ4MTc1Mjg2NA==')
  }
  showVideo5(){
  	this.setState({
  		visible:true
  	})
  	// this.playVideo('XMjQ4MTc1ODAxMg==')
  }
  // playVideo(vid){
	// 	winePlayer = new YKU.Player('wineYoukuplayer',{
	// 		styleid: '0',
	// 		client_id: '320a457df632b818',
	// 		vid: vid,
	// 		autoplay: true,
	// 		//newPlayer: true,
	// 	});
  // }
  // componentDidMount() {
  // 	addBaiduAnchor()
  // }
}
export default Wine