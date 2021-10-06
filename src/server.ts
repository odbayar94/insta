import config, {corsOptions} from './config';
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from "cookie-parser";

import userRouter from './routes/user';
import postRouter from './routes/post';
import errorHandler from "./middleware/error";

// require('dotenv').config({ path: "./src/config/config.env" });



const app = express();
app.use(cookieParser());


const port = config.port || 5000
const uri: string = config.databaseURL || ''


app.use(express.json())
app.use(cors(corsOptions))

//router
app.use("/api/v1/users",userRouter);
app.use("/api/v1/posts",postRouter);
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
