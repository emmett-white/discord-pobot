const
    {Client} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

exports.show = (msg) => {
    if (msg.content.startsWith(`${config.prefix}callbot`)) {
        msg.channel.send(`Waddup, baby? I can help you, just type ${config.prefix}help`);
    }
}