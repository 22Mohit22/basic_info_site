require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

function showFile(fileName) {
    return path.join(__dirname, `/pages/${fileName}`);
}

const Port = process.env.PORT;

app.get('/', (req, res) => {
        res.sendFile(showFile('index.html'), err => console.log(err));
    }
);
app.get('/about', (req, res) => {
        res.sendFile(showFile('about.html'), err => console.log(err));
    }
);
app.get('/contact-me', (req, res) => {
        res.sendFile(showFile('contact-me.html'), err => console.log(err));
    }
);
app.use((req, res) => {
        res.status(404).sendFile(showFile('404.html'), err => console.log(err));
    }
);


app.listen(Port, () => console.log('App running on port ', Port));