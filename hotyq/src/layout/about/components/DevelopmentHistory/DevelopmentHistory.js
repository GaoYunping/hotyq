import React, { Component } from 'react';

class DevelopmentHistory extends Component {
	constructor(props){
		super(props);
		this.state ={
		current:0,
		yearly:[
			[
				{
					img:global.imgUrl+"/joinUs/2017-12.png",
					time:"12月",
					messages:"红演圈独家签约湖南卫视金鹰卡通三档栏目《童心撞地球》、《龙的传人》、《中国新声代》。"
				},
				{
					img:global.imgUrl+"/joinUs/2017-11.png",
					time:"11月",
					messages:"红演圈TV联合多个品牌，在双十一期间推出超过20期网络直播节目。"
				},
				{
					img:global.imgUrl+"/joinUs/2017-9.png",
					time:"09月",
					messages:"红演圈科技获得证大集团A轮融资。"
				},
				{
					img:global.imgUrl+"/joinUs/2017-8.png",
					time:"08月",
					messages:"由《武林外传》导演尚敬执导的情景剧大戏《欢乐英雄》在红演圈App启动全角色招募。"
				},
				{
					img:global.imgUrl+"/joinUs/2017-7.png",
					time:"07月",
					messages:"第15届chinaJoy，红演圈联合汉威信恒推齣国内首个直播行业大奖“eLive红鹰奖”并成功举办颁奖盛典。"
				},
				{
					img:global.imgUrl+"/joinUs/2017-6.png",
					time:"06月",
					messages:"红演圈TV合作品牌数量突破50，联想、阿迪达斯、张裕葡萄酒、Bose、ONLY等知名品牌纷纷加入。"
				},
				{
					img:global.imgUrl+"/joinUs/2017-5.png",
					time:"05月",
					messages:"中国演出行业协会网络表演（直播）分会正式成立，红演圈科技与欢聚时代（YY直播）花椒、映客、微博、腾讯、熊猫、一直播等9家机构成为会长/副会长单位。"
				},
				{
					img:global.imgUrl+"/joinUs/2017-3.png",
					time:"03月",
					messages:"与清华大学双创街签约达成战略合作，共同落地文艺人才创业服务。"
				},
				
				{
					img:global.imgUrl+"/joinUs/2017-2.png",
					time:"02月",
					messages:"红演圈科技与中国演出行业协会签约达成战略合作伙伴关系，联合推出中国演艺人才招聘会项目"
				},
				{
					img:global.imgUrl+"/joinUs/2017-1.png",
					time:"01月",
					messages:"红演圈TV携手京东、淘宝平台，推出《京咯隆咚强》、《夜谈食记》多档网络直播节目，最高单期播放量10万＋。"
				}
			],
			[
				{
					img:global.imgUrl+"/joinUs/2016-12.png",
					time:"12月",
					messages:"酒仙桥街道工委红演圈科技党支部、团支部、工会正式成立。"
				},
				{
					img:global.imgUrl+"/joinUs/2016-10.png",
					time:"10月",
					messages:"与北京电影学院（北京）培训中心签约战略合作。"
				},
				{
					img:global.imgUrl+"/joinUs/2016-9.png",
					time:"09月",
					messages:"签约韩国最大练习生培训机构Global K Center，为红演圈App用户对接最优质的演艺培训服务。"
				},
				{
					img:global.imgUrl+"/joinUs/2016-6.png",
					time:"06月",
					messages:"第十二届瑞丽模特大赛为红演圈App注册用户开辟绿色通道。"
				},
				{
					img:global.imgUrl+"/joinUs/2016-5.png",
					time:"05月",
					messages:"红演圈TV业务正式启动。"
				},
				{
					img:global.imgUrl+"/joinUs/2016-4.png",
					time:"04月",
					messages:"在团中央支持下，由新浪微博、支付宝、猎聘以及红演圈科技等十家单位发起成立中国校园市场联盟，红演圈科技出任中国校园市场联盟联席主席。"
				},
				
				{
					img:global.imgUrl+"/joinUs/2016-2.png",
					time:"02月",
					messages:"红演圈App联合微博校园、腾讯视频等多家企业，推出国内首个校园艺人排行榜，活动覆盖600所高校10000名校园艺人，获得2016金塔奖－优秀校园市场案例奖。"
				},
				{
					img:global.imgUrl+"/joinUs/2016-1.png",
					time:"01月",
					messages:"红演圈科技获得赛马资本PreA轮投资。"
				}
			],
			[
				{
					img:global.imgUrl+"/joinUs/2015-10.png",
					time:"10月",
					messages:"世界超模中国赛选择红演圈App作为官方指定报名平台。"
				},
				{
					img:global.imgUrl+"/joinUs/2015-9.png",
					time:"09月",
					messages:"拥有27届历史的ATV2015亚洲小姐中国内地网络海选指定红演圈App作为独家官方合作报名平台。"
				},
				{
					img:global.imgUrl+"/joinUs/2015-8.png",
					time:"08月",
					messages:"红演圈科技联合ChinaJoy主办方汉威信恒举办2015 China Showgirl网络海选暨年度盛典活动，成为在红演圈发布的第一个大型全国网络海选活动，千余名showgirl下载红演圈App报名，数百万网友参与。"
				},
				{
					img:global.imgUrl+"/joinUs/2015-5.png",
					time:"05月",
					messages:"红演圈App1.0正式在各大应用市场上线发布。"
				},
				{
					img:global.imgUrl+"/joinUs/2015-4.png",
					time:"04月",
					messages:"红演圈科技获得海通证券天使投资。"
				}
			],
			[
				{
					img:global.imgUrl+"/joinUs/2014-10.png",
					time:"10月",
					messages:"鲍啸峰、姜海军筹资创立红演圈科技。"
				}
			]
		]
		}
		this.handleClick = this.handleClick.bind(this)
	
	}
	handleClick(ev){
		let {current}=this.state;
		current=ev.target.getAttribute("data-index");
    this.setState({ current});
	
  }
	
  render() {
		const style = require ("./history.scss")
			
		let {handleClick}=this
		let {current,yearly} =this.state;
			
    return (
       <div className={style.wrap}>
				<ul className={style.annual}>
					<li data-index="0" className={current === 0 ? style.annualActive : ''} onClick={handleClick}>{2017}</li>
					<li data-index="1" className={current === 1 ? style.annualActive : ''} onClick={handleClick}>{2016}</li>
					<li data-index="2" className={current === 2 ? style.annualActive : ''} onClick={handleClick}>{2015}</li>
					<li data-index="3" className={current === 3 ? style.annualActive : ''} onClick={handleClick}>{2014}</li>
				</ul>
				<div className={style.content}>
				<div className={style.course}>
					{ yearly[current].map(

						(item,index)=><dl key={index}>
							<dt>
								<img src={item.img} alt=""/>
								<div>
									<span></span>
									<p></p>
								</div>
							</dt>
							<dd>
								<span>{item.time}</span>
								<p>{item.messages}</p>
							</dd>
						</dl>) }
						
				</div>
					
				</div>
				
			</div>
    )
  }
 
}

export default  DevelopmentHistory
