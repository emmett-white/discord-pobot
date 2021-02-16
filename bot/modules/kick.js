const
    {Client} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}kick`)) {
        if (!msg.member.roles.cache.some(role => role.name === 'ADMIN')) {
            return msg.channel.send('You don\'t have a permission to kick members!');
        }

        const
            user = msg.mentions.users.first(),
            args = msg.content.slice(config.prefix.length).trim().split(' ');

        if (user) {
            const member = msg.guild.members.resolve(user);

            if (member) {
                member
                    .kick(`${user.tag} has been kicked from the server! Reason: ${args[2]}`)
                    .then(() => {
                        msg.channel.send(`${user.tag} has been kicked from the server! Reason: ${args[2]}`)
                    })
                    .catch((err) => {
                        msg.channel.send('I can\'t kick that member...');
                        console.log(err);
                    });
            } else {
                msg.channel.send('That user isn\'t in this guild...');
            }
        } else {
            msg.channel.send('You didn\'t mention the user to kick...');
        }
    }
}