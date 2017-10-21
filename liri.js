// Code needed to grab the data from keys.js
var twitterKeys = require("./keys");
// Code needed to load the data for our twitter account
var Twitter = require("twitter");
// accessing fs package
var fs = require("fs");
// Code for request
var request = require("request");

// Wanted to grab the date of creation and last 20 tweets.
var client = new Twitter({
    consumer_key: 'ZFNy8qiS8BZ7E3MfcKE2gAtbM',
    consumer_secret: 'lOZBXLkMvxQy953KaVExOf9dnLH04E6Ja9pqqR1FajoFRBpN0w',
    access_token_key: '921506234452398082-gJ7FYFDCwTmDdal8kkQMu8sJ7Ol4rVE',
    access_token_secret: 'fYbhtuFxliojsJ9JVvAebrmalfDqhHE0k2A7DXHbRVnQ3'
});

var my_tweets = { screen_name: 'gTBuckner92' };
client.get('statuses/user_timeline', my_tweets, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
        for (var i = 0; i < tweets.length; i++) {
        	console.log("Below is tweet: " + tweets[i]);
            console.log(tweets[i].text);
            console.log("=======================");


        };

    }
});