const
    {Client, MessageEmbed} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

let memeImages = [
    'https://media.giphy.com/media/Qd7F5NcMFcTio/giphy.gif',
    'https://i.ytimg.com/vi/23yPcbOcDlE/hqdefault.jpg',
    'https://i1.wp.com/pcpress.rs/wp-content/uploads/2018/08/mim1.jpg',
    'https://www.xxzmagazin.com/public/ck/uploads/images/2017/07/810xauto/Mim-01-t.jpg',
    'https://pbs.twimg.com/media/D8ZuKG1XoAATVY0.png',
    'https://memegenerator.net/img/instances/69241663.jpg',
    'https://specials-images.forbesimg.com/imageserve/5e740f3207adf00006db9d14/960x0.jpg',
    'https://i.pinimg.com/originals/5d/a7/2a/5da72a97cfdadb61737c033ff1820df0.png',
    'http://images3.memedroid.com/images/UPLOADED331/5c2f62e2b3102.jpeg',
    'https://brobible.com/wp-content/uploads/2020/05/50-best-memes-dad-came-back.jpg',
    'https://www.okirobo.com/wp-content/uploads/sites/24/2019/09/best_iphone_memes_2020.jpg',
    'https://i.pinimg.com/originals/e3/e1/d5/e3e1d51710595c4741fd60d6a6741780.jpg',
    'https://content.api.news/v3/images/bin/4d401a14a40c0301f97214fd0bf11b78',
    'https://fourloko.com/best-memes-of-2020/images/2b.png',
    'https://fourloko.com/best-memes-of-2020/images/2a.png',
    'https://pd-beamliving-cd.beamliving.com/-/media/bu-to-ch/cat-meme-netflix-funny-1000x666.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PtBXmMJFS9smU7-jaaazs3bcCVqsw591RQ&usqp=CAU',
    'https://www.wearethemighty.com/app/uploads/legacy/assets.rbl.ms/22934013/origin.png'
]

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}meme`)) {
        const embed = new MessageEmbed()
            .setColor(0x3366cc)
            .setImage(memeImages[Math.floor(Math.random() * memeImages.length)]);

        msg.channel.send(embed);
    }
}