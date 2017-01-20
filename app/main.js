import React,{Component} from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, IndexRoute, Link } from 'react-router';
import "./common/main.css";

import App from './components/App';
import Home from './pages/Home/Home';
import Mine from './pages/Mine/Mine';
import Find from './pages/Find/Find';
import MsgPage from './pages/MsgPage/MsgPage';
import EditPage from './pages/EditPage/EditPage';

var router = 
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home} />
       <Route path="/msg" component={Mine} />
       <Route path="/find" component={Find} />
       <Route path="/mine" component={Mine} />
    </Route>
    <Route path="/edit" component={EditPage}/>
  </Router>

render((
router
), document.getElementById('root'))
