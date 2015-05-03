var React = require('react');

var PostSelf = React.createClass({
  propTypes: {
    self: React.PropTypes.bool
  },
	render: function() {
    return this.props.self ? (<span className='self'> [Self <i className="fa fa-reddit"></i>]</span>) : (<span />);

	}
});

module.exports = PostSelf;
