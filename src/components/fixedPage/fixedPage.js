/**
 * Created by zc1415926 on 16-5-1.
 */
'use strict';

var React = require('react');
var FixedC = require('./fixed');

const _TOOLBOX = `
<xml id="toolbox" style="display: none">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="controls_repeat_ext"></block>
    <block type="math_number"></block>
    <block type="math_arithmetic"></block>
    <block type="text"></block>
    <block type="text_print"></block>
  </xml>
`;

var FixedPage = React.createClass({
    render: function(){
        return(
            <div>
                <FixedC toolbox={_TOOLBOX}/>
            </div>
        );
    },
});

module.exports = FixedPage;