const
    {Client} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}clear`)) {
        if (!msg.member.hasPermission('MANAGE_MESSAGES')) {
            return msg.channel.send('You don\'t have permission to manage messages!');
        }
    
        const args = msg.content.slice(config.prefix.length).trim().split(' ');

        if (args[1] > 100) {
            return msg.channel.send('You can\'t delete more than 100 messages!');
        }

        msg.channel.bulkDelete(args[1]);
        msg.channel.send(`Deleted ${args[1]} messages.`);
    }
}