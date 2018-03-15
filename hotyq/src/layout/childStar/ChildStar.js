import React, {Component} from 'react'
class ChildStar extends Component {
		constructor (props) {
			super(props)
			this.state={
				columnData:[
					{
						img:require("./img/01.png"),
						station:"中国教育电视台",
						program:"《小小演说家》"
					},
					{
						img:require("./img/02.png"),
						station:"中国教育电视台",
						program:"《最强小孩》"
					},
					{
						img:require("./img/03.png"),
						station:"中国教育电视台",
						program:"《国学小课堂》"
					},
					{
						img:require("./img/04.png"),
						station:"BTV卡酷少儿",
						program:"《大玩家》"
					},
					{
						img:require("./img/05.png"),
						station:"BTV卡酷少儿",
						program:"《卡酷幼儿园》"
					},
					{
						img:require("./img/06.png"),
						station:"BTV卡酷少儿",
						program:"《闪天下》"
					},
					{
						img:require("./img/07.png"),
						station:"BTV卡酷少儿",
						program:"《剧星派》"
					},
					{
						img:require("./img/08.png"),
						station:"BTV卡酷少儿",
						program:"《爱上博物馆》"
					},
					{
						img:require("./img/09.png"),
						station:"BTV卡酷少儿",
						program:"《七色光》"
					},
					{
						img:require("./img/10.png"),
						station:"湖南卫视金鹰卡通",
						program:"《童心撞地球》"
					},
					{
						img:require("./img/11.png"),
						station:"湖南卫视金鹰卡通",
						program:"《龙的传人》"
					},
					{
						img:require("./img/12.png"),
						station:"湖南卫视金鹰卡通",
						program:"《中国新声代》"
					},
					{
						img:require("./img/13.png"),
						station:"湖南卫视金鹰卡通",
						program:"《爱上幼儿园》"
					},
					{
						img:require("./img/14.png"),
						station:"湖南卫视金鹰卡通",
						program:"《玩名堂》"
					},
					{
						img:require("./img/15.png"),
						station:"湖南卫视金鹰卡通",
						program:"《飞行幼乐园》"
					},
					{
						img:require("./img/16.png"),
						station:"浙江卫视",
						program:"《汉字风云会》"
					},
					{
						img:require("./img/17.png"),
						station:"浙江卫视",
						program:"《向上吧！诗词》"
					},
					{
						img:require("./img/18.png"),
						station:"浙江卫视",
						program:"《中华好故事》"
					},
					{
						img:require("./img/19.png"),
						station:"安徽卫视",
						program:"《小孩很忙》"
					},
					{
						img:require("./img/20.png"),
						station:"江苏卫视",
						program:"《说吧孩子》"
					},
					{
						img:require("./img/21.png"),
						station:"东方卫视",
						program:"《潮童天下》"
					},
					{
						img:require("./img/22.png"),
						station:"东方卫视",
						program:"《荧星梦工厂》"
					},
					{
						img:require("./img/23.png"),
						station:"东方卫视",
						program:"《欢乐搜索线》"
					},
					{
						img:require("./img/24.png"),
						station:"东方卫视",
						program:"《哈哈小店》"
					},
					{
						img:require("./img/25.png"),
						station:"东方卫视",
						program:"《欢乐蹦蹦跳》"
					},
					{
						img:require("./img/26.png"),
						station:"爱奇艺自制儿童综艺",
						program:"《看到这朵小花没》"
					},
					{
						img:require("./img/27.png"),
						station:"爱奇艺自制儿童综艺",
						program:"《了不起的孩子》"
					}
				]


			}

		}
		
		render() {
				const style = require("./ChildStar.scss")
				let {columnData}=this.state;
				return (
						<div>
								<div className={style.containWrap}>
										<div className={style.childStarWrap}>
												<div className={style.childStarHead}>
													{/* <img src={childStarHead} alt=""/> */}
												</div>
												<div className={style.childStarMiddle} >
													<ul className={style.childStarList} >
														{columnData.map(function(item,index){
																return(
																	<li key={index} className={style.childStarItem} >
																		<div className={style.imgWrap} >
																		<img src={item.img} alt=""/>
																		</div>
																		<div className={style.textWrap}>
																			<p>{item.station}</p>
																			<p>{item.program}</p>
																		</div>
																	</li>
																)
															})
														}
													</ul>
												</div>
												<div className={style.childStarBase} >
												</div>

										</div>

										
								</div>
						</div>
				)
		}

}

export default ChildStar