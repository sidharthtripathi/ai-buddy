import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { aiRouter } from './routes/ai'
import bodyParser from 'body-parser'
const server = express()
server.use(cors({
    origin : process.env.FRONTEND_URL,
    methods : ["GET","POST"],
    credentials : true
}))

server.use(bodyParser.json())

server.use("/api/status",(req,res)=>{
    res.end("server is up")
})
server.use('/api',aiRouter)

server.listen(3000)