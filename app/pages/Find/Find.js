import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Styles from './Find.css';
import MsgItem from '../../components/MsgItem/MsgItem';
export default class extends Component{
    render(){
        return(
            <div>
                <Header title="新年快乐"/>
                <div className={Styles.container}>
                    <MsgItem/>
                    <MsgItem/>
                    <MsgItem/>
                    <MsgItem/>
                </div>
            </div>
        )
    }
}