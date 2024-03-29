'use client'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

export function Social() {
    return (
        <>
            <div className="flex items-center w-full gap-x-2">
                <Button size="lg" className="w-full">
                    <FcGoogle className='h-6 w-6' />
                </Button>
                <Button size="lg" className="w-full">
                    <FaGithub className='h-6 w-6' />
                </Button>
            </div>
        </>
    )
}