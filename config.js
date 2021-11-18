module.exports = {
    app: {
        px: '°',
        token: 'OTEwOTI3MzE3MzAyMzg2Njk5.YZZ9LA.zRmemVoq3TSKZmhB0cNsahNxGo8',
        playing: 'Escuchando musica'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
