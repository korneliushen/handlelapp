import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Epost er påkrevd"
    }),
    password: z.string().min(1, {
        message: "Passord er påkrevd"
    })
})