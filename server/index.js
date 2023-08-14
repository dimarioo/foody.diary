require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./Models/User')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)


const app = express ()



app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
app.post('/signup', async (req,res) =>{
    const {username, password} = req.body
    try{
        const userDoc = await User.create({username, password:bcrypt.hashSync(password,salt)})
        res.json(userDoc)
    }catch(e){
        res.status(400).json(e)
    }

    
} )


app.listen(3001)

