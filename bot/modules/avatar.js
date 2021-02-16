const
    {Client, MessageEmbed} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}avatar`)) {
        const
            user = (msg.mentions.users.first() || msg.author),
            avatarEmbed = new MessageEmbed()
                .setColor('#3366cc')
                .setAuthor(user.username)
                .setImage(user.displayAvatarURL());

        msg.channel.send(avatarEmbed);
    }
}