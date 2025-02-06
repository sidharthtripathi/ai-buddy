import {GoogleGenerativeAI} from '@google/generative-ai'
import dotenv from 'dotenv'
dotenv.config()
const geminiKey = process.env.GEMINI_API_KEY!
const genAI = new GoogleGenerativeAI(geminiKey)
const model = genAI.getGenerativeModel({model : "gemini-2.0-flash"})
export async function textChat(prompt : string){
    const res =  await model.generateContent(prompt)
    return res.response.text()
}