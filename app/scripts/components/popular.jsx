var React = require('react');
var Reflux = require('reflux');
var Jumbotron = require('react-bootstrap').Jumbotron;
var Button = require('react-bootstrap').Button;
var Link = require('react-router').Link;
var PopularActions = require('../actions/popularActions');

var PopularStore = require('../stores/popularStore');

var PopularSubreddits = React.createClass({
  mixins: [Reflux.connect(PopularStore, 'popularstore')],

  popularStore: null,

  render: function() {
    var store = this.popularStore ? this.popularStore : this.state.popularstore;

    if(store) {
      return (
        <Jumbotron>
          <h2>Popular sub-reddits:</h2>
          {
            store.map(function(sub) {
              console.log(sub);
              return (
                <Link to="custom" params={{subreddit: sub.title}}>
                  <Button className='super-button' title={sub.subtitle}>
                    <div>{sub.title} </div>
                      <div><img src={sub.img} /></div>
                  </Button>
                </Link>
              );
            })
          }
        </Jumbotron>
      )
    } else {
      setTimeout(PopularActions.fetchPopular, 2000);
      return <span />
    }

  }
});

module.exports = PopularSubreddits;
