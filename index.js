const { Client, Events, GatewayIntentBits } = require("discord.js");
const express = require('express')
const app = express()
const port = 3000
const dotenv = require(`dotenv`);
dotenv.config();
const token = process.env.token;
const clientId = process.env.clientId;
const guildId = process.env.guildId;
// Create a new client instance
app.get('/', (req, res) => {

const client = new Client({
  intents: [
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
  ],
});
let star ;

  client.once(Events.ClientReady, async c => {
	let guild = await client.guilds.fetch(guildId)
let member = await guild.members.fetch("762494394552025109")
star = member.presence.activities
await res.json(star)
});
client.login(token);

})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
