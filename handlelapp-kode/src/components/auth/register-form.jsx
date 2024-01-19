'use client'
import CardWrapper from "@/components/auth/card-wrapper"
import { set, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/lib/schemas"

import { Input } from "@/components/ui/input"

import { useTransition, useState } from "react"

import { Button } from "@/components/ui/button"

import {
    Form,
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
    FormItem
} from "@/components/ui/form"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-succes"
import { register } from "@/actions/register"

export function RegisterForm() {

    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const [isPending, startTransition] = useTransition()
    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = (values) => {
        setSuccess("")
        setError("")
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }
    return (
        <>
            <CardWrapper headerLabel={'Lag en konto'}
                backButtonLabel={"Har du allerede en konto?"}
                backButtonHref={'./login'}
                showSocial={true} >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field, formState }) => (
                                    <>
                                        <FormItem>
                                            <FormLabel>Navn</FormLabel>
                                        </FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isPending}
                                                placeholder="Ola Nordmann"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field, formState }) => (
                                    <>
                                        <FormItem>
                                            <FormLabel>E-post</FormLabel>
                                        </FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isPending}
                                                type="email"
                                                placeholder="ola.nordmann@example.com…"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field, formState }) => (
                                    <>
                                        <FormItem>
                                            <FormLabel>Passord</FormLabel>
                                        </FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isPending}
                                                type="password"
                                                placeholder="********"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </>
                                )}
                            />
                        </div>
                        <FormError message={error} />
                        <FormSuccess message={success} />
                        <Button type="submit" className='w-full'>
                            Lag konto
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </>
    )
}