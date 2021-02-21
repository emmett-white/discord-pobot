const
    {Client, MessageEmbed} = require('discord.js'),
    client = new Client(),

    config = require('../../config/config.json');

let
    sexyGifs = [
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
        'https://steamuserimages-a.akamaihd.net/ugc/2439139102320076779/8BDA26377278E4B1AF100122910A08098E16F762/',
        'https://steamuserimages-a.akamaihd.net/ugc/832448860123035131/DB0A69BB24E419FB5B7DCBD4EC2E57F41CFC3E5C/',
        'https://steamuserimages-a.akamaihd.net/ugc/367409625755932324/4A49593727ED3014EEEF92EDB7159BC8D171DFD4/',
        'http://www.myconfinedspace.com/wp-content/uploads/tdomf-2/502114/bounce-a-sexy-girls-031-11032014.gif',
        'https://i.imgur.com/NvzOtW9.gif',
        'https://media.giphy.com/media/8qABb3dgjun8PdNirg/giphy.gif',
        'https://media.giphy.com/media/dK0tjRx03fhlK/giphy.gif',
        'https://media.giphy.com/media/6D0dubMvJUtAA/giphy.gif',
        'https://media.giphy.com/media/RzqhECDimSgLK/giphy.gif',
        'https://media.giphy.com/media/B77Yj3aZYZjmE/giphy.gif',
        'https://media.giphy.com/media/PIDxvqJNkrOrC/giphy.gif',
        'https://media.giphy.com/media/5xtDarqnr5v6Ky82HaU/giphy.gif',
        'https://media.giphy.com/media/k0IljLfqC7j6o/giphy.gif',
        'https://steamuserimages-a.akamaihd.net/ugc/494645187191502931/FE01AB11E3EC13B7A98D24CF9D7DC31CF810DA30/',
        'https://i.pinimg.com/originals/aa/dc/b2/aadcb21ac6cdac390fd4de6f6eb9d16f.gif'
    ],

    hentaiGifs = [
        'https://i.pinimg.com/originals/11/61/8e/11618eedcffec1e8c4d570ebc9552529.gif',
        'https://media1.tenor.com/images/ca132e038280886d632c7322d504aa74/tenor.gif',
        'https://pa1.narvii.com/6275/46581b79a5c8189ad47ee9b4b2e9f1e684eed573_hq.gif',
        'https://steamuserimages-a.akamaihd.net/ugc/1652216789670658475/0B9874C674A17870BE217AB35F14BC4C17A5E260/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        'https://i.imgur.com/4VSDYXm.gif',
        'https://i.pinimg.com/originals/98/81/3f/98813f3fa2968d6da6ffa2ad0c6ad0f5.gif',
        'https://media1.tenor.com/images/8b1f74f932def6dc6f8582f363bc1516/tenor.gif?itemid=12365130',
        'https://thumbs.gfycat.com/AlarmingWhimsicalHuia-size_restricted.gif',
        'https://37.media.tumblr.com/d46ae2e945e6d982870271137e6578fd/tumblr_mzm7aqcv9K1s917bwo1_400.gif',
        'https://i.kym-cdn.com/photos/images/original/001/068/462/b9d.gif',
        'https://i.imgur.com/LaEYM5b.gif',
        'https://steamuserimages-a.akamaihd.net/ugc/451859561979519167/50D74B0875B1018AF07B1AD66F64CDD88AB5C651/',
        'https://data.whicdn.com/images/329947544/original.gif',
        'https://steamuserimages-a.akamaihd.net/ugc/942833979466904045/316DABD1F0F86FD5C55F1BF964663E8735332228/',
        'https://steamuserimages-a.akamaihd.net/ugc/945096485101824614/BC017762C74F3D24319A77BA19BC4D155DE93B9D/',
        'https://qph.fs.quoracdn.net/main-qimg-d1c1acca4c67d925327d3fce14e4bfcd'
    ];

exports.callfunc = async (msg) => {
    const embed = new MessageEmbed();

    switch (msg.content) {
        case `${config.prefix}sexy`: {
            embed
                .setColor(0x3366cc)
                .setImage(sexyGifs[Math.floor(Math.random() * sexyGifs.length)]);

            msg.channel.send(embed);

            break;
        }

        case `${config.prefix}hentai`: {
            embed
                .setColor(0x3366cc)
                .setImage(hentaiGifs[Math.floor(Math.random() * hentaiGifs.length)]);

            msg.channel.send(embed);
        }
    }
}