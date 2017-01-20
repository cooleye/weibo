import React,{Component} from 'react';
import Styles from './header.css';
import {Link} from 'react-router';

export default class extends Component{
    render(){
        return(
            <div className={Styles.container}>
                <div className={Styles.title}>{this.props.title}</div>
                <Link to="/edit" className={Styles.icon_edit}> </Link>
                <Link className={Styles.icon_search}></Link>
                <Link className={Styles.icon_refresh}></Link>
            </div>
        )
    }
}