import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import oneImg from './img/hotyqTvOne.png'
import twoImg01 from './img/hotyqTvTwo01.jpg'
import twoImg02 from './img/hotyqTvTwo02.jpg'
import twoImg03 from './img/hotyqTvTwo03.jpg'
import twoImg04 from './img/hotyqTvTwo04.jpg'
import twoImg05 from './img/hotyqTvTwo05.jpg'
import twoImg06 from './img/hotyqTvTwo06.jpg'
import twoImg07 from './img/hotyqTvTwo07.jpg'
import twoImg08 from './img/hotyqTvTwo08.jpg'
import twoImg09 from './img/hotyqTvTwo09.jpg'
import twoImg10 from './img/hotyqTvTwo10.jpg'
import twoImg11 from './img/hotyqTvTwo11.jpg'
import threeImg01 from './img/hotyqTVthree01.png'
import threeImg02 from './img/hotyqTVthree02.png'
import threeImg03 from './img/hotyqTVthree03.png'
import threeImg04 from './img/hotyqTVthree04.png'
import threeImg05 from './img/hotyqTVthree05.png'
import threeImg06 from './img/hotyqTVthree06.png'
import threeImg07 from './img/hotyqTVthree07.png'
import threeImg08 from './img/hotyqTVthree08.png'
import threeImg09 from './img/hotyqTVthree09.png'
import threeImg10 from './img/hotyqTVthree10.png'
import threeImg11 from './img/hotyqTVthree11.png'
import threeImg12 from './img/hotyqTVthree12.png'
import fourImg01 from './img/hotyqTVfour01.jpg'
import fourImg02 from './img/hotyqTVfour02.jpg'
import fourImg03 from './img/hotyqTVfour03.jpg'
import fourImg04 from './img/hotyqTVfour04.jpg'
import fourImg05 from './img/hotyqTVfour05.jpg'
import fourImg06 from './img/hotyqTVfour06.jpg'
import siexImg01 from './img/hotyqTVsix01.png'
import siexImg02 from './img/hotyqTVsix02.png'
import siexImg03 from './img/hotyqTVsix03.png'
import siexImg04 from './img/hotyqTVsix04.png'
import sevenImg01 from './img/hotyqTVseven01.png'
import sevenImg02 from './img/hotyqTVseven02.png'
import sevenImg03 from './img/hotyqTVseven03.png'
import sevenImg04 from './img/hotyqTVseven04.png'
import sevenImg05 from './img/hotyqTVseven05.png'
import sevenImg06 from './img/hotyqTVseven06.png'
import sevenImg07 from './img/hotyqTVseven07.png'
import sevenImg08 from './img/hotyqTVseven08.png'
import commonTit01 from './img/hotyqTvtits01.jpg'
import commonTit02 from './img/hotyqTvtits02.jpg'
import commonTit03 from './img/hotyqTvtits03.jpg'
import commonTit04 from './img/hotyqTvtits04.jpg'
import commonTit05 from './img/hotyqTvtits05.jpg'
import commonTit06 from './img/hotyqTvtits06.jpg'
import commonTit07 from './img/hotyqTvtits07.jpg'
import circle from './img/decorateCircle.png'
import redCircle from './img/decorateRed.png'
import squire from './img/decorateSquire.png'
import yellowCircle from './img/decorateYellow.png'
import icon01 from './img/hotyqIcon01.png'
import moreBtn from './img/hotyqMoreBtn.jpg'

