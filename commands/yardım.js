const { Client, EmbedBuilder } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "yardım",
  description: "Botun yardım menüsüne bakarsın!",
  type: 1,
  options: [],

  run: async(client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Moderasyon Bot - Yardım Menüsü!")
    .setDescription("**・Moderasyon Sistemi ↷**\n > Moderasyon Sistemi hakkında bilgi alabilirsiniz.\n \n**・Yardım-Destek Sistemi ↷**\n> Yardım-Destek Sistemi hakkında bilgi alabilirsiniz.")
    .setColor("Random")
    const row = new Discord.ActionRowBuilder()
    .addComponents(
new Discord.ButtonBuilder()
.setLabel("Moderasyon")
.setStyle(Discord.ButtonStyle.Secondary)
.setCustomId("moderasyon"),
new Discord.ButtonBuilder()
.setLabel("Yardım-Destek")
.setStyle(Discord.ButtonStyle.Primary)
.setCustomId("yardım"))
interaction.reply({embeds: [embed], components: [row], ephemeral: true})
  }

};
