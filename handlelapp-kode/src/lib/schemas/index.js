import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Epost er påkrevd"
    }),
    password: z.string().min(1, {
        message: "Passord er påkrevd"
    })
})
export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Epost er påkrevd"
    }),
    password: z.string().min(8, {
        message: "Minst 8 karakterer påkrevd"
    }),
    name: z.string().min(1, {
        message: "Navn er påkrevd"
    })
})