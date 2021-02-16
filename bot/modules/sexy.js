const
    {Client} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

let sexyGifs = [
    'https://media1.tenor.com/images/33b2141ce042f663cf8a141b1783d1d8/tenor.gif',
    'https://i.pinimg.com/originals/a4/5c/02/a45c0233f7377c0a1a069db739957d55.gif',
    'https://cdn63.picsart.com/190855888000202.gif?to=min&r=640',
    'https://data.whicdn.com/images/351230372/original.gif',
    'http://38.media.tumblr.com/635dcf82b8a07b2da9617c17975f57c4/tumblr_nahy1i3rke1tnwpamo1_500.gif',
    'https://i.pinimg.com/originals/c9/eb/13/c9eb13b7a639d18dcade41865d551402.gif',
    'https://i.pinimg.com/originals/79/4c/7c/794c7c91c034da20fe7a23add15f3eef.gif',
    'https://steamuserimages-a.akamaihd.net/ugc/777280569358228200/65A0AD13702144B1614787BDEB74DCA38590E168/',
    'https://i.pinimg.com/originals/70/da/a1/70daa116465172ba48b1c3803ec8ab78.gif',
    'https://i.makeagif.com/media/2-26-2016/Zu9jYd.gif',
    'https://images.gr-assets.com/hostedimages/1527106418ra/25586789.gif',
    'https://images.gr-assets.com/hostedimages/1527106418ra/25586790.gif',
    'https://i.pinimg.com/originals/7c/da/0e/7cda0e209e1fd6bb9c371706ec9f7433.gif',
    'https://steamuserimages-a.akamaihd.net/ugc/2439139102320076779/8BDA26377278E4B1AF100122910A08098E16F762/'
]

exports.callfunc = async (msg) => {
    if (msg.content.startsWith(`${config.prefix}sexy`)) {
        const answer = sexyGifs[Math.floor(Math.random() * sexyGifs.length)];
        msg.channel.send(answer);
    }
}