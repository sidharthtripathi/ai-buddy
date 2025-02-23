import {GoogleGenerativeAI} from '@google/generative-ai'
import { historySchema } from 'schema'
import { z } from 'zod'
const geminiKey = process.env.GEMINI_API_KEY as string
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
