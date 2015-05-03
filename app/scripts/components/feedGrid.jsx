var React = require('react');
var Reflux = require('reflux');
var Table = require('react-bootstrap').Table;
var FeedStore = require('../stores/feedStore');
var FeedActions = require('../actions/FeedActions');
var SelfPost = require('./selfPost');
var NSFW = require('./nsfw');
var Score = require('./score');
var SubReddit = require('./subRedditTableData');
var Thumbnail = require('./thumbnail');



var FeedGrid = React.createClass({
	mixins: [Reflux.connect(FeedStore, 'feedstore')],

  render: function() {
    var store = this.state.feedstore;
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
	  				 		<th>Thumbnail</th>
	  				 		<th>Score</th>
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
                    <td>
                      <Thumbnail src={post.thumbnail} link={post.link} />
                    </td>
                    <Score score={post.score} />
		  							<td className='comments'><a href={post.permalink}><i className='fa fa-comment-o'></i> {post.comments} </a></td>
		  						</tr>
		  					);
		  				})
              }
	  			</Table>
  			</div>
  		)
  	} else {
      setTimeout(FeedActions.fetchList, 2000);
  		return (<div className='container'><h1 className="loading">Loading data ... </h1></div>)
  	}
  }
});

module.exports = FeedGrid;
