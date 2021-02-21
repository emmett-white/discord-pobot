/**
 * Constants
 */
const
    {Client, MessageEmbed, Message} = require('discord.js'),
    client = new Client(),
    
    /**
     * Modules
     */
    config = require('../config/config.json'),
    callbot = require('./modules/callbot.js'),
    help = require('./modules/help.js'),
    avatar = require('./modules/avatar.js'),
    kick = require('./modules/kick.js'),
    covid19 = require('./modules/covid19.js'),
    sexygif = require('./modules/sexy.js'),
    gay = require('./modules/gay.js'),
    clear = require('./modules/clear.js'),
    eww = require('./modules/eww.js'),
    memes = require('./modules/memes.js');

/**
 * Functions
 */
client.on('ready', async () => {
    client.user.setActivity('$help', ({type: "LISTENING"}));

    console.log(`Bot ${client.user.tag} has been successfully logged in.`);
});

client.on('message', async (msg) => {
    callbot.callfunc(msg);
    help.callfunc(msg);
    avatar.callfunc(msg);
    kick.callfunc(msg);
    covid19.callfunc(msg);
    sexygif.callfunc(msg);
    gay.callfunc(msg);
    clear.callfunc(msg);
    eww.callfunc(msg);
    memes.callfunc(msg);
});

client.login(config.token);