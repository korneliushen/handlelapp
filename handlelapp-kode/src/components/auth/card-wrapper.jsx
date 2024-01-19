'use client'
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Header } from "./header"
import { Social } from "./social"
import { Backbutton } from "./back-button"

export default function CardWrapper({ children, headerLabel, backButtonLabel, backButtonHref, showSocial }) {
    return (
        <>
            <Card className='w-[400px] shadow-md'>
                <CardHeader>
                    <Header label={headerLabel} />
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {showSocial && (
                    <CardFooter>
                        <Social />
                    </CardFooter>
                )}
                <CardFooter>
                    <Backbutton label={backButtonLabel} href={backButtonHref}

                    />
                </CardFooter>
            </Card>
        </>
    )
}