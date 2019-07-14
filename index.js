const Botkit = require('botkit');
const request = require('request');

const controller = Botkit.slackbot();

controller.spawn({
    token: process.env.token
}).startRTM();

controller.on('ambient', (bot, message) => {
    request({
        url: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
        method: 'POST',
        form: { apikey: process.env.a3rt_talk_apikey, query: message.text },
        json:  true
    }, (err, response, body) => {
        if (body.status == 0) {
            bot.reply(message, `${body.results[0].reply} (${Math.ceil(body.results[0].perplexity * 100) / 100})`);
        } else {
            bot.reply(message, `エラーたよ:fearful: [${body.status} ${body.message}]`);
        }
    });
});
