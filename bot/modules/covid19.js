const
    {Client} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

let covidResults = [
    'positive',
    'negative'
];

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}covidtest`)) {
        const
            user = msg.mentions.users.first(),
            answer = covidResults[Math.floor(Math.random() * covidResults.length)];

        if (!user) {
            return msg.channel.send('You didn\'t mention the user to test.');
        }

        msg.channel.send(`${user.tag} Covid 19 test results: ${answer}`);
        msg.react(answer === 'positive' ? ('🟩') : ('🟥'));
    }
}