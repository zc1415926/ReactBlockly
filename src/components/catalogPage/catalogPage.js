/**
 * Created by zc1415926 on 16-5-2.
 */
'use strict';

var React = require('react');
var Link = require('react-router').Link;
var Header = require('../partials/pageHeader');

var CatalogPage = React.createClass({
    render: function(){
        return(
          <div>
              <Header mainTitle="React & Blockly Demos "
                      smallTitle="Click the link for detail."/>
              <Link to='/fixedPage'>Fixed Demo</Link>
          </div>
        );
    },
});

module.exports = CatalogPage;