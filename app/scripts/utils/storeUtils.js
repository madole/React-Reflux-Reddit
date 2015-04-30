
function filterAndMapData(posts) {
  return posts.filter(function (post) {
    return !post.data.stickied
  }).map(function (post) {
    var title = post.data.title.replace('[NSFW]', '');

    return {
      link: post.data.selftext ? 'http://reddit.com' + post.data.permalink : post.data.url,
      title: title,
      ups: post.data.ups,
      downs: post.data.downs,
      self: !!post.data.selftext,
      comments: post.data.num_comments,
      subreddit: post.data.subreddit,
      nsfw: !!post.data.over_18,
      permalink: 'http://reddit.com' + post.data.permalink,
      score: post.data.score
    };
  });
}

module.exports = {
  filterAndMapData: filterAndMapData
};
