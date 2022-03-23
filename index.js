const { AoiClient } = require("aoi.js");
const bot = new AoiClient({
    token: "your token",
    intents: ["Guilds", "GuildMessages"],
    prefix: "your prefix"
})
require('./handler/status')(bot)
require('./handler/events')(bot) 
bot.commands.load(`./commands/`)
bot.start()
