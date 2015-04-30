var Reflux = require('reflux');
var $ = require('jquery')
var FeedActions = require('../actions/FeedActions');
var storeUtils = require('../utils/storeUtils');

var data = [];


var FeedStore = Reflux.createStore({
	listenables: [FeedActions],

	feedList: [],

	sourceUrl: 'http://www.reddit.com/r/javascript/.json',

  init: function() {
    this.fetchList()
  },

  fetchList: function() {
  	var that = this;
  	$.ajax({
		    url: this.sourceUrl,
		    method: 'GET'
		}).done(function (data) {
	      posts = storeUtils.filterAndMapData(data.data.children);
	      console.log('Fetch complete');
	      that.feedList = posts;
	      that.trigger(that.feedList);
		});
  }
});


module.exports = FeedStore;
