import React, { Component } from 'react'
import team1 from './img/team1.png'
import team2 from './img/team2.png'
import team3 from './img/team3.png'
import team4 from './img/team4.png'
import team5 from './img/team5.png'
import team6 from './img/team6.png'
import team7 from './img/team7.png'
import team8 from './img/team8.png'
import team9 from './img/team9.png'
import team10 from './img/team10.png'
import team11 from './img/team11.png'
import team12 from './img/team12.png'
import team13 from './img/team13.png'
import team14 from './img/team14.png'
import team15 from './img/team15.png'

class TeamIntroduction extends Component {
  render() {
		const style = require('./about_team.scss')
    return (
      <div className={style.teamIntroduction}>
					<dl>
						<dt>
      				<img src={team1} alt="" />					
						</dt>
						<dd>
							<h3>鲍啸峰 / <span>创始人、董事长&党支部书记</span></h3>
							<p>中共党员，浙江宁波人，连续创业者，曾参与创办全国青少年成长励志营、君和天下知识产权，2014年创立红演圈科技。曾获2008年北京市大学生创业典型，2015年第二届首都青年创新创业大赛第二名、最佳人气奖、2015年第二届全国青年创新创业大赛银奖和北京市“四个一批”文化经营管理人才等荣誉。</p>
							<h5>社会兼职:</h5>
							<p>北京市朝阳区政协委员、北京市青年联合会委员、北京市宁波商会常务副会长、首都文化产业协会常务理事、北京市朝阳区工商联青年专委会副主任、团中央中国校园市场联盟席主席、文化部中国演出行业协会副会长、文化部中国文化娱乐行业协会理事</p>
						</dd>
					</dl>
					<dl>
						<dt>
      				<img src={team2} alt=""  />									
								
						</dt>
						<dd>
							<h3>姜海 / <span>联合创始人&CEO</span></h3>
							<p>中国农业大学管理学士，参与创办音乐网站ting365.com；投资创立闪客帝国，君和天下知识产权等。超过20年文化创意与互联网行业从业经验。曾获“北京市文化创意产业年度青年人物”、“北京市朝阳区文化创意产业十大精英”等荣誉。</p>
							<h5>社会兼职:</h5>
							<p>中国校园市场联盟联席主席、中国演出行业协会网络表演（直播）分会副会长、文化部国家网络文化标准化委员会委员</p>
						</dd>

					</dl>
					<dl>
						<dt>
      				<img src={team3} alt="" />									
								
						</dt>
						<dd>
							<h3>徐公美 / <span>联合创始人、投资总裁&CFO</span></h3>
							<p className={style.pTop}>上海财经大学管理学（国际会计）学士学位，英国杜伦大学金融学硕士学位，以及芝加哥大学布斯商学院工商管理硕士学位（M.B.A）</p>
							<p>曾担任香港建银国际资产管理有限公司直接投资部副总裁，阿里巴巴影业集团投资总监，拥有10年私募股权和创业投资的经验，多家公司成功登陆资本市场，包括美国、香港和 A股市场。领导的投资项目包括：蚂蚁金服、滴滴出行、京东商城、大疆创新科技、博纳影业、Lyft，以及TicketNew等。</p>
						</dd>
					</dl>
      		<ul className={style.staffBox}>
      				
							<li>
								<div className={style.imgWrap}>
      						<img src={team4} alt=""  />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>王朝 / <span>副总裁&红演圈TV总经理</span></h3>
	      						<p>中国民主建国会会员、毕业于UIBE，连续创业者，创业是一种心态，我一直在路上。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team5} alt="" />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>史佳 / <span>总裁办公室主任</span></h3>
	      						<p>中国传媒大学播音与主持专业，国际艺术市场MBA。前新华社主持人、驻外记者，资深媒体人。擅长多元文化中的沟通与交流。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team6} alt="" />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>杨程杰 / <span>演艺商城事业部总监</span></h3>
	      						<p>中共党员，现任演艺商城事业部总监，负责演艺服务供应商入驻、店铺管理及运营工作。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team7} alt=""  />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>臧大军 / <span>客户端总监</span></h3>
	      						<p>毕业于北华航天工业学院，计算机应用技术专业，2年互联网经验，5年移动互联网经验，涉猎餐饮、社交、电商等多领域。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team8} alt=""  />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>张利军 / <span>服务端总监</span></h3>
	      						<p>山东烟台人，2007年毕业于中国农业大学。先后从事过.net和Java方面的研发工作，拥有10年的一线研发经验。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team9} alt=""  />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>文学 / <span>测试总监</span></h3>
	      						<p>7年测试与管理工作经历，对前端后端测试工作有着丰富经验，对软件生命周期有着深刻的理解，以持续探索不断提升自我为目标。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team10} alt="" />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>于美伶 / <span>产品设计总监</span></h3>
	      						<p>4年产品经理工作经验,先后从事O2O与电商行业,思维清晰,逻辑性强。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team11} alt="" />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>李娟 / <span>app资源管理总监</span></h3>
	      						<p>红演圈App产品运营，红演圈App创始团队成员，5年互联网从业经验，参与亚洲超模大赛、瑞丽模特大赛、红鹰奖多个活动的运营工作。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team12} alt="" />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>李正湫 / <span>红人事业部总监</span></h3>
	      						<p>先后供职于清华大学出版社、磨铁集团、喜马拉雅FM，担任高级策划、主编等职务。涵盖领域包括:互联网媒体和影视、内容出版、文化娱乐。 </p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team13} alt="" />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>齐海瑞 / <span>TV编导</span></h3>
	      						<p>毕业于内蒙古大学播音与主持艺术专业，前内蒙古电视台《美食美客》栏目导演，阿里健康《麻辣医生》直播节目总导演。</p>
	      				</div>
      				</li>
							<li>
								<div className={style.imgWrap}>
      						<img src={team15} alt="" />									
								</div>
	      				<div className={style.stafftxt}>
	      						<h3>宋超 / <span>Casting总监</span></h3>
	      						<p>毕业于北京联合大学，先后谈下《中国有嘻哈》、《欢乐英雄》、等众多影视IP，筹备策划“优酷Hit Hot”、“China show”等线下活动</p>
	      				</div>
      				</li>
							
      		</ul>
					<div className={style.imgBox}>
							<img src={team14} alt=""/>
							<p>不忘初心，牢记使命，2018我们要再接再厉！</p>
					</div>
      </div>
    )
  }
}

export default TeamIntroduction
