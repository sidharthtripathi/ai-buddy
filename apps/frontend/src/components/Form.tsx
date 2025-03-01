import { Textarea } from '@/components/ui/textarea'
import {Button} from '@/components/ui/button'
import { useForm } from "react-hook-form"
import { server } from '@/lib/axios'
import { SendHorizonalIcon } from "lucide-react"
import { historySchema } from 'schema'
import { z } from 'zod'
import { FormType } from '@/types/formSchema'
type History = z.infer<typeof historySchema>
export default function PromptForm({setHistory,history} : {setHistory : React.Dispatch<React.SetStateAction<History>>,history : History}){

    async function onSubmit({prompt} : FormType){
        setHistory(p=>([...p,{role : "user",parts : [{text : prompt}]}]))
        const {data : {response}} = await server.post("/api/query",{query : prompt,history })
        setHistory(p=>([...p,{role : "model",parts : [{text : response}]}]))
        reset()
    }
      const {register,handleSubmit,reset,formState : {isSubmitting}} = useForm<FormType>()
    return(
        <footer className="p-4 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
          < Textarea placeholder="Enter your prompt here" className="flex-1 overflow-y-hidden max-h-64 resize-none"
          disabled = {isSubmitting}
          rows={1}
          autoFocus
          autoComplete="off"
          {...register("prompt",{required: true})}
          />
          <Button type="submit" size="icon" disabled = {isSubmitting} className='bg-background hover:bg-background'>
            <SendHorizonalIcon className="size-4" color='white' />
          </Button>
        </form>
      </footer>
    )
}