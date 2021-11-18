module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`No hay música actualmente en reproducción ${message.author}... intentar otra vez ? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Especifique un filtro válido para habilitar o deshabilitar ${message.author}... intentar otra vez ? ❌\n${actualFilter ? `Filtro actualmente activo ${actualFilter} (${client.config.app.px}filtro ${actualFilter} para deshabilitarlo).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Este filtro no existe ${message.author}... intentar otra vez ? ❌\n${actualFilter ? `Filtro actualmente activo ${actualFilter}.\n` : ''}Lista de filtros disponibles ${filters.map(x => `**${x}**`).join(', ')}.`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`El filtro ${filter} ahora esta **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*Recuerde que cuanto más larga sea la música, más tardará.*`);
    },
};