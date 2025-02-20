import {GoogleGenerativeAI,Content} from '@google/generative-ai'
import dotenv from 'dotenv'
import { historySchema } from 'schema'
import { z } from 'zod'
dotenv.config()
const geminiKey = process.env.GEMINI_API_KEY!
const genAI = new GoogleGenerativeAI(geminiKey)
const model = genAI.getGenerativeModel({model : "gemini-2.0-flash"})
type ChatHistory = z.infer<typeof historySchema>
export async function textChat(prompt : string,history  : ChatHistory){
    const chat =  await model.startChat({
        history
    })
    const result = await chat.sendMessage(prompt)
    return result.response.text()
    
}
