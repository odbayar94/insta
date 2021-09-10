import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes'

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

app.use(cors())
app.use(express.json())

//router
app.use(userRouter);

// mongoose.connect(uri)
mongoose.connect('mongodb+srv://admin:gqA9N9njOdOZE1od@cluster0.nvm7v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
