import {z} from 'zod'
export const historySchema = z.array(z.object({
    role : z.enum(["user","model"]),
    parts : z.array(z.object({text : z.string(),id:z.string()}))
}))
export const querySchema = z.object({
    query : z.string(),
    history : historySchema,
})
