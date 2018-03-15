import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'


class Declare extends Component {
  render() {
	const style =require('./declare.scss')
    return (
    	<div>
	      <div>
	         <div className={style.declareWrap}>
			        <div className={style.breadNav}>
			            <NavLink to="/">首页</NavLink>
			            <span className={style.jt}>&nbsp;>&nbsp;</span>
			            <span>版权声明</span>
			        </div>
			        <div className={style.aboutCon}>
			            <h3>版权声明</h3>
			            <p className={style.crTxt}>1.红演圈网站及App对其发行的或与合作公司共同发行的，包括但不限于网站及App的产品和服务的全部内容，拥有知识产权，受法律保护。</p>
			            <p className={style.crTxt}>2.未经本公司书面许可，任何单位及个人不得以任何方式或理由，对红演圈网站及App原创的文字、图片、视频等材料的任何部分，进行使用、复制、修改、抄录、传播或与其它产品捆绑使用、销售。</p>
			            <p className={style.crTxt}>3.所有用户上传的资料，如侵犯第三方知识产权，请及时与我们联系，我们将在三个工作日内删除相关内容。</p>
			            <p className={style.crTxt}>4.凡侵犯本公司知识产权的，本公司必依法追究其法律责任。</p>
			            <p className={style.crTxt}>5.凡以任何方式登录本网站或直接、间接使用本网站资料者，视为自愿接受本网站声明的约束。</p>
			            <p className={style.crTxt}>6.本声明未涉及的其他问题请参见国家相关法律法规。</p>
			            <p className={style.cr2Txt}>侵权投诉邮箱：kf@hotyq.com</p>
			            <p className={style.crTxt}>侵权投诉 QQ：2284680653-</p>
			        </div>
			        <div className={style.line}></div>
			    </div>
	      </div>
	    </div>
    )
  }
  
  
}

export default Declare