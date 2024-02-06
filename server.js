const express  = require('express')
const cors = require('cors')
const connectDB = require("./db/connect")

require('dotenv').config();
    
const app = express();

app.use(cors());
app.use(express.json());

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('/exercise',exercisesRouter )
app.use('/users',usersRouter)

const port = process.env.PORT || 3000
  const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port ,console.log(`Server  is listening  on ${port}...`))
    } catch(error){
        console.log(error)
    }
  }

start()