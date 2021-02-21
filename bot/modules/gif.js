const
    {Client, MessageEmbed} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}gif`)) {
        const args = msg.content.slice(config.prefix.length).trim().split(' ');
    
        if (!args[1]) {
            return msg.channel.send(
                `Usage: ${config.prefix}gif <query> or ${config.prefix}gif <query+query>\n`
                + `Example: ${config.prefix}gif animal or ${config.prefix}gif animal+cat`
            );
        }

        msg.channel.send(`https://giphy.com/search/${args[1]}`);
    }
}