const Discord = require("discord.js")

const TOKEN = "" // my token was here

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "W"){
        message.reply("Congrats my folded squad, keep being amazing")
    } if (message.content == "L"){
        message.reply("Get them next time guys, hang in there")
    } if (message.content == "ace"){
        message.reply("absolutely stunning")
    } if (message.content == "fumbled"){
        message.reply("ah yes, fumbling is quite rough, but don't give up, never give up")
    } if (message.content == "TJ Cep Brandon Aybihnayve and Poop"){
        message.reply("folded squad all together... brilliant")
    }
})

client.login(TOKEN)

