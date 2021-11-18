player.on('error', (queue, error) => {
    console.log(`Error emitido desde la cola ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitido por la conexión ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Empezó a sonar ${track.title} en **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Pista ${track.title} agregada en la cola ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Me desconectaron manualmente del canal de voz, despejando la cola... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Nadie está en el canal de voz, saliendo del canal de voz... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('La cola de reproducción ha terminado ✅');
});