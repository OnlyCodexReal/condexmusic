module.exports = async (client) => {
    console.log(`Inicio de sesión correcto como ${client.user.username}\n-> Listo en ${client.guilds.cache.size} servers para un total de ${client.users.cache.size} users`);

    client.user.setActivity(client.config.app.playing);
};