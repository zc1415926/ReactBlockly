'use strict';

var React = require('react');
var Link = require('react-router').Link;

var Nav = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="home" className="navbar-brand">
                        ReactBlockly
                    </Link>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;