const
    {Client, MessageEmbed} = require('discord.js'),
    client = new Client(),
    
    config = require('../../config/config.json');

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}help`)) {
        const embed = new MessageEmbed()
            .setColor('#3366cc')
            .setAuthor('POBOT', 'https://i.ibb.co/gm5VRN5/pobot-logo.png')
            .setThumbnail('https://i.ibb.co/gm5VRN5/pobot-logo.png')
            .addFields(
                {
                    name: 'Player commands',
                    value: `${config.prefix}callbot, ${config.prefix}avatar, ` +
                    `${config.prefix}covidtest, ${config.prefix}sexy, ${config.prefix}gay`
                },
                {
                    name: 'Admin commands',
                    value: `${config.prefix}ban, ${config.prefix}kick, ${config.prefix}clear`,
                    inline: true
                }
            )
            .setImage('https://i.ibb.co/1Zm36g4/po-logo-mini.png')
            .setTimestamp()
            .setFooter('Copyright © 2021 | PAWN Overflow BOT', 'https://i.ibb.co/gm5VRN5/pobot-logo.png');

        msg.channel.send(embed);
        msg.react('💡');
    }
}