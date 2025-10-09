// import from node_modules
const express = require('express')

// blijkbaar bestaat er een functie express(), 
// ik ga dit toevoegen in de variable app
// en later settings aan toe voegen
const app = express()
app.use(express.json());
console.log("API IS UP AND RUNNING, BABY....")

// Endpoints 
const goatsRouter = require('./routes/goats');
const artistsRouter = require('./routes/artists');

app.use('/goats', goatsRouter);
app.use('/artists', artistsRouter);


app.listen(3000)