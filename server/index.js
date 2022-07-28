const express = require('express')
const app = express()
// const configDb = require("./data/db")
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/authRoutes');
const PORT = process.env.PORT || 4000
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(
    "mongodb://localhost:27017/hamrohvdo"
    ).then(res => {
        console.log(`MongoDB is connected`);
        app.listen(PORT, console.log("server is running on port 4000"));
    });
    // configDb()
    app.use('/',route)
    
    
    
    