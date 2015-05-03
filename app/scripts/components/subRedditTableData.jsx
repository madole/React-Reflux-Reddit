var React = require('react');

var SubReddit = React.createClass({
  render: function() {
    if (this.props.subreddit === 'homepage') {
      return (
        <td>{this.props.sub}</td>
      )
    } else {
      return <span />;
    }
  }
});

module.exports = SubReddit;
