const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { response } = require('express');
const PORT = process.env.PORT;
const movieController = require('./controllers/Moveies.controllers');
const wether = require('./controllers/Wether.Controller');
app.use(cors());
app.get('/weather', wether);

app.get('/movies', movieController);
app.listen(PORT, () => console.log(PORT))



