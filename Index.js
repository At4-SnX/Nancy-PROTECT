console.log("🚀 BOT START");

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;

if (!TOKEN) {
  console.error("❌ TOKEN MANQUANT");
  process.exit(1);
}

client.once('ready', () => {
  console.log(`✅ Connecté : ${client.user.tag}`);
});

client.login(TOKEN);