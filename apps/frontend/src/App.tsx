import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import PromptForm from "./components/Form";
import { historySchema } from "schema";
import { z } from "zod";
import EmptyChat from "./components/EmptyChat";
import { AIResponse } from "./components/ui/kibo-ui/ai/response";

type History = z.infer<typeof historySchema>;

function App() {
  const [history, setHistory] = useState<History>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (scrollRef.current) {
      console.log(scrollRef.current.scrollHeight);
      scrollRef.current.scrollTo({
        behavior: "smooth",
        top: scrollRef.current.scrollHeight,
      });
    }
  }, [history]);

  return (
    <div className="flex flex-col h-[100dvh] ">
      {
        history.length>0 ? <div
        ref={scrollRef}
        className="p-4 grow overflow-y-auto
      [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-primary-foreground
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-primary
      "
      >
        {history.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            } mb-4 animate-jump animate-once`}
          >
            <Card
              className={`md:max-w-[70%] ${
                message.role === "user" && "bg-primary text-primary-foreground"
              }`}
            >
              <CardContent className="p-3">
                <AIResponse>{message.parts.at(0)?.text as string}</AIResponse>
                {/* <Markdown content={message.parts.at(0)?.text as string} /> */}
              </CardContent>
            </Card>
          </div>
        ))}
      </div> : <EmptyChat/>
      }
      <PromptForm setHistory={setHistory} history={history} />
    </div>
  );
}

export default App;
