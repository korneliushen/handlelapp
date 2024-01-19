'use server'

import * as z from "zod"

import { RegisterSchema } from "@/lib/schemas"

export async function register(values) {
    const validatedFields = RegisterSchema.safeParse(values)
    if (!validatedFields.success) {
        return {error: "invalid fields"}
    }
    return {success: "email sent"}
}