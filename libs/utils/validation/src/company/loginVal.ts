import {z} from "zod"

export const LoginVal = z.object({
    email: z.string().email().nonempty(),
    password: z.string(),
})


export type LoginVal = z.infer<typeof LoginVal>