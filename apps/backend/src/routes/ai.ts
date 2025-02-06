import express from 'express'
import { textChat } from '../libs/gemini'
export const aiRouter = express.Router()
aiRouter.post('/query',async(req,res)=>{
    const {query} =  req.body as {query : string}
    const response = await textChat(query)
    res.json({response})
})