'use client'
import CardWrapper from "@/components/auth/card-wrapper"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/lib/schemas"

import { Input } from "@/components/ui/input"

import { useTransition } from "react"

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
import { login } from "@/actions/login"

export function LoginForm() {
    const [isPending, startTransition] = useTransition()
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    const onSubmit = (values) => {
        startTransition(() => {
            login(values)
        })
    }
    return (
        <>
            <CardWrapper headerLabel={'Velkommen tilbake'}
                backButtonLabel={"Har du ikke en konto?"}
                backButtonHref={'./auth/register'}
                showSocial={true} >
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
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
                        <FormError message={''} />
                        <FormSuccess message={''} />
                        <Button type="submit" className='w-full'>
                            Logg inn
                        </Button>
                    </form>
                </Form>
            </CardWrapper>
        </>
    )
}