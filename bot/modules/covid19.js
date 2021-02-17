const
    {Client, MessageEmbed} = require('discord.js'),
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

        msg.react(answer === 'positive' ? ('🟩') : ('🟥'));

        const embed = new MessageEmbed()
            .setColor(0x3366cc)
            .addField('Covid 19 test result', `${user.tag} is ${answer}.`, false);

        msg.channel.send(embed);
    }
}