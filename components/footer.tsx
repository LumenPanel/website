import { Github } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

export function Footer() {
    return (
        <div className='border-t py-4 absolute mt-12 left-0 right-0'>
            <div className='max-w-screen-xl m-auto text-foreground/90 justify-between flex-grow flex'>
                <div className='my-auto mr-2'>
                    © 2023-2024{' '}
                    <Link
                        className='my-auto text-foreground hover:underline duration-75 hover:text-white'
                        href={'https://olekaleksander.dev'}
                    >
                        OlekAleksander
                    </Link>
                </div>
                <Link
                    className={cn(buttonVariants({ variant: 'ghost' }), "mr-2")}
                    href={'https://github.com/LumenPanel/panel'}
                >
                    <Github className='h-5 w-5'/>
                </Link>
            </div>
        </div>
    );
}
