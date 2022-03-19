const { AoiClient } = require("aoi.js");
const bot = new AoiClient({
    token: process.env.lynxToken,
    intents: ["guilds", "guildMessages"],
    prefix: ","
})
require('./handler/status')(bot)
require('./handler/events')(bot) 
bot.commands.load(`./commands/`)
bot.start()