const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/playlist.m3u", (req, res) => {
    res.setHeader("Content-Type", "application/x-mpegURL");
    res.send(`#EXTM3U
#EXTINF:-1, Meu Canal IPTV
https://meu-video.com/stream.m3u8`);
});

app.listen(port, () => {
    console.log(`Servidor IPTV rodando na porta ${port}`);
});
