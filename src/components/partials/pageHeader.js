'use strict';

var React = require('react');

var PageHeader = React.createClass({
    render: function () {
        return (
          <div className="page-header">
            <h1>{this.props.mainTitle}<small>{this.props.smallTitle}</small></h1>
          </div>
        );
    }
});

module.exports = PageHeader;