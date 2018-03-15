import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
  
  render() {
    const style =require("./footer.scss");
    return (
      <div className={style.footer}>
      	<div className={style.main}>
           <ul className={style.navFooter}>
             <li><NavLink  to="/" >首页</NavLink></li>
			       <li><NavLink  to="/hotyqApp" >红演圈APP</NavLink></li>
			       <li><NavLink  to="/hotyqTV" >红演圈TV</NavLink></li>
			       <li><NavLink  to="/casting" >红演圈CASTING</NavLink></li>
		         <li><NavLink  to="/invest" >红演圈投资</NavLink></li>
			       <li><NavLink  to="/ChildStar" >童星直通车</NavLink></li>
			       <li><NavLink  to="/about/companyProfile" >关于我们</NavLink></li>
           </ul>
           <ol className={ `${style.navFooter} ${style.top32} ${style.nowidth} ${style.left34px} `}>
             <li><NavLink to='/terms'>服务条款</NavLink></li>
             <li><NavLink to='/policy'>隐私政策</NavLink></li>
             <li><NavLink to='/declare'>版权声明</NavLink></li>
           </ol>
           <p className={style.navCopy}>红演圈（北京）网络科技有限公司京ICP备14045863号-1Copyright  &copy;2014-2018 Hotyq.com  All Rights Reserved</p>
      		
      	</div>
      </div>
    )
  }
  
}
export default Footer
