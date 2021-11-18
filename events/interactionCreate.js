module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `No hay música actualmente en reproducción ...  ? ❌`, ephemeral: true, components: [] });

            int.member.send(`Guardaste la pista ${queue.current.title} | ${queue.current.author} desde el servidor ${int.member.guild.name} ✅`).then(() => {
                return int.reply({ content: `Te he mandado el titulo de la musica por mensajes privados ✅`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `No se puede enviar un mensaje privado ... inténtelo de nuevo ? ❌`, ephemeral: true, components: [] });
            });
        }
    }
};