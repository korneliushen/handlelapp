'use server'

import * as z from "zod"
import bcrypt from "bcrypt"

import { RegisterSchema } from "@/lib/schemas"
import { db } from "@/lib/db"
import { getUserByEmail } from "../data/user"

export async function register(values) {
    const validatedFields = RegisterSchema.safeParse(values)
    if (!validatedFields.success) {
        return {error: "invalid fields"}
    }
    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
        return {error: "Email already in use"}
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })
    return {success: "email sent"}
}