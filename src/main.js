/**
 * Created by ZC on 2016/4/2.
 */

$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var MainRouter = require('./components/router');
var Nav = require('./components/partials/nav');

ReactDOM.render((
    <div className="container">
        <Nav />
        <MainRouter/>
    </div>

), document.getElementById('app'));