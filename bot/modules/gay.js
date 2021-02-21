const
    {Client, MessageEmbed} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}gay`)) {
        const user = msg.mentions.users.first();

        if (!user) {
            return msg.channel.send('You didn\'t mention the user.');
        }

        const embed = new MessageEmbed()
            .setColor(0x3366cc)
            .addField('Gay level', `${user.tag} is ${Math.floor(Math.random() * (100 - 0 + 1)) + 0}% gay.`, false);

        msg.channel.send(embed);
    }
}