var React = require('react');

var NSFW = React.createClass({
  propTypes: {
    nsfw: React.PropTypes.bool
  },
  render: function() {
    return this.props.nsfw ? (<span className='nsfw'> [NSFW <i className="fa fa-exclamation"></i>]</span>) : (<span />);
  }
});

module.exports = NSFW;
