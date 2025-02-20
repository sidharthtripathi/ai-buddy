import {ScrollArea} from '@/components/ui/scroll-area'
import {Card,CardContent} from '@/components/ui/card'
import {Markdown} from "./components/Markdown"
import {Button} from '@/components/ui/button'
import { SendIcon } from "lucide-react"
import  { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import {v4 as uuid} from 'uuid'
import { timeAgo } from "./lib/utils"
import { server } from './lib/axios'
import { Textarea } from './components/ui/textarea'
import { MessageType,Sender,FormType } from './types/formSchema'


function App() {
  const [messages,setMessages] = useState<MessageType[]>([])
  const {register,handleSubmit,reset,formState : {isSubmitting}} = useForm<FormType>()
  const scrollRef = useRef<null | HTMLDivElement>(null)
  async function onSubmit({prompt} : FormType){
    setMessages(p=>([...p,{content :prompt,id : uuid(),sender : Sender.SELF,time : timeAgo.format(new Date()) }]))
    const {data : {response}} = await server.post("/api/query",{query : prompt })
    setMessages(p=>([...p,{id:uuid(),content : response,sender : Sender.BOT,time : timeAgo.format(new Date())}]))
    reset()
}
return (
  <div className="flex flex-col h-screen ">
      <ScrollArea className="flex-1 p-4 h-[calc(100vh-4rem)]" ref={scrollRef}>
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === Sender.SELF ? 'justify-end' : 'justify-start'} mb-4`}>
            <Card className={`max-w-[70%] ${message.sender === Sender.SELF && 'bg-primary text-primary-foreground'}`}>
              <CardContent className="p-3">
                <Markdown content={message.content} />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{message.time}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </ScrollArea>
      <footer className="p-4 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
          < Textarea placeholder="Ask Prompot" className="flex-1"
          disabled = {isSubmitting}
          autoFocus
          autoComplete="off"
          {...register("prompt",{required: true})}
          />
          <Button type="submit" size="icon" disabled = {isSubmitting}>
            <SendIcon className="h-4 w-4" />
          </Button>
        </form>
      </footer>
    </div>
)
}

export default App