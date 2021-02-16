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
    kick = require('./modules/kick.js');

/**
 * Functions
 */
client.on('ready', async () => console.log(`Bot ${client.user.tag} has been successfully logged in.`));

client.on('message', async (msg) => {
    callbot.show(msg);
    help.show(msg);
    avatar.show(msg);
    kick.show(msg);
});

client.login(config.token);