const app = require('express')();

const axios = require('axios').default;

const server = require('http').createServer(app);

const { Server } = require('socket.io');

const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/bored', (req, res) => {
    res.sendFile(__dirname + "/bored.html");
});

app.get('/todo', (req, res) => {
    res.sendFile(__dirname + "/todo.html");
})

io.on('connection', async (socket) => {
    try {
        setInterval(async () => {
            const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
            io.emit('price-update', { price: res.data.bpi });
        }, 5000)
    } catch (err) {
        throw err;
    }
})

server.listen(3000, () => {
    console.log("Server is up and running.....");
})

