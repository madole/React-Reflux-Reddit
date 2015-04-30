var React = require('react');

var NSFW = React.createClass({
  render: function() {
    return this.props.nsfw ? (<span className='nsfw'> [NSFW <i className="fa fa-exclamation"></i>]</span>) : (<span />);
  }
});

module.exports = NSFW;
