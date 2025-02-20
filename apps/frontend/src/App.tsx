import {ScrollArea} from '@/components/ui/scroll-area'
import {Card,CardContent} from '@/components/ui/card'
import {Markdown} from "./components/Markdown"
import  { useRef, useState } from "react"
import PromptForm from './components/Form'
import {historySchema} from 'schema'
import { z } from 'zod'
import { RetroGrid } from './components/magicui/retro-grid'
type History = z.infer<typeof historySchema>
function App() {
  const [history,setHistory] = useState<History>([])
  const scrollRef = useRef<null | HTMLDivElement>(null)
return (
  <div className="flex flex-col h-screen ">
      <ScrollArea className="flex-1 p-4 h-[calc(100vh-4rem)]" ref={scrollRef}>
        {
          history.length===0 ? <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
          
          
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">Just ask something</span>
          
        
     
          <RetroGrid opacity={1} angle={20} cellSize={100}/>
        </div> : <div>
            {history.map((message,idx) => (
          <div key={idx} className={`flex ${message.role === "user" ? 'justify-end' : 'justify-start'} mb-4 animate-jump animate-once`}>
            <Card className={`max-w-[70%] ${message.role === "user" && 'bg-primary text-primary-foreground'}`}>
              <CardContent className="p-3">
                <Markdown content={message.parts.at(0)?.text as string} />
              </CardContent>
            </Card>
          </div>
        ))}
          </div>
        }
        
      </ScrollArea>
      <PromptForm setHistory={setHistory} history={history}  />
    </div>
)
}

export default App