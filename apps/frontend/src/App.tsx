import {ScrollArea} from '@/components/ui/scroll-area'
import {Card,CardContent} from '@/components/ui/card'
import {Markdown} from "./components/Markdown"
import  { useRef, useState } from "react"
import PromptForm from './components/Form'
import {historySchema} from 'schema'
import { z } from 'zod'
type History = z.infer<typeof historySchema>
function App() {
  const [history,setHistory] = useState<History>([])
  const scrollRef = useRef<null | HTMLDivElement>(null)
return (
  <div className="flex flex-col h-screen ">
      <ScrollArea className="flex-1 p-4 h-[calc(100vh-4rem)]" ref={scrollRef}>
        {history.map((message,idx) => (
          <div key={idx} className={`flex ${message.role === "user" ? 'justify-end' : 'justify-start'} mb-4`}>
            <Card className={`max-w-[70%] ${message.role === "user" && 'bg-primary text-primary-foreground'}`}>
              <CardContent className="p-3">
                <Markdown content={message.parts.at(0)?.text as string} />
              </CardContent>
            </Card>
          </div>
        ))}
      </ScrollArea>
      <PromptForm setHistory={setHistory} history={history}  />
    </div>
)
}

export default App