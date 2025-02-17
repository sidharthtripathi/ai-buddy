import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { aiRouter } from './routes/ai'
import bodyParser from 'body-parser'
dotenv.config()
const server = express()

server.use(cors({
    origin : process.env.FRONTEND_URL,
    methods : ["GET","POST"],
    credentials : true
}))

server.use(bodyParser.json())

server.use('/api',aiRouter)

server.listen(3000)