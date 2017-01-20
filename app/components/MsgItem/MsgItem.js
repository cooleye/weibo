import React,{Component} from 'react';
import Styles from './msg.css';

export default class extends Component{
    render(){
        return(
            <div className={Styles.container}>
                <div className={Styles.header}>
                    <div>
                        <img src="app/static/icons/wbicon1_03.png"/>
                    </div>
                    <div>{this.props.info.name}</div>
                    <div>

                      <img src={this.props.info.img}/>
                    </div>
                </div>
                <div>
                    {this.props.info.news}
                </div>
                <div></div>
            </div>
        )
    }
}
