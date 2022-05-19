// const {Client, Intents} = require ('discord.js');

// require ("dotenv").config();

// const client = new Client({
//     intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
// });
// client.once('ready', (bot) => {
//     console.log(`Bot: ${bot.user.username}\nStatus: ${bot.presence.status} `);
// });

// client.login(process.env.DSTOKEN);

const Discord = require ('discord.js');
const config = require ('')
require('colors')
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
    ]
})

client.commands = new Discord.Collection();

function requerirHandlers(){
    ["command", "events"].forEach(handler => {
        try{
            require(`./handlers/${handler}`)(client, Discord)
        }catch(e){
            console.warn(e)
        }
    })
}

requerirHandlers();

client.login(client.token)