import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Styles from './home.css';
import MsgItem from '../../components/MsgItem/MsgItem';

import 'whatwg-fetch';

export default class extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataSource:[]
        }
    }

    componentDidMount(){

        let self = this;
        fetch('http://localhost:3000/getmsg')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log('parsed json', json)
            let arr = json.data;

            arr = arr.map(function(item){
                return <MsgItem key={item.id} info={item}/>
            })
            self.setState({
                dataSource:arr
            })

        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }

    render(){
        return(
            <div>
                <Header title="新年快乐"/>
                <div className={Styles.container}>

                    {this.state.dataSource}

                </div>
            </div>
        )
    }
}