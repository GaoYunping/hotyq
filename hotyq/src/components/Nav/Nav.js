import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Login from "./logoIndexIcon.png"
const style = require('./Nav.scss');
class Nav extends Component {

  constructor(props) {
    super(props);
    this.state={	
    }
	}

  render() {
    return (
			<div className={style.headWrap}>
    		<div className={style.headCon}>
    			<div className={style.commLogo}>
    				<img src={Login}  alt=""/>
    			</div>
					<div className={style.headConSelectR}>
						<div>
							<span className={style.manageBtn} style={{display:"block"}}>通告方管理</span>
							<span className={ style.registerBtn}>退出</span>
							
						</div>
					</div>
    			<ul className={style.headConSelect}>
						<li><NavLink  activeClassName={style.active}  to="/">首页 </NavLink></li>
						<li><NavLink  activeClassName={style.active}  to="/hotyqApp">红演圈APP </NavLink>  </li>
						<li><NavLink  activeClassName={style.active}  to="/hotyqTV">红演圈TV </NavLink>  </li>
						<li><NavLink  activeClassName={style.active}  to="/casting">红演圈CASTING </NavLink>  </li>
						<li><NavLink  activeClassName={style.active}  to="/invest">红演圈投资 </NavLink>  </li>					
						<li><NavLink  activeClassName={style.active}  to="/ChildStar">童星直通车 </NavLink>  </li>
						<li><NavLink  activeClassName={style.active}  to="/about/companyProfile">关于我们 </NavLink>  </li>
    			</ul>
    		</div>

				
    		{/* <Modal title="Basic Modal"  wrapClassName='video-module'>
	      </Modal> */}
				
    	</div>
    )
  }
 
}

export default Nav
