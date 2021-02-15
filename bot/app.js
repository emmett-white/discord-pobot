const
    {Client, MessageEmbed, Message} = require('discord.js'),
    client = new Client(),
    
    /**
     * Modules
     */
    config = require('../config/config.json'),
    callbot = require('./modules/callbot.js'),
    help = require('./modules/help.js');

// Initialisation
client.on('ready', async () => {
    console.log(`Bot ${client.user.tag} has been successfully logged in.`);
});

// Client messages
client.on('message', async (msg) => {
    callbot.show(msg);
    help.show(msg);
});

client.login(config.token);