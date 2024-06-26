import { z } from 'zod'

export const SingUpFormSchema = z.object({
    fullName: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(8),
})

export type SignUpFormValues = z.infer<typeof SingUpFormSchema>
