module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        message.author.send(`Guardaste la pista ${queue.current.title} | ${queue.current.author} desde el servidor ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Te he mandado el titulo de la musica por mensajes privados ✅`);
        }).catch(error => {
            message.channel.send(`No puedo enviarte un mensaje privado. ${message.author}... Intentar otra vez ? ❌`);
        });
    },
};