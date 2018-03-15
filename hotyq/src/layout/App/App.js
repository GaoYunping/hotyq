import React, { Component } from 'react';
import {Route} from 'react-router';
import BackTop from "../../components/BackTop/BackTopNew"; //回到顶部
import QrCode from "../../components/QrCode/QrCode"; //商务合作
import Nav from "../../components/Nav/Nav"; //导航
import Home from "../home/Home"; //首页
import Footer from '../../components/Footer/Footer';//顶部
import ChildStar from "../childStar/ChildStar"; //童星直通车
import About from "../about/About"; // 关于我们
import Casting from "../casting/Casting"; //红演圈casting
import Invest from "../invest/Invest"; //红演圈投资
import HotyqApp from "../hotyqApp/HotyqApp"; //红演圈App
import HotyqTV from "../hotyqTV/HotyqTV";//红演圈TV
import Food from "../Food/Food" //娱乐直播
import Jgldq from "../../layout/Jgldq/Jgldq"//
import Policy from "../../layout/Policy/Policy"
import Terms from "../../layout/Terms/Terms"
import Declare from "../../layout/Declare/Declare"
import "../../common/config/config"
import "./App.css";
import  "swiper/dist/css/swiper.min.css"
import "./global.scss";
class App extends Component {



  render() {
    return (
      <div className="App">
        <Nav/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/ChildStar" component={ChildStar}/>
        <Route exact path="/casting" component={Casting}/>
        <Route path="/about" component={About}/>
        <Route exact path="/invest" component={Invest}/>
        <Route exact path="/hotyqApp" component={HotyqApp}/>
        <Route exact path="/hotyqTV" component={HotyqTV}/>
        <Route exact path="/Food" component={Food}/>
        <Route path="/jgldq" component={Jgldq}/>
        <Route exact path="/Policy" component={Policy}/>
        <Route exact path="/Terms" component={Terms}/>
        <Route exact path="/Declare" component={Declare}/>
        
        
        <BackTop/>
        <QrCode/>
        <Footer />
      </div>
    );
  }
}

export default App;
