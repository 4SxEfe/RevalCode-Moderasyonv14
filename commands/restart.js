const { Client, EmbedBuilder, PermissionsBitField } = require("discord.js");
module.exports = {
    name:"gs-reset",
    description: 'Galatasaray Botunu Yeniden Başlat!',
    type:1,

  run: async(client, interaction) => {
    if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({content: "Yönetici İzinin Yok!", ephemeral: true})
    await interaction.reply({ content: `__**Bot**__ yeniden başlatılıyor!`})
    process.exit(0)
}
  };

    
  
  