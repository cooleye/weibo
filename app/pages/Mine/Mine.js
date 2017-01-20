import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Styles from './mine.css';
export default class extends Component{
    render(){
        return(
             <div>
                <Header title="我的"/>
                <div className={Styles.container}>
                
                </div>
            </div>
        )
    }
}