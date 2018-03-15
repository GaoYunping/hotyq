import React, { Component } from 'react';
import Swiper from "swiper"

class Food extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	visible:false
    }
    this.handleCancel = this.handleCancel.bind(this)
    this.playVideo = this.playVideo.bind(this)
  }
  playVideo(e){
  	// foodIntroduceYoukuplayer = new YKU.Player('foodIntroduceYoukuplayer',{
		// 	styleid: '0',
		// 	client_id: '320a457df632b818',
		// 	vid: 'XMjYxMjIyMzAzMg==',
		// 	autoplay:true
		// });
		document.getElementById('foodIntroduceYoukuplayer').style.zIndex=1;
		//foodIntroduceYoukuplayer.playVideo();
	}
  handleCancel(e) {
    this.setState({
      visible: false
    })
  }
  playFoodVideo(vid){
  	this.setState({
  		visible:true
  	})
		// foodYoukuPlayer = new YKU.Player('foodYoukuPlayer',{
		// 	styleid: '0',
		// 	client_id: '320a457df632b818',
		// 	vid: vid,
		// 	autoplay: true,
		// 	//newPlayer: true,
		// });
  }
	componentDidMount() {
		new Swiper('#foodSwiper', {
				navigation:{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				loop:true
		})
		new Swiper('#investmentSwiper', {
				navigation:{
					nextEl: '#investmentNextBtn',
					prevEl: '#investmentPrevBtn',
				},
				loop:true
		});
		
			
	}
	
  render() {
  	const  style = require("./food.scss")  ;
    return (
		<div className={style.food}>
			{/* <Modal title="Basic Modal" visible={this.state.visible} width={965} closable={true} wrapClassName='video-module'
				      onOk={this.handleOk} onCancel={this.handleCancel}>
					<div id={`foodYoukuPlayer`} style={{width:'100%',height:'100%'}}></div>
	    </Modal> */}
			<img className={style.banner} alt="" src={require('./img/food_banner.jpg')} />
			<div className={style.screen1}>
				<img className={style.title} src={require('./img/food_title1.png')} alt="" />
				<div className={style.content}>
					<img src={require('./img/food_screen1_left.jpg')} alt="" />
					<div className={style.line}></div>
					<div className={style.contentRight}>
						<p><span>节目名称：</span><span>夜谈食记</span></p>
						<p><span>直播平台：</span><span>淘宝直播</span></p>
  					<p><span>直播时间：</span><span>每晚22:00-23:00</span></p>
  					<p><span>节目形态：</span><span>美食制作真人秀＋深夜聚餐＋都市生活话题</span></p>
  					<p><span>节目介绍：</span><span>一档由美食厨师、美食KOL与网红达人一起在深夜开启的美食栏目。以生活、情感、 美食文化为话题，为大家制作心中最独特的菜品，向淘宝用户展示真正高品质的食材、美食、美    酒产品与生活方式。</span></p>
					</div>
				</div>
			</div>
			<div className={style.screen2}>
				<img className={style.title} alt="" src={require('./img/food_title2.png')} />
				<div className={style.content}>
					<img src={require('./img/food_screen2_left.png')} alt="" />
					<div className={style.contentRight}>
						<h4>已植入品牌：</h4>
						<p>泸州老窖、融氏玉米油、德庄火锅底料、辣妹子黄桃罐头、lerovole 红酒、红双喜电饼铛、MIA明星锅套装、rittersport巧克力、德普电器、丽贵小熊...</p>
						<h4>相关数据：</h4>
						<p>节目十期总观看量<span>29万+</span> 总评论量<span>8万+</span> ，点赞点赞<span>50万+</span>，最高峰值在线人数<span>11万</span>。</p>
						<p>店铺总访客数<span>102023</span>，店铺浏览量<span>199110</span>，支付买家<span>4512</span>，平均支付转化率<span>4.5%</span>，最高转化率<span>12%</span>。</p>
						<p>其中厨具用品店铺访客数较上个周期增长<span>57200%</span>，浏览量增长<span>15485%</span>，</p>
						<p>零食类店铺访客数较上个周期增长<span>4914%</span>，浏览量增长<span>4494%</span>，</p>
						<p>酒类店铺访客数较上个周期增长<span>3166%</span>，浏览量增长<span>5471%</span>。</p>
					</div>
				</div>
			</div>
			<div className={style.screen3}>
				<img className={style.title} src={require('./img/food_title3.png')} alt="" />
				<div className={style.content}>
					<div className={style.introduce}>
						<div className={`${style.introduceLeft} ${style.videoBox}`}>
								<div onClick={this.playVideo} className={style.videoMask}>
									<img className={style.play} src={require("./img/food_play.jpg")} alt="" />
								</div>
								<div className={style.video} id={`foodIntroduceYoukuplayer`}></div>
						</div>
						<div className={style.introduceRight}>
							<img src={require('./img/food_title8.png')} alt="" />
							<p>每日一个特色美食文化主题。</p>
							<p>主题将通过美食美酒、音乐、风俗等内容诠释；19道“每日风味”+8款主打菜+8款特色酒。夜谈食记将为用户每日带来一款特色风味，并常备8款主打菜和8款特色酒穿插在不同的主题节目中。为用户带来美食+故事的全新真人秀表现方式。</p>
							<p>展示特色食材独特的制作工艺及加工方式。</p>
							<p>融合具有特色的食材、佐料、餐具、粮油及茶酒等元素，为用户展示具有鲜明特色的制作及加工方式。</p>
							<p>Happy Supper Party</p>
						</div>
					</div>
					<div className={style.wonderful}>
						<img src={require('./img/food_title9.png')} alt="" />
						<div className={style.content}>
						
							<div className={`food-swiper-container`}>
									<div id='foodSwiper' className="swiper-container">
							        <div className="swiper-wrapper">
						            <div className="swiper-slide">
						            	<div className={style.itemList}>
						            		<div className={style.item} onClick={(vid) => {this.playFoodVideo('XMjYzNzU1MTQ1Ng==')}}>
							            		<img src={require('./img/food_video5.jpg')} alt="" />
							            		<p>第五期	你真的不懂爱＃炸鸡啤酒＃</p>
							            		<div className={style.swiperMask}>
							            			<img src={require("./img/food_play.jpg")} alt="" />
							            		</div>
							            	</div>
							            	<div className={style.item} onClick={(vid) => {this.playFoodVideo('XMjYzODY3NzM5Ng==')}}>
							            		<img src={require('./img/food_video6.jpg')} alt="" />
							            		<p>第六期	脱单的人没朋友＃川香小火锅＃</p>
							            		<div className={style.swiperMask}>
							            			<img src={require("./img/food_play.jpg")} alt="" />
							            		</div>
							            	</div>
							            	<div className={style.item} onClick={(vid) => {this.playFoodVideo('XMjYzODY3NzIyMA==')}}>
							            		<img src={require('./img/food_video7.jpg')} alt="" />
							            		<p>第七期	3分钟早餐＃云朵吐司＃</p>
							            		<div className={style.swiperMask}>
							            			<img src={require("./img/food_play.jpg")} alt="" />
							            		</div>
							            	</div>
							            	<div className={style.item} onClick={(vid) => {this.playFoodVideo('XMjYzNzU1Mjg0NA==')}}>
							            		<img src={require('./img/food_video8.jpg')} alt="" />
							            		<p>第八期	TGIF＃牛排＋罗勒意面＃</p>
							            		<div className={style.swiperMask}>
							            			<img src={require("./img/food_play.jpg")} alt="" />
							            		</div>
							            	</div>
							            	<div className={style.item} onClick={(vid) => {this.playFoodVideo('XMjYzNzU1Mjk1Mg==')}}>
							            		<img src={require('./img/food_video12.jpg')} alt="" />
							            		<p>第十二期	救救我的黑眼圈＃胡萝卜厚蛋烧＃</p>
							            		<div className={style.swiperMask}>
							            			<img src={require("./img/food_play.jpg")}  alt=""/>
							            		</div>
							            	</div>
						            	</div>
						            </div>
							           
							          <div className="swiper-slide">
							          	<div className={style.itemList}>
							          		<div className={style.item} onClick={(vid) => {this.playFoodVideo('XMjY0MjQ5NTEyMA==')}}>
							            		<img src={require('./img/food_video14.jpg')} alt=""/>
							            		<p>第十四期	电视剧黄金搭配＃蔓越莓饼干＃</p>
							            		<div className={style.swiperMask}>
							            			<img src={require("./img/food_play.jpg")} alt=""/>
							            		</div>
							            	</div>
							            	<div className={style.item} onClick={(vid) => {this.playFoodVideo('XMjY0MzA5MDQxMg==')}}>
							            		<img src={require('./img/food_video16.jpg')} alt=""/>
							            		<p>第十六期	外国周末吃什么＃相煎三文鱼土豆＃</p>
							            		<div className={style.swiperMask}>
							            			<img src={require("./img/food_play.jpg")} alt=""/>
							            		</div>
							            	</div>
							            	<div className={style.item} onClick={(vid) => {this.playFoodVideo('XMjYzODY3NjM5Ng==')}}>
							            		<img src={require('./img/food_video19.jpg')} alt=""/>
							            		<p>第十九期	吃肉也能瘦？＃红肉＋主食沙拉＃</p>
							            		<div className={style.swiperMask}>
							            			<img src={require("./img/food_play.jpg")} alt=""/>
							            		</div>
							            	</div>
							          	</div>
						            </div>
						            
							        </div>
							    </div>
							  <div id='foodNextBtn' className="swiper-button-next"></div>
								<div id='foodPrevBtn' className="swiper-button-prev"></div>
						  </div>
						</div>
					</div>
				</div>
			</div>
			
			<div className={style.screen4}>
				<img className={style.title} src={require('./img/food_title4.png')} alt="" />
				<div className={style.screen4Content}>
					<div className={style.lineBox}>
						<div className={style.screen4ContentItem}>
							<img src={require('./img/food_screen4_1.png')} alt="" /><br/>
							<span className={style.name}>王不凡</span><br/>
							<span className={style.infoTitle}>个性</span><br/>
							<span className={style.info}>风趣绅士、厨神</span><br/>
							<span className={style.infoTitle}>特技</span><br/>
							<span className={style.info}>电商购物专家、主持人</span><br/>
							<span className={style.infoTitle}>人气</span><br/>
							<span className={style.info}>微博30万粉丝、一直播80万粉丝</span><br/>
						</div>
					</div>
					<div className={style.lineBox}>
						<div className={style.screen4ContentItem}>
							<img src={require('./img/food_screen4_2.png')} alt="" /><br/>
							<span className={style.name}>郭蕾</span><br/>
							<span className={style.infoTitle}>个性</span><br/>
							<span className={style.info}>古灵精怪、活泼可爱</span><br/>
							<span className={style.infoTitle}>特技</span><br/>
							<span className={style.info}>“超会买”的败家专业户， </span><br/>
							<span className={style.infoSecond}> 《非诚勿扰》、《完美假期》女嘉宾</span><br/>
							<span className={style.infoTitle}>人气</span><br/>
							<span className={style.info}>微博30万粉丝、一直播90万粉丝</span><br/>
						</div>
					</div>
					<div className={style.lineBox}>
						<div className={style.screen4ContentItem}>
							<img src={require('./img/food_screen4_3.png')}  alt=""/><br/>
							<span className={style.name}>苏爱</span><br/>
							<span className={style.infoTitle}>个性</span><br/>
							<span className={style.info}>端庄高雅、气质绝佳</span><br/>
							<span className={style.infoTitle}>特技</span><br/>
							<span className={style.info}>高人气美厨娘</span><br/>
							<span className={style.infoTitle}>人气</span><br/>
							<span className={style.info}>人气 微博10万粉丝 </span><br/>
						</div>
					</div>
				</div>
			</div>
			
			<div className={style.screen5}>
				<img className={style.title}  alt="" src={require('./img/food_title5.png')} />
				<div className={style.content}>
					<img src={require('./img/food_screen5_1.jpg')} alt="" />
					<div>
						<img src={require('./img/food_screen5_2.jpg')} alt="" />
						<img src={require('./img/food_screen5_3.jpg')} alt="" />
						<img src={require('./img/food_screen5_4.jpg')} alt="" />
						<img src={require('./img/food_screen5_5.jpg')} alt="" />
					</div>
				</div>
			</div>
			
			<div className={style.screen6}>
				<img className={style.title} src={require('./img/food_title6_new.png')} alt="" />
				<div className={style.content}>
					<div className={`investment-swiper-container`}>
						<div id='investmentSwiper' className="swiper-container">
				        <div className="swiper-wrapper">
				        
			            <div className="swiper-slide">
			            	<div className={`${style.screen6ContentItem} ${style.screen6ContentItem1}`}>
			            		<div className={style.backgroundBox}>
			            			<div></div>
			            			<img className={style.left} src={require('./img/investment1_left.png')} alt="" />
			            			<img className={style.right} src={require('./img/investment1_right.png')} alt="" />
			            		</div>
			            		<div className={style.contentBox}>
			            			<span className={`${style.typeName} ${style.waterTypeName}`}>生鲜酒水类</span>
			            			<p className={style.info}>生鲜类品牌合作参考：</p>
			            			<p className={style.info}>在《夜谈食记》栏目中，使用产品进行烹饪，在烹饪期间说明产品特点并提供购买链接，从而提升产品认知度及市场信任度。为生鲜类产品定制植入方式，从而强化消费者对于生鲜品牌的认知。</p>
			            			<p className={style.info}>酒水饮料类品牌合作参考：：</p>
			            			<p className={style.info}>通过《夜谈食记》告知中国消费者食用不同餐品期间应该实用哪种佐餐饮品，并在栏目中提供可商品链接，引发消费者抢购；为酒水、饮料定制植入方式，可突出产品特点及使用场景。</p>
			            		</div>
			            	</div>
			            </div>
				            
				          <div className="swiper-slide">
			            	<div className={`${style.screen6ContentItem} ${style.screen6ContentItem2}`}>
			            		<div className={style.backgroundBox}>
			            			<div></div>
			            			<img className={style.left} src={require('./img/investment2_left.png')}  alt=""/>
			            			<img className={style.right} src={require('./img/investment2_right.png')} alt="" />
			            		</div>
			            		<div className={style.contentBox}>
			            			<span className={style.typeName}>粮油调料类</span>
			            			<p className={style.info}>粮油类品牌合作参考：</p>
			            			<p className={style.info}>橄榄油只是一种比较好的食用油，但并没有比其他植物油明显更高的营养价值。橄榄油炒菜时其中的抗氧化成分容易被破坏，从而失去冷榨橄榄油“可能存在”的“营养优势”。通过《夜谈食记》栏目，告诉消费者如何选用橄榄油，如果使用橄榄油进行烹饪，哪些菜适合橄榄油。</p>
			            			<p className={style.info}>调料类品牌合作参考：</p>
			            			<p className={style.info}>在栏目做菜期间告知消费者不同调料与食材之间的搭配组合方式，并传递产品的独特香味、特点等信息，从而更好地体现产品特点，提升品牌及产品的市场认知度。</p>
			            		</div>
			            	</div>
			            </div>
			            
			            <div className="swiper-slide">
			            	<div className={`${style.screen6ContentItem} ${style.screen6ContentItem3}`}>
			            		<div className={style.backgroundBox}>
			            			<div></div>
			            			<img className={style.left} src={require('./img/investment3_left.png')} alt="" />
			            			<img className={style.right} src={require('./img/investment3_right.png')} alt="" />
			            		</div>
			            		<div className={style.contentBox}>
			            			<span className={style.typeName}>厨电及厨具类</span>
			            			<p className={style.info}>厨电类合作形式参考：</p>
			            			<p className={style.info}>提供烹饪样板间及可使用的厨电设施；以直播口播、露出、使用等形式进行植入厨电品牌，在直播期间展示品牌产品、logo及功能。</p>
			            			<p className={style.info}>厨具类合作形式参考：</p>
			            			<p className={style.info}>提供烹饪所需专业厨具/器皿；以直播口播、专题片、微电影等形式进行植厨具品牌，在视频内展示品牌产品、logo及功能。</p>
			            		</div>
			            	</div>
			            </div>
			            
			            <div className="swiper-slide">
			            	<div className={`${style.screen6ContentItem} ${style.screen6ContentItem4}`}>
			            		<div className={style.backgroundBox}>
			            			<div></div>
			            			<img className={style.left} src={require('./img/investment4_left.png')} alt="" />
			            			<img className={style.right} src={require('./img/investment4_right.png')} alt="" />
			            		</div>
			            		<div className={style.contentBox}>
			            			<span className={style.typeName}>可穿戴设备及3C电器类</span>
			            			<p className={style.info}>可穿戴设备类品牌合作参考：</p>
			            			<p className={style.info}>可植入方式：主创团队（网红/厨师）随身携带，在直播画面中植入网红/美食达人使用产品的画面及过程，植入产品及品牌logo；</p>
			            			<p className={style.info}>产品参考：智能手表/智能耳机/Gopro等；</p>
			            			<p className={style.info}>3C电器类品牌合作参考：</p>
			            			<p className={style.info}>可植入方式：主创团队（摄影师/网红）在直播画面中植入其使用产品的画面及过程，植入产品及品牌logo；</p>
			            			<p className={style.info}>3C类产品参考：冰箱等大家电、数码相机等小家电。</p>
			            		</div>
			            	</div>
			            </div>
			            
			            <div className="swiper-slide">
			            	<div className={`${style.screen6ContentItem} ${style.screen6ContentItem5}`}>
			            		<div className={style.backgroundBox}>
			            			<div></div>
			            			<img className={style.left} src={require('./img/investment5_left.png')} alt="" />
			            			<img className={style.right} src={require('./img/investment5_right.png')} alt="" />
			            		</div>
			            		<div className={style.contentBox}>
			            			<span className={style.typeName}>日化服饰类</span>
			            			<p className={style.info}>日化类品牌合作参考：</p>
			            			<p className={style.info}>网红主推：本次合作的网红将在节目直播中主推合作的日化类品牌的产品，口述品牌，并简要介绍特点、功能等产品信息；</p>
			            			<p className={style.info}>日化类合作产品参考：口红/隔离霜/粉底液/面霜/喷雾等；</p>
			            			<p className={style.info}>服饰类品牌合作参考：</p>
			            			<p className={style.info}>主创团队服装植入：网红/美食达人等主创出境团队将全面植入合作的服装品牌产品；</p>
			            			<p className={style.info}>直播中将对产品进行口播；纪录片中将对合作产品及logo进行相应曝光；</p>
			            			<p className={style.info}>服饰类产品参考：裙子/鞋帽/太阳镜等。</p>
			            		</div>
			            	</div>
			            </div>
			            
				        </div>
				    </div>
				    <div id='investmentNextBtn' className="swiper-button-next"></div>
						<div id='investmentPrevBtn' className="swiper-button-prev"></div>
			   	</div>
				</div>
			</div>
			
			<div className={style.screen7}>
				<img className={style.title} alt="" src={require('./img/food_title7.png')} />
				<div className={style.content}>
					<div>
						<div>
							<img src={require('./img/food_screen7_1.png')} alt="" />
							<img className={style.title} src={require('./img/food_title10.png')} alt="" />
							<p className={style.info}>星辰制造是为网络达人、意见领袖提供培训、技术、产品、市场等全方位专业服务，旨在帮助其快速成长的加速孵化平台。以用户为基础，以内容为核心，集影视剧投资制作、营销发行、艺人经纪、周边产品开发及游戏娱乐为一体，打造泛娱乐时代的IP生态产业链。</p>
						</div>
					</div>
					<div>
						<div>
							<img src={require('./img/food_screen7_2.png')} alt="" />
							<img className={style.title} src={require('./img/food_title11.png')} alt="" />
							<p className={style.info}>红演圈（北京）网络科技有限公司，成立于2014年，是目前国内移动互联网领域领先的文化演艺人才服务商。</p>
							<p className={style.info}>公司不仅为怀揣演艺梦想的新人提供进入行业的影视、模特、音乐、综艺等工作机会和展示平台，还为用人单位提供专业人才服务，包括为影视机构寻找新人、为直播平台提供主播网红、承接大型赛事的海选、为演艺培训机构招生等。</p>
							<p className={style.info}>同时，公司全资投资的网红电商公司红蜜，已成为淘宝天猫、京东、苏宁易购、蘑菇街等电商平台金牌电商节目制作商，服务于各类电商商家。</p>
						</div>
					</div>
				</div>
			</div>
			
		</div>
    )
  }
}
export default Food
