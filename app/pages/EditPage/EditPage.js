import React,{Component} from 'react';
import Styles from './edit.css';
import {Link} from 'react-router';

export default class extends Component{


    submitForm(){

        console.log('submit....');
        var text = this.refs.text.value;
        if(text == "" || text == null || text == undefined){
            return;
        }else{
            var form = this.refs.form;
            form.submit();

            setTimeout(function(){
                window.location.hash = "#/home";
            },500)
        }
    }

    render(){
        return(
            <div className={Styles.container}>
              <div className={Styles.header}>
                <div><Link to="/home">取消</Link></div>
                <div>发微博</div>
                <div onClick={this.submitForm.bind(this)}>发送</div>
              </div>
              <div className={Styles.form}>
                <form  ref="form" action="http://localhost:3000/addmsg" method="post" encType="multipart/form-data">
                    <textarea ref="text" placeholder="写点什么吧..." name="news"></textarea>
                    <div className={Styles.img}>
                         <input type="file" name="image"/>
                    </div>
                </form>
              </div>
            </div>
        )
    }
}
