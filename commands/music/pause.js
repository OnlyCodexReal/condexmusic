module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `CMusica actual ${queue.current.title} pausada ✅` : `Algo ha salido mal ${message.author}... intentar otra vez ? ❌`);
    },
};