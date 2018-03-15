import React, { Component } from 'react';
import { NavLink ,Route} from 'react-router-dom';
import { Switch } from "react-router"

import CompanyProfile from "./components/CompanyProfile/CompanyProfile.js";
import DevelopmentHistory from "./components/DevelopmentHistory/DevelopmentHistory";
import TeamIntroduction from "./components/TeamIntroduction/TeamIntroduction";
import JoinUs from "./components/JoinUs/JoinUs";
import LinkUs from "./components/LinkUs/LinkUs";


class About extends Component {
  render() {
    const style = require('./about.scss');
    return (
      <div className={`${style.content} content`}>
        <div  className={style.banner}></div>
        
        <div className={style.main} >
          <div className={style.nav}>
            <NavLink activeClassName={style.active} to="/about/companyProfile" >公司简介</NavLink>
            <NavLink activeClassName={style.active} to="/about/developmentHistory" >发展历程</NavLink>
            <NavLink activeClassName={style.active} to="/about/teamIntroduction" >团队介绍</NavLink>
            <NavLink activeClassName={style.active} to="/about/joinUs" >加入我们</NavLink>
            <NavLink activeClassName={style.active} to="/about/linkUs" >联系我们</NavLink>
          </div>

          <Switch>
            <Route exact path="/about/companyProfile" component={CompanyProfile}/>
            <Route exact path="/about/developmentHistory" component={DevelopmentHistory}/>
            <Route exact path="/about/teamIntroduction" component={TeamIntroduction}/>
            <Route exact path="/about/joinUs" component={JoinUs}/>
            <Route exact path="/about/linkUs" component={LinkUs}/>
          </Switch>
          
          
        </div> 
      </div>
    )
  }
}

export default  About
