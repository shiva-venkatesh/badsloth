var Botkit = require('botkit');
var google = require('google');

const express = require('express');
const app = express();
const port = process.env.PORT || 4205;
const router = express.Router();
const SlackBot = require('slackbots');
const tracks = require('./routes/tracks');
const items = require('./routes/items');
const bodyParser = require('body-parser');

var mongo = require('mongodb');
var mongoose = require('mongoose');

var db = mongoose.connection;
// mongoose.connect('mongodb://<shiva-venkatesh>:<shiva123>@ds119380.mlab.com:19380/chelsea-fans');

// use the tokens you got from the previous step
process.env.SLACK_TOKEN = 'xoxp-219675461296-220256236163-220394512132-1c853038dd9bf57317c939af52a8c999'
process.env.SLACK_OAUTH = 'xoxb-221225998662-isRFtRKE8XqG9RLvOl6oY1zr'
const slack_token  = process.env.SLACK_TOKEN;
const slack_oauth  = process.env.SLACK_OAUTH;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create a bot
var bot = new SlackBot({
    token: 'xoxb-221225998662-isRFtRKE8XqG9RLvOl6oY1zr' // Add a bot https://my.slack.com/services/new/bot and put the token
});

const slackBot = () => {

  bot.on('start', function() {
    var params = {
      icon_emoji: ':cat:'
    };
    bot.postMessageToChannel('general', 'meow!', params);
    bot.postMessageToUser('user_name', 'meow!', params);
    bot.postMessageToUser('user_name', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' });

    bot.postMessageToGroup('private_group', 'meow!', params);
    bot.on('message', (e) => {
      console.log(e)
    })
    bot.on('message.im_created', (e) => {
      console.log(e)
    })
  }
)

}

app.use('/tracks', tracks);
app.use('/items', items);

app.listen(port, function (req, res) {
    console.info(`Started Express server on port ${port}`)
    slackBot();
})
