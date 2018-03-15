import React, { Component } from 'react'
import "./modal.css"
export default class Modal extends Component {

  constructor(props) {
    super(props)
    
    
    
  }
  

  render() {
   
    let {show ,onShow,style,btn}=this.props;
    console.log(btn)
    //  style={{display:block}}
    //  style={{...style}}
    return (
      <div className="modalWrap" onClick={onShow} style={{display:show ? "block" : "none"}} >
       
        <div className="modalCom" >
          <span onClick={onShow}  style={{display: btn ? "block" : "none"}} ></span>
          {this.props.children}
        </div>
      </div>
    )
  }
}
