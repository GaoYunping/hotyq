import React, {Component} from "react";
class Casting extends Component {
		constructor(props) {
				super(props);
				this.state = {
						directorData: [
								{
										img:require("./img/01.png"),
										name: "公钰涵",
										works: ["代表作品《如懿传》《武动乾坤》《斗破苍穹》", "《凉生，我们可不可以不忧伤》"]
								}, {
										img: require("./img/02.png"),
										name: "郝峰",
										works: ["代表作品《鸡毛飞上天》《父子雄兵》《独立纵队》《风语》《兵变1929》"]
								}, {
										img: require("./img/03.png"),
										name: "黄涛",
										works: ["代表作品《羞羞的铁拳》《夏洛特烦恼》《春风十里不如你》《失恋33天》《手机》"]
								}, {
										img: require("./img/04.png"),
										name: "孟飞",
										works: ["代表作品《北京爱情故事》《何以笙箫默》"]
								}, {
										img: require("./img/05.png"),
										name: "马季",
										works: ["代表作品《过渡空间》《东山晴后雪》《惊天岳雷》《封神》", "《抗倭英雄戚继光》"]
								}, {
										img: require("./img/06.png"),
										name: "苏德明",
										works: ["代表作品《鬼吹灯之黄皮子坟》《凤唳九天》"]
								}, {
										img: require("./img/07.png"),
										name: "苏一",
										works: ["代表作品《一见不倾心》《锦绣未央》《孤芳不自赏》《长江往事》"]
								}, {
										img: require("./img/08.png"),
										name: "魏天赐",
										works: ["代表作品《幻城》《特工皇妃之楚乔传》《这个世界不看脸》"]
								}, {
										img: require("./img/09.png"),
										name: "宗广明",
										works: ["代表作品电视剧《勇敢的心》电影《巨齿鲨》"]
								}
						],
						directorData1: {
								name: [
										'孟   飞',
										'苏   一',
										'魏   伟',
										'宗广明',
										'安文祥',
										'魏天赐',
										'崔   强',
										'李林燚',
										'刘   欢',
										'钱多多',
										'小林子',
										'马雪源',
										'公钰涵',
										'张   震',
										'黄   涛',
										'朱星宇',
										'孟繁龙',
										'欧   阳',
										'姜一帆',
										'郝   峰',
										'刘明玉',
										'慕容金超',
										'卢   勇',
										'苏德明',
										'军   军',
										'马   季',
										'张笑菲',
										'沈   潇',
										'温   迪',
										'刘   芳',
										'王清亭',
										'韩   风'
								],
								production: [
										'《橙红年代》',
										'《锦绣未央》',
										'《欢乐颂》	',
										'《勇敢的心》',
										'《伪装者》',
										'《特工皇妃楚乔传》',
										'《何以笙箫默》',
										'《北京爱情故事》',
										'《外科风云》',
										'《海上嫁女记》',
										'《柒个我》',
										'《霍去病》',
										'《一仆二主》',
										'《猎场》',
										'《春风十里不如你》',
										'《孤芳不自赏》',
										'《幸福归来》',
										'《进击吧、闪电》',
										'《浪花一朵朵》',
										'《独立纵队》',
										'《谢文东之王者归来》',
										'《花谢花飞花满天》',
										'《你好、旧时光》',
										'《鬼吹灯之黄皮子坟》',
										'《一吻不定情》',
										'《东山晴后雪》',
										'《超能太监3》',
										'《暧昧侦探》',
										'《重明卫》',
										'《全民目击》',
										'《恋爱教父》',
										'《印度神游》'
								],
								genre: [
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'电视剧',
										'网剧',
										'网剧',
										'网剧',
										'网剧',
										'网剧',
										'网剧',
										'网剧',
										'电影',
										'电影',
										'电影'
								],
								director: [
										'刘新',
										'李慧珠',
										'孔笙  简川訸',
										'刘礴',
										'李雪',
										'吴锦源',
										'刘俊杰',
										'陈思成 刘凯',
										'李雪',
										' 林黎胜 黄永刚',
										'邓科',
										'张健',
										'刘进',
										'姜伟 付玮',
										'马进',
										'鞠觉亮',
										'沈怡 丁仰国',
										'张孝正',
										'常晓阳',
										'王响伟',
										'林弢 胡宗祥',
										'赖水清',
										'沙漠',
										'管虎',
										'张博维',
										'刘方 欧凡',
										'焦洋',
										'喻瀚湫',
										'闫乐阳',
										'非行',
										'周智勇',
										'张建亚'
								],
								actor: [
										'陈伟霆、马思纯、叶祖新',
										'唐嫣、罗晋、吴建豪',
										'刘涛、蒋欣、王子文、杨紫、乔欣、祖峰、王凯、靳东',
										'杨志刚、于毅、张少华、杜若溪',
										'胡歌、靳东、刘敏涛、王凯',
										'赵丽颖、林更新、窦骁、李沁、邓伦、金士杰',
										'钟汉良、唐嫣、谭凯、杨玏',
										'陈思成、佟丽娅、杨幂、张歆艺、李晨、张译',
										'靳东、 白百合、李佳航、刘奕君、蓝盈莹',
										'蔡少芬、王雷、张檬、樊霖锋、李心艾',
										'张一山、蔡文静、张晓谦、高泰宇、范梦、张双利',
										'张若昀、毛晓彤、白宇、于朦胧',
										'张嘉译、闫妮、江疏影、关晓彤',
										'胡歌、菅纫姿、陈龙、万茜、李强、章龄之、胡兵、柯蓝、徐阁',
										'周冬雨、张一山、齐溪、陈奕龙、尤靖茹、魏健隆',
										'Angelababy、钟汉良',
										'李沁、吴卓羲、童苡萱、刘文治、杨雨婷、秦焰',
										'蒋劲夫，陈娅安',
										'王郑军、谭松韵、熊梓淇、黄圣池',
										'王新军、秦海璐、李彩桦、许明虎',
										'吴建国、贾琳、赵煜',
										'何润东、张馨予',
										'李兰迪、张新成',
										'阮经天、徐璐、郝好、刘潮、李玉洁',
										'（正在选角中）',
										'李溪芮、刘冬沁、崔绍涵',
										'彭禺厶、朱佳希、高成龙',
										'叶青、冉旭、邢恩',
										'（正在选角中）',
										'孙红雷、郭富城、余男',
										'明道、谢依霖、张檬、钱枫、应采儿',
										'王学兵、王双宝、潘斌龙'
								]
						}
				};
		}

