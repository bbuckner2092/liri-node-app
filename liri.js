// Code needed to grab the data from keys.js
var twitterKeys = require("./keys");
// Code needed to load the data for our twitter account
var Twitter = require("twitter");


// "my_tweets" will display last 20 tweets and when
// they were created
 var my_tweets = process.argv[2];

 var client = new Twitter({
  consumer_key: 'ZFNy8qiS8BZ7E3MfcKE2gAtbM',
  consumer_secret: 'lOZBXLkMvxQy953KaVExOf9dnLH04E6Ja9pqqR1FajoFRBpN0w',
  access_token_key: '921506234452398082-gJ7FYFDCwTmDdal8kkQMu8sJ7Ol4rVE',
  access_token_secret: 'fYbhtuFxliojsJ9JVvAebrmalfDqhHE0k2A7DXHbRVnQ3'
});
 
var params = {screen_name: 'gTBuckner92'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});