export class HotyqTV extends Component {
  render() {
		const style = require('./hotyqTV.scss') 
    return (
    	  <div className={style.hotyqtvWrap}>
    	  	<div className={style.commonWrap}>
    	  	    <div className={style.commonCon}>
    	  	    <img alt=""  src={oneImg}/>
    	  	    </div>
    	  	  </div>
    	  	<div className={style.commonWrap}>
    	  	   <div className={style.commonCon}>
    	  	     	<img alt=""  src={squire} className={style.decorate} />
    	  	     	<img alt=""  src={redCircle} className={style.decorate} />
    	  	     	<img alt=""  src={circle} className={style.decorate}/>
    	  	     	<img alt=""  src={squire} className={style.decorate}/>
    	  	     	<img alt=""  src={squire} className={style.decorate}/>
    	  	     	<span className={style.commonTit}><img alt=""  src={commonTit01}/></span>
    	  	   		<p className={style.commonDes}>红演圈TV，专注于电商内容生产与变现、电商网红孵化与运营，隶属红演圈科技，独立事业部运作，淘宝、京东官方指定MCN合作伙伴。<br/>
    	  	   	红演圈TV依托红演圈App独有的网红主播数据库，整合淘宝达人、当红主播、微博大V等KOL资源，凭借专业的互联网推广渠道、娴熟的网络直播技术，为商家提供PGC与UGC节目以及短视频的策划、制作、播出、导流、变现等一体化服务。
    	  	   	<br/>
    	  	  自2016年5月业务启动至今，红演圈TV已经服务<span>200</span>多个品牌，制作播出电商直播节目<span>100＋</span>档，累计播放量超过<span>2.6亿</span>，累计销售额突破<span>3000万</span>。</p>
    	  	   		<ul className={style.conTwoUl}>
    	  	   			<li><img alt=""  src={twoImg01}/><p>天猫直播《BOSE遇见你和音乐的世界》 </p></li>
	    	  	   		<li><Link to="/food"><img alt=""  src={twoImg02}/><p>淘宝直播 《夜谈食记》</p></Link></li>
	    	  	   		<li><Link to="/jgldq/wine"><img alt=""  src={twoImg03}/><p>京东直播《京咯隆东强》 </p></Link></li>
	    	  	   		<li><img alt=""  src={twoImg04}/><p>淘宝直播《火星咿咿呀呀研究所》 </p></li>
		    	  	   	<li><img alt=""  src={twoImg05}/><p>京东直播《京东金融"游戏会议室"》 </p></li>
	    	  	   		<li><img alt=""  src={twoImg06}/><p>阿里健康《麻辣医生“探秘明星... </p></li>
	    	  	   		<li><img alt=""  src={twoImg07}/><p>京东直播《老东家杂货铺》 </p></li>
	    	  	   		<li><img alt=""  src={twoImg08}/><p>蘑菇街直播《妆出女神范》 </p></li>
		    	  	   	<li><img alt=""  src={twoImg09}/><p>京东直播《联想硬盘大话存储》</p></li>
			  	   		<li><img alt=""  src={twoImg10}/><p>阿里健康《麻辣医生“96斤以上都算胖子？》</p></li>
			  	   		<li><img alt=""  src={twoImg11}/><p>淘宝直播《buy+女王》 </p></li>
			  	   		<li><img alt=""  src={moreBtn}/></li>
    	  	   		</ul>
    	  	   	</div>
    	  	 </div>
	    	  	<div className={style.commonWrap}>
	    	  	<div className={style.commonCon}>
		    	  	<img alt=""  src={squire} className={style.decorate} />
		  	     	<img alt=""  src={redCircle} className={style.decorate} />
		    	  	<span className={style.commonTit}><img alt=""  src={commonTit02}/></span>
		    	  	<p className={style.commonDes}>红演圈TV以红演圈科技为资源依托，基于红演圈APP<span>300万</span>演艺人才数据库，<br/>
		    	  	为节目、为品牌匹配精准优质网红嘉宾，让推广效果最大化。</p>
		    	  	<ul className={style.threeUl}>
		    	  		<li><img alt=""  src={threeImg01}/><p>吴博雯Dodo</p></li>
		    	  		<li><img alt=""  src={threeImg02}/><p>张楚Aimee</p></li>
		    	  		<li><img alt=""  src={threeImg03}/><p>张向珉AMIN </p></li>
		    	  		<li><img alt=""  src={threeImg04}/><p>曹安娜 </p></li>
		    	  		<li><img alt=""  src={threeImg05}/><p>一枚小馨馨 </p></li>
		    	  		<li><img alt=""  src={threeImg06}/><p>李韵虹 </p></li>
		    	  		<li><img alt=""  src={threeImg07}/><p>一只小苏娜 </p></li>
		    	  		<li><img alt=""  src={threeImg08}/><p>牛泽萌</p></li>
		    	  		<li><img alt=""  src={threeImg09}/><p>罗娅菲</p></li>
		    	  		<li><img alt=""  src={threeImg10}/><p>张钰 </p></li>
		    	  		<li><img alt=""  src={threeImg11}/><p>兰幼金 </p></li>
		    	  		<li><img alt=""  src={threeImg12}/><p>孔令君 </p></li>
		    	  	</ul>
	    	  	</div>
    	  	</div>
    	  	<div className={style.commonWrap}>
    	  		<div className={style.commonCon}>
    	  			<img alt=""  src={redCircle} className={style.decorate} />
    	  			<img alt=""  src={icon01} className={style.decorate} />
    	  			<span className={style.commonTit}><img alt=""  src={commonTit03}/></span>
    	  			<p className={style.commonDes}>团队有着丰富成熟的直播节目运作经验，完善的直播场地、设备与网络直播技术，<br/> 
    	  			以及多年互联网营销资源积累，为客户提供超性价比网络直播品牌推广解决方案。</p>
    	  			<ul className={style.fourUl}>
    	  				<li><img alt=""  src={fourImg01} /></li>
    	  				<li><img alt=""  src={fourImg02} /></li>
    	  				<li><img alt=""  src={fourImg03} /></li>
    	  				<li><img alt=""  src={fourImg04} /></li>
    	  				<li><img alt=""  src={fourImg05} /></li>
    	  				<li><img alt=""  src={fourImg06} /></li>
    	  			</ul>
    	  		</div>
    	  	</div>
    	  	<div className={style.commonWrap}>
    	  	   <div className={style.commonCon}>
    	  	   <img alt=""  src={squire} className={style.decorate} />
	  	     	<img alt=""  src={circle} className={style.decorate} />
    	  	   <img alt=""  src={yellowCircle} className={style.decorate} />
    	  	   <span className={style.commonTit}><img alt=""  src={commonTit04}/></span>
    	  	   		<p className={style.conDesTxt}>01 网红多维度直播体验产品、线上多平台分发内容、<span>覆盖人群广</span></p>
    	  	   		<p className={style.conDesTxt}>02 展示方式多元、与网友互动性强、感受直观，<span>深度品牌曝光</span></p>
    	  	   		<p className={style.conDesTxt}>03 快速触达目标人群、直接引导下单、购买流程便捷，<span>提高销售额</span></p>
    	  	   </div>
    	  	   <div className={`${style.commonCon} ${style.specailCon}`}>
	  	  	   <span className={style.commonTit}><img alt=""  src={commonTit05}/></span>
	  	  	   		<h3 className={style.commonTitLittle}>电商、网络节目定制</h3>
	  	  	   		<p><span>全方位展示</span>：根据厂商品牌调性，产品属性、特点，定制专属节目方案。</p>
	  	  	   		<p><span>大范围曝光</span>：视频、直播、图文，多维度展示产品，形成品牌广泛知名度。</p>
	  	  	   		<p><span>多渠道推动</span>：针对商品促销、新产品发布、商品占有市场等行为，引导用户店铺关注、商家关注，增强用户粘性。</p>
	  	  	   		<h3 className={style.commonTitLittle}>节目品牌冠名</h3>
	  	  	   		<p><span>品牌曝光</span>：品牌LOGO与节目LOGO结合，节目所有宣发平台推广与曝光。</p>
	  	  	   		<p className={style.noBefore}>品牌LOGO、产品与现场道具、舞台设计相结合，节目全程露出。</p>
	  	  	   		<p><span>口播植入</span>：主持人在节目直播各个环节中穿插品牌口播内容。</p>
	  	  	   		<h3 className={style.commonTitLittle}>产品广告植入</h3>
	  	  	   		<p><span>品牌曝光</span>：现场放置品牌产品，节目内容环节、互动环节产品植入，与粉丝互动呈现。</p>
	  	  	   		<p><span>口播植入</span>：感谢品牌对本节目环节的奖品支持。</p>
	  	  	   </div>
    	  	  </div>
    	  	<div className={style.commonWrap}>
    	  	    <div className={style.commonCon}>
    	  	    	<span className={style.commonTit}><img alt=""  src={commonTit06}/></span>
    	  	    	<div className={style.adListWrap}>
    	  	    		<dl>
    	  	    			<dt>电商平台</dt>
    	  	    			<dd>
    	  	    			<img alt=""  src={siexImg01}/>
    	  	    			</dd>
    	  	    		</dl>
    	  	    		<dl>
		  	    			<dt>直播平台</dt>
		  	    			<dd><img alt=""  src={siexImg02}/></dd>
		  	    		</dl>
			  	    	<dl>
		  	    			<dt>视频平台</dt>
		  	    			<dd><img alt=""  src={siexImg03}/></dd>
		  	    		</dl>
		  	    		<dl>
			    			<dt>自媒体</dt>
			    			<dd><img alt=""  src={siexImg04}/></dd>
			    		</dl>
    	  	    	</div>
    	  	    </div>
    	  	 </div>
    	  	<div className={style.commonWrap}>
    	  		<div className={style.commonCon}>
    	  		<img alt=""  src={squire} className={style.decorate} />
    	  			<span className={style.commonTit}><img alt=""  src={commonTit07}/></span>
    	  			<ol className={style.sevenConWrap}>
    	  				<li><img alt=""  src={sevenImg01} /></li>
    	  				<li><img alt=""  src={sevenImg02}/></li>
    	  				<li><img alt=""  src={sevenImg03}/></li>
    	  				<li><img alt=""  src={sevenImg04}/></li>
    	  				<li><img alt=""  src={sevenImg05}/></li>
    	  				<li><img alt=""  src={sevenImg06}/></li>
    	  				<li><img alt=""  src={sevenImg07}/></li>
    	  				<li><img alt=""  src={sevenImg08}/></li>
    	  			</ol>
    	  		</div>
    	  	</div>
			
         </div>
    )
  }
  // constructor(props, context) {
  //   super(props, context)
  // }
  // componentDidMount() {
  // 	    window.scrollTo(0,0)
  // 	    addBaiduAnchor()
  // 	    $('.backTop').hide();
  // 	    $('.action').hide().eq(0).show();
  	  
  // }
}


export default  HotyqTV
