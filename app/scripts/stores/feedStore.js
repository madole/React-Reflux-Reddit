var Reflux = require('reflux');
var $ = require('jquery');
var FeedActions = require('../actions/feedActions');
var storeUtils = require('../utils/storeUtils');

var data = [];
var sourceUrl = '/';

function updateSourceUrl(url) {
  sourceUrl = url;
}

var FeedStore = Reflux.createStore({
	listenables: [FeedActions],

	feedList: [],

  init: function() {
    this.fetchList();
    this.listenTo(FeedActions.updateUrl, updateSourceUrl);
  },

  fetchList: function() {
  	var that = this;
  	$.ajax({
		    url: sourceUrl,
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
