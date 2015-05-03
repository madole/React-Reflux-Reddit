var Reflux = require('reflux');
var $ = require('jquery');
var FeedActions = require('../actions/feedActions');
var storeUtils = require('../utils/storeUtils');

var data = [];

var FeedStore = Reflux.createStore({
	listenables: [FeedActions],

	feedList: [],

  sourceUrl: '/',

  updateSourceUrl: function(url) {
    this.sourceUrl = url;
  },

  init: function() {
    this.fetchList();
    this.listenTo(FeedActions.updateUrl, this.updateSourceUrl);
  },

  fetchList: function() {
  	var that = this;
  	$.ajax({
		    url: this.sourceUrl,
		    method: 'GET'
		}).done(function (data) {
        if(!data || !data.data) return;
	      var posts = storeUtils.filterAndMapData(data.data.children);
	      console.log('Fetch complete');
	      that.feedList = posts;
	      that.trigger(that.feedList);
		});
  }
});


module.exports =  FeedStore;
