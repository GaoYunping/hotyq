import React, { Component } from 'react'
import img01 from "./img/join_us.png"
import lgw from "./img/joinus_10.png"
import zlzpw from "./img/joinus_11.png"
import img02 from './img/JOIN_USpos.png'


class JoinUs extends Component {
  render() {
		const style = require('./about_joinus.scss')
    return (
      <div className={style.joinUs}>
      		<div className={style.imgList}>
      			<img src={img01} alt=""  />
						<div className={style.imgP}>
							<img src={img02} alt=""/>
						</div>
      		</div>

					<div className={style.textWrap}>
						<div className={ style.textLeft}>
							<p>我们正在寻找这样的你:热爱祖国，热爱文化演艺娱乐产业，对生活有热情，对事业有理想，经验丰富，拥有一颗永远年轻的心。</p>
							<p>加入我们，你会发现:在这里，有一群能嗨，敢拼的小伙伴相互学习，一起成长;</p>
							<p>在这里，每个人都会尽力燃烧自己的小宇宙，让我们的大集体变得更加不可思议。</p>
							<p>在这里，每天都会经历着工作生活的丰富多彩，每天都在和小伙伴们一起实现新的突破！</p>
							<p>来吧，加入红演圈，让我们一起成就梦想。</p>
							<p>简历投递至 : hr@hotyq.com</p>
						</div>
						<div className={ style.textRight}>
							<h4>具体岗位要求请点击这里</h4>
								<a href="https://www.lagou.com/gongsi/47523.html" target='_blank' rel="noopener" ><img src={lgw} alt="" /></a>
								<a href="http://company.zhaopin.com/CC208309383.htm" target='_blank' rel="noopener"><img src={zlzpw} alt="" /></a>
						</div>
					</div>
      		
        
      </div>
    )
  }
  
  
  
}

export default JoinUs
