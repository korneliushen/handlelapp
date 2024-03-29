'use server'

import * as z from "zod"

import { LoginSchema } from "@/lib/schemas"

export async function login(values) {
    const validatedFields = LoginSchema.safeParse(values)
    if (!validatedFields.success) {
        return {error: "invalid fields"}
    }
    return {success: "email sent"}
}