		render() {
				const style = require("./casting.scss")
				let {directorData, directorData1} = this.state;
				return (
						<div>
								<div className={style.containWrap}>
										<div className={style.castingWrap}>
												<div className={style.castingLogo}></div>
												<div className={style.castingIntroduce}>
													<p>红演圈Casting，定位是“互联网+”、“大数据+”的演员选角统筹平台，它依托红演圈App演艺人才数据库，优化传统行业选角工作室的服务模式，最大程度的满足剧组用人方对选角工作的“精准角色推荐”、“杜绝片酬回扣”、“副导演随时更换”三大核心诉求。
													</p>
												</div>
												<div className={style.castingFeature}></div>

												<div className={style.castingRecommend}>
														<h2 className={style.recommendTitle}>红演圈casting-推荐副导演</h2>
														<div className={style.recommendContent}>
															{directorData.map(function (item, index) {
																return (<dl key={index}>
																				<dt>
																						<img src={item.img} alt=""/>
																				</dt>
																				<dd>
																						<h5>{item.name}</h5>
																						{item
																								.works
																								.map(function (item, index) {
																										return <p key={index}>{item}</p>;
																								})}
																				</dd>
																		</dl>
																)
															})}
														</div>
														<p className={style.recommendFooter}>
																（以上排名不分先后，按姓氏排列）
														</p>
												</div>
												<div className={style.castingDirector }>
														<h2 className={style.directorTitle}>红演圈casting-部分可选副导演</h2>
														<div className={style.directorContent}>
																<dl className={style.DirectorName}>
																		<dt>副导演</dt>
																		{directorData1.name.map((item, index) =><dd key={index}>{item}</dd>)}
																</dl>
																<dl className={style.worksName}>
																		<dt>作品</dt>
																		{directorData1.production.map((item, index) =><dd key = {index}>{item}</dd>)}
																</dl>
																<dl className={style.typeName}>
																		<dt>类型</dt>
																		{directorData1.genre.map((item, index) =><dd key = {index} > {item} </dd>)}
																</dl>
																<dl className={style.directName}>
																		<dt>导演</dt>
																		{directorData1.director.map((item, index) =><dd key = {index} > {item} </dd>)}
																</dl>
																<dl className={style.crewName}>
																		<dt>合作演员</dt>
																		{directorData1.actor.map((item, index) =><dd key = {index} > {item} </dd>)}
																</dl>

														</div>
												</div>
										</div>
								</div>
								
						</div>
				);
		}

		
}

export default  Casting;

 
