import React,{Component} from 'react';
import {Link} from 'react-router';
import Styles from './App.css';

const ACTIVE = {
  color:'orange',
  border:0,
  borderBottom:2,
  borderColor:'orange',
  borderStyle:'solid'
}

export default class extends Component{

  render(){
    return(
      <div className={Styles.container}>
          <div className={Styles.nav}>
              <div className={Styles.nav_item}>
                <Link to="/home" className={Styles.linkStyle} activeStyle={ACTIVE}>首页</Link>
              </div>
              <div className={Styles.nav_item}>
                <Link to="/msg"  className={Styles.linkStyle} activeStyle={ACTIVE}>消息</Link>
              </div>
               <div className={Styles.nav_item}>
                <Link to="/find"  className={Styles.linkStyle} activeStyle={ACTIVE}>发现</Link>
              </div>
               <div className={Styles.nav_item}>
                <Link to="/mine"  className={Styles.linkStyle} activeStyle={ACTIVE}>我</Link>
              </div>
          </div>

          <div className={Styles.cover}>
            {this.props.children}
          </div>
      </div>
    )
  }
}
