// import from node_modules
const express = require('express')

// blijkbaar bestaat er een functie express(), 
// ik ga dit toevoegen in de variable app
// en later settings aan toe voegen
const app = express()

console.log("API IS UP AND RUNNING, BABY....")

// Endpoints 
const goatsRouter = require('./routes/goats');

app.use('/goats', goatsRouter);


app.listen(3000)