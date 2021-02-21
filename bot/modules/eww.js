const
    {Client, MessageEmbed} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

let ewwGifs = [
    'https://8list.ph/wp-content/uploads/2015/07/Eww-8-Gross-Things-People_p1.gif',
    'https://149363654.v2.pressablecdn.com/wp-content/uploads/2014/02/tumblr_mzcogxEe3S1rchh26o2_250.gif',
    'https://www.mandatory.com/assets/uploads/2017/03/giphy-7.gif',
    'https://www.mandatory.com/assets/uploads/gallery/couples-disgusting-things/wiping.gif',
    'https://daddyburnsthesalad.files.wordpress.com/2016/01/anigif_enhanced-12482-1412186839-10.gif?w=335',
    'https://img.buzzfeed.com/buzzfeed-static/static/2017-08/22/10/asset/buzzfeed-prod-fastlane-02/anigif_sub-buzz-3124-1503411558-5.gif',
    'https://img2.thejournal.ie/inline/2443451/original/?width=500&version=2443451',
    'https://i.pinimg.com/originals/89/4d/8e/894d8e04a63f55cf55d6af6ab4fce8f0.gif',
    'https://media1.giphy.com/media/12P6AnN6DcQj1S/giphy.gif',
    'https://hips.hearstapps.com/esq.h-cdn.co/assets/16/48/1480712905-giphy-96.gif?crop=0.85xw:1xh;center,top&resize=640:*',
    'https://media.tenor.com/images/116ee75e07215cfe3ecc86abca941702/tenor.gif',
    'https://media.tenor.com/images/dd97ce6e91a46650bbb473eaa5e2ba48/tenor.gif'
];

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}eww`)) {
        const embed = new MessageEmbed()
            .setColor(0x3366cc)
            .setImage(ewwGifs[Math.floor(Math.random() * ewwGifs.length)]);

        msg.channel.send(embed);
    }
}