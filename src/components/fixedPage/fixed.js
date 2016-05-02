/**
 * Created by zc1415926 on 16-4-28.
 */
'use strict';

$ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var FixedBlockly = React.createClass({

    componentDidMount: function () {

        this._blocklyDiv = ReactDOM.findDOMNode(this);

        $(() => {
            var workspace = Blockly.inject(this._blocklyDiv,
                {media: '../../media/',
                    toolbox: this.props.toolbox,});

            this._blocklyDiv.style.width = 500 + 'px';
            this._blocklyDiv.style.height = 500 + 'px';
        });
    },

    // Re-rendering Blockly is not supported because initialization of toolbox and workspace happen only once.
    shouldComponentUpdate: function (nextProps, nextState) {
        return false;
    },

    render: function () {
        return (
            <div className="blockly-component">
                {this.props.children}
            </div>
        );
    },
});

module.exports = FixedBlockly;