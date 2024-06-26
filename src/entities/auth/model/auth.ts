import { z } from 'zod'

export const LoginSchemaRequest = z.object({
    email: z.string(),
    password: z.string(),
})

export const SignUpSchemaRequestData = z.object({
    email: z.string(),
    password: z.string(),
    fullName: z.string(),
})

export type LoginRequestData = z.infer<typeof LoginSchemaRequest>

export type SignUpRequestData = z.infer<typeof SignUpSchemaRequestData>
