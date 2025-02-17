import express from 'express'
import { textChat } from '../libs/gemini'
import { querySchema } from '../schema/querySchema'
export const aiRouter = express.Router()
aiRouter.post('/query',async(req,res)=>{
    try {
        const {query} =  querySchema.parse(req.body)
        const response = await textChat(query)
        res.json({response})
    } catch (error) {
        res.statusMessage = "invalid payload"
        res.status(400).end()
    }
})