import React, { Component } from 'react';
import { NavLink ,Route} from 'react-router-dom';
import { Switch } from "react-router"
import banner from './img/j_banner.jpg';
import screen1_title from './img/j_screen1_title.png';
import screen2_title from './img/j_screen2_title.png';
import screen3_title from './img/j_screen3_title.png';
import screen4_title from './img/j_screen4_title.png';
import screen4_1 from './img/j_screen4_1.png';
import hotyq_logo from './img/j_hotyq_logo.png';
import jd_logo from './img/j_jd_logo.png';
import fish from './img/j_fish.png';
import chicken from './img/j_chicken.png';

import Wine from "./components/Wine/Wine"
import Tea from "./components/Tea/Tea"

class Jgldq extends Component {
  render() {
  	const style =require('./jgldq.scss') ;
    return (
      <div className={style.jgldq}>
      	<img className={style.banner} alt="" src={banner} />
      	<div className={style.screen1}>
      		<div className={style.title}>
      			<img src={screen1_title} alt="" />
      		</div>
      		<div className={style.content}>
      			<div>
      				<div>
      					<img className={style.fish} src={fish} alt="" />
      					<img className={style.chicken} src={chicken} alt="" />
      					<p><span>节目名称：</span><span>京咯隆东强</span></p>
      					<p><span>直播平台：</span><span>京东</span></p>
      					<p><span>直播时间：</span><span>每周五20:00</span></p>
      					<p><span>节目时长：</span><span>100分钟</span></p>
      					<p><span>节目介绍：</span><span>由红演圈投资制作，携手京东直播，强强联手打造国内首档电商平台互动谈话类网络直播节目。将综艺节目形式与网络直播导购相融合，极大提高品牌曝光量，同时拉动产品销售额。</span></p>
      				</div>
      			</div>
      		</div>
      	</div>
      	<div className={style.screen2}>
      		<div className={style.title}>
      			<img src={screen2_title} alt="" />
      		</div>
      		<div className={style.content}>
						<div className={style.nav}>
							<NavLink exact to='/jgldq/wine' activeClassName={style.activeNav} >
								<p>第一期  &nbsp;#酒逢知己 千杯不醉#</p>
							</NavLink>
							<NavLink exact to='/jgldq/tea' activeClassName={style.activeNav}>
								<p>第二期  &nbsp;#论三茶六礼 品百味人生#</p>
							</NavLink>
						</div>

						<Switch>
							<Route exact path='/jgldq/wine' component={Wine}/>
							<Route exact path='/jgldq/tea' component={Tea}/>
							
							
						</Switch>


      		</div>
      	</div>
      	<div className={style.screen3}>
      		<div className={style.title}>
      			<img src={screen3_title} alt="" />
      		</div>
      		<div className={style.content}>
      			<div className={`${style.jgldqContent} ${style.screen3Content}`}>
      				<div>
      					<img src={hotyq_logo} alt="" />
      					<p>红演圈App是为演艺从业人员服务的信息平台，为影视、音乐、模特、网红、主播、舞蹈、戏剧、主持、综艺、幕后、文体培训等全品类演艺人员提供日常所需的职业信息类服务，包含通告、人脉、培训、美容整形、服装租赁等；也为各类机构提供艺人招聘发布服务。红演圈致力于发展成为亚洲最大的文化演艺娱乐人力资源供应商。</p>
      				</div>
      			</div>
      			<div className={`${style.jgldqContent} ${style.screen3Content}`}>
      				<div>
      					<img src={jd_logo} alt="" />
      					<p>京东（JD）是中国最大的自营式电商企业。2014年5月，在美国纳斯达克证券交易所正式挂牌上市（股票代码：JD），是中国第一个成功赴美上市的大型综合型电商平台，与腾讯、百度等中国互联网巨头共同跻身全球前十大互联网公司排行榜。京东直播于2016年9月上线，并在京东商城首页有醒目入口。</p>
      				</div>
      			</div>
      		</div>
      	</div>
      	<div className={style.screen4}>
      		<div className={style.title}>
      			<img src={screen4_title} alt="" />
      		</div>
      		<div className={style.content}>
      			<div className={`${style.jgldqContent} ${style.screen4Content}`}>
      				<div>
      					<img src={screen4_1} alt="" />
      				</div>
      			</div>
      		</div>
      	</div>
      	
      </div>
    )
  }
 
}
export default Jgldq