import express from 'express'
import { textChat } from '../libs/gemini'
import { querySchema } from "schema"
export const aiRouter = express.Router()
aiRouter.post('/query',async(req,res)=>{
    try {
        const {query,history} =  querySchema.parse(req.body)
        const response = await textChat(query,history)
        res.json({response})
    } catch (error) {
        res.statusMessage = "invalid payload"
        console.log(error)
        res.status(400).end()
    }
})