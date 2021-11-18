const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No hay música en la cola después de la actual ${message.author}... intentar otra vez ? ❌`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`Cola del servidor - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Pedida por : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `y **${songs - 5}** otra(s) canción(es)...` : `En la lista de reproducción **${songs}** cancion(es)...`;

        embed.setDescription(`Actual ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};