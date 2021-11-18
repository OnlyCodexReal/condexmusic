module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`No habia ninguna canción sonando antes ${message.author}... intentar otra vez ? ❌`);

        await queue.back();

        message.channel.send(`Reproducción de la pista **anterior** ✅`);
    },
};