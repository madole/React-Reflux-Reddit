var Reflux = require('reflux');
var $ = require('jquery');
var PopularActions = require('../actions/popularActions');

var data = [];


function parseData(fetchedData) {
  var popularSubredditsData = fetchedData.data.children;
  var popularSubreddits = popularSubredditsData.map(function(subReddit) {
    return {
      title: subReddit.data.display_name,
      subtitle: subReddit.data.header_title,
      img: subReddit.data.header_img,
      url: subReddit.data.url
    }
  });

  this.popularSubreddits = popularSubreddits;
  this.trigger(this.popularSubreddits);
}

var PopularStore = Reflux.createStore({
  listenables: [PopularActions],

  popularUrl: 'http://www.reddit.com/subreddits/.json',

  popularSubreddits: [],

  init: function() {
    this.fetchPopular();
  },

  fetchPopular: function() {
    var that = this;

    $.ajax({
      url: this.popularUrl,
      method: 'GET'
    }).done(parseData.bind(this))
  }

});


module.exports = PopularStore;
