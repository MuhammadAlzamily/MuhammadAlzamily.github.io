const app = require('express')();

const axios = require('axios').default;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/bored', (req, res) => {
    res.sendFile(__dirname + "/bored.html");
});

app.get('/todo', (req, res) => {
    res.sendFile(__dirname + "/todo.html");
});;

app.get('/prices', (req, res) => {
    res.sendFile(__dirname + "/btc-price.html");
});

app.listen(7777, () => {
    console.log("Server is up and running.....");
});