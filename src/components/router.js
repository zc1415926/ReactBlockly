/**
 * Created by zc1415926 on 16-5-2.
 */
'use strict';

var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

var router = React.createClass({
    render: function () {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={require('./catalogPage/catalogPage')}/>
                <Route path="/fixedPage" component={require('./fixedPage/fixedPage')}/>
            </Router>
        );
    }});

module.exports = router;