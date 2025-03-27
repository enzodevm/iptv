const express = require("express");
const { exec } = require("child_process");

const app = express();
const port = process.env.PORT || 3000;
const videoURL = "https://youtu.be/NtjWUBs3ZR0?si=H2kOtyoeV7Rr1HdO"; // Altere para seu vídeo

app.get("/playlist.m3u", (req, res) => {
    exec(`yt-dlp -g -f best "${videoURL}"`, (err, stdout) => {
        if (err) {
            res.status(500).send("Erro ao obter link do YouTube.");
            return;
        }

        const videoLink = stdout.trim();
        res.setHeader("Content-Type", "application/x-mpegURL");
        res.send(`#EXTM3U
#EXTINF:-1, Meu Canal IPTV
${videoLink}`);
    });
});

app.listen(port, () => {
    console.log(`Servidor IPTV rodando na porta ${port}`);
});
