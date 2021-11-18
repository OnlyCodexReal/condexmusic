const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Primero debe deshabilitar la música actual en el modo de lopp (${client.config.app.px}loop) ${message.author}... intentar otra vez ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo de repetición **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** toda la cola se repetirá sin cesar 🔁` : `Algo ha salido mal ${message.author}... intentar otra vez ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Primero debe deshabilitar la cola actual en el modo de lopp (${client.config.app.px}loop queue) ${message.author}... intentar otra vez ? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo de repetición **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** la música actual se repetirá sin cesar (puede recorrer la cola con la opción <queue>) 🔂` : `Algo ha salido mal ${message.author}... intentar otra vez ? ❌`);
        };
    },
};