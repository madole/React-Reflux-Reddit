var React = require('react');
var Reflux = require('reflux');
var Table = require('react-bootstrap').Table;
var FeedStore = require('../stores/javascriptFeedStore');
var RedditFeedStore = require('../stores/redditFeedStore');
var SelfPost = require('./selfPost');
var Vote = require('./vote');
var NSFW = require('./nsfw');
var Score = require('./score');
var SubReddit = require('./subRedditTableData');
var FeedActions = require('../actions/FeedActions');
var RedditHomeFeedActions = require('../actions/redditHomeFeedActions');




var FeedGrid = React.createClass({
	mixins: [Reflux.connect(FeedStore, 'feedstore'), Reflux.connect(RedditFeedStore, 'redditfeedstore')],

  render: function() {
    var store = this.props.subreddit === 'javascript' ? this.state.feedstore : this.state.redditfeedstore;
    var subreddit = this.props.subreddit;
    var subRedditHeader = subreddit === 'homepage' ? <th>SubReddit</th> : '';

  	if(store) {
  		return (
  			<div className="container">
  				 <Table striped bordered condensed hover>
	  				 <thead>
	  				 	<tr>
                { subRedditHeader }
	  				 		<th className='text-left'>Post title</th>
	  				 		<th>Score</th>
                <th>Ups</th>
	  				 		<th>Downs</th>
	  				 		<th>Comments</th>
	  				 	</tr>
	  				 </thead>
		  				{ store.map(function(post) {
		  					return (
		  						<tr>
                    <SubReddit subreddit={subreddit} sub={post.subreddit} />
		  							<td className='text-left'>
			  							<a href={ post.link } >
			  								{ post.title }
			  								<SelfPost self={post.self} />
                        <NSFW nsfw={post.nsfw} />
			  							</a>
		  							</td>
                    <Score score={post.score} />
		  							<td>
		  							 	<Vote ups={post.ups} />
		  							</td>
		  							<td>
		  							 	<Vote downs={post.downs} />
		  							</td>
		  							<td className='comments'><a href={post.permalink}><i className='fa fa-comment-o'></i> {post.comments} </a></td>
		  						</tr>
		  					);
		  				})
              }
	  			</Table>
  			</div>
  		)
  	} else {
      var actions = this.props.subreddit === 'javascript' ? FeedActions : RedditHomeFeedActions;
      setTimeout(actions.fetchList, 2000);
  		return (<div className='container'><h1 className="loading">Loading data ... </h1></div>)
  	}
  }
});

module.exports = FeedGrid;
