const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`El tiempo indicado es mayor que el tiempo total de la canción actual ${message.author}... Intentar otra vez ? ❌\n*Try, por ejemplo, un tiempo válido como ** 5 s, 10 s, 20 segundos, 1 m ** ... *`);

        await queue.seek(timeToMS);

        message.channel.send(`Hora establecida en la canción actual **${ms(timeToMS, { long: true })}** ✅`);
    },
};