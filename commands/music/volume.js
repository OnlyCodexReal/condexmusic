const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`El volumen actual es ${queue.volume} 🔊\n*Para cambiar el volumen, ingrese un número válido entre ** 1 ** y **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`El volumen que desea cambiar ya es el actual ${message.author}... Intentar otra vez ? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`El número especificado no es válido. Ingrese un número entre ** 1 ** y **${maxVol}** ${message.author}... Intentar otra vez ? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `El volumen se ha modificado para **${vol}**/**${maxVol}**% 🔊` : `Algo ha salido mal ${message.author}... Intentar otra vez ? ❌`);
    },
};