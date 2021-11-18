module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Musica actual ${queue.current.title} reanudada ✅` : `Algo ha salido mal ${message.author}... intentar otra vez ? ❌`);
    },
};