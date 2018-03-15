import React, { Component } from 'react'
import banner from './img/investBanner.jpg'
import tit01 from './img/investTit01.png'
import tit02 from './img/investTit02.png'
import showImg01 from './img/invest01.png'
import showImg02 from './img/invest02.png'
import showImg03 from './img/invest03.png'
import showImg04 from './img/invest04.png'
import showImg05 from './img/invest05.png'
import showImg06 from './img/invest06.png'
import showImg07 from './img/invest07.png'
import showImg08 from './img/invest08.png'
import showImg09 from './img/invest09.png'
import showImg10 from './img/invest10.png'
import showImg19 from './img/domain1.png'
import showImg20 from './img/domain2.png'
import showImg21 from './img/domain3.png'
import showImg22 from './img/domain4.png'
import showImg23 from './img/domain5.png'
import showImg24 from './img/domain6.png'
import showImg25 from './img/domain7.png'
import showImg26 from './img/domain8.png'
import domain01 from './img/domain01.png'
import domain02 from './img/domain02.png'
import domain03 from './img/domain03.png'
import domain04 from './img/domain04.png'
import domain05 from './img/domain05.png'
import domain06 from './img/domain06.png'
import domain07 from './img/domain07.png'
import domain08 from './img/domain08.png'


class Invest extends Component {
  render() {
		const style = require( './invest.scss');
    return (
    	<div>
    		<div>
    			<div className={style.banner}>
    				<img src={banner}  alt=""/>
    			</div>
    			<div className={style.conWrap}>
    			  <p className={style.tit}><img src={tit01} alt=""/></p>
    				<div className={style.sectionF}>
	    				<p className={style.conText}>红演圈投资，积极发现和挖掘文化演艺娱乐产业链上的优质企业项目，以股权投资为主要形式，建立更紧密的合作关系，推进彼此业务的共同发展。</p>
	    				<h3 className={style.conTextB}>目前，红演圈科技已成功参投10个项目 </h3>
							<dl className={style.left}>
	    					<dt>
	    					  <img src={showImg01} alt=""/>
	    					</dt>
	    					<dd>
	    						<p>2016年</p>
	    						<p>2016年，与知名影视企业新媒诚品（股票代码：834522）合作，联合投资影游IP交易平台［红贩］，于2017年3月被万达文化全资收购</p>
	    					</dd>
	    				</dl>
	    				<dl className={style.right}>
							<dt>
							  <img src={showImg02} alt=""/>
							</dt>
							<dd>
								<p>2016年</p>
								<p>2016年，投资并联合出品网络大电影《死神的假期》，腾讯视频独播点击量超过四千万，半年投资回报率210%</p>
							</dd>
						</dl>
						<dl className={style.left}>
						     <dt>
							  <img src={showImg03} alt=""/>
							</dt>
							<dd>
								<p>2016年</p>
								<p>2016年，联合洪泰创新空间合作，大姨妈和赛马资本共同投资［创创帮］洪泰酒仙桥创新创业孵化器</p>
							</dd>
						</dl>
						<dl className={style.right}>
							<dt>
							  <img src={showImg04} alt=""/>
							</dt>
							<dd>
								<p>2016年</p>
								<p>2016年，与乐童网合作，投资音乐厂牌［乐空间］</p>
							</dd>
						</dl>
						<dl className={style.left}>
							<dt>
							  <img src={showImg05} alt="" />
							</dt>
							<dd>
								<p>2016年</p>
								<p>2016年，与北京电影学院合作，投资［电影故事餐吧］</p>
							</dd>
						</dl>
						<dl className={style.right}>
							<dt>
							  <img src={showImg06} alt=""/>
							</dt>
							<dd>
								<p>2017年</p>
								<p>2017年，与知名3D公司泊渊鑫利（APEC元首帆船、天安门大花篮制作商)共同投资开发［3D照相馆］，一拍就成像的3D</p>
							</dd>
						</dl>
						<dl className={style.left}>
						<dt >
							  <img src={showImg07} alt=""/>
							</dt>
							<dd>
								<p>2017年</p>
								<p>2017年，投资浙江新芸科技，打造选秀赛事网络服务平台</p>
							</dd>
						</dl>
						<dl className={style.right}>
							<dt>
							  <img src={showImg08} alt=""/>
							</dt>
							<dd>
								<p>2017年</p>
								<p>2017年，投资并联合出品话剧、网络大电影《你是我的魂斗罗》，将于2018年1月在爱奇艺开播</p>
							</dd>
						</dl>
						<dl className={style.left}>
						<dt >
						  <img src={showImg09} alt=""/>
						</dt>
						<dd>
							<p>2018年</p>
							<p>2018年，投资精彩时代（北京）国际科技发展有限公司，布局艺人线下商铺广告推广市场</p>
						</dd>
					</dl>
					<dl className={style.right}>
						<dt>
						  <img src={showImg10} alt="" />
						</dt>
						<dd>
							<p>2018年</p>
							<p>2018年，联合陈式太极第十九代大师朱天才，证大集团董事长戴志康，投资上海《无极馆》项目，打造太极网红，弘扬太极文化</p>
						</dd>
					</dl>
    				</div>
					<div className={style.sectionS}>
						<p className={style.tit}><img src={tit02} alt="" /></p>
						<ul>
							<li>
								<img src={domain01} alt=""/>
								<i></i>
								<div>
									<img src={showImg19} alt=""/>
									<h4>影视剧</h4>
									<p>参投电视剧，电影，网大，网综全品类影视剧</p>
								</div>
							</li>
							<li>
								<img src={domain02} alt=""/>
								<i></i>
								<div>
									<img src={showImg20} alt=""/>
									<h4>模特赛事</h4>
									<p>参投多项世界顶级模特赛事</p>
								</div>
							</li>
							<li>
								<img src={domain03} alt=""/>
								<i></i>
								<div>
									<img src={showImg21} alt=""/>
									<h4>综艺节目</h4>
									<p>参投众多爆火综艺节目</p>
								</div>
							</li>
							<li>
								<img src={domain04} alt=""/>
								<i></i>
								<div>
									<img src={showImg22} alt=""/>
									<h4>艺术培训</h4>
									<p>参投机构培养数万亿人，直接输送至演艺圈</p>
								</div>
							</li>
							<li>
								<img src={domain05} alt=""/>
								<i></i>
								<div>
									<img src={showImg23} alt=""/>
									<h4>主持人大赛</h4>
									<p>赞助 / 主办多个国家级主持人大赛</p>
								</div>
							</li>
							<li>
								<img src={domain06} alt=""/>
								<i></i>
								<div>
									<img src={showImg24} alt=""/>
									<h4>网红项目</h4>
									<p>(直播)行业高峰论坛等多个权威直播项目</p>
								</div>
							</li>
							<li>
								<img src={domain07} alt=""/>
								<i></i>
								<div>
									<img src={showImg25} alt=""/>
									<h4>少儿节目</h4>
									<p>赞助金鹰卡通卫视多档优质少儿节目，成为唯一指定报名APP</p>
								</div>
							</li>
							<li>
								<img src={domain08} alt=""/>
								<i></i>
								<div>
									<img src={showImg26} alt=""/>
									<h4>其他项目</h4>
									<p>歌唱,选秀，礼仪，校园项目等</p>
								</div>
							</li>
							
							
						</ul>
					
					</div>
    				
    				
    			</div>
    		</div>
	    </div>
    )
  }
  
  
}

export default  Invest