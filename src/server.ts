import config from './config';
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes';
import errorHandler from "./middleware/error";

// require('dotenv').config({ path: "./src/config/config.env" });

const app = express()

const port = config.port || 5000
const uri: string = config.databaseURL || ''

app.use(cors())
app.use(express.json())

//router
app.use("/api/v1/users",userRouter);
app.use(errorHandler);

mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
