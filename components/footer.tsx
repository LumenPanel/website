import { Github } from 'lucide-react';
import Link from 'next/link';

import { buttonVariants } from './ui/button';

export function Footer() {
    return (
        <div className='border-t py-4 absolute mt-12 left-0 right-0'>
            <div className='max-w-screen-2xl mx-4 m-auto text-foreground/90 justify-between flex-grow flex'>
                <div className='my-auto'>
                    © 2023-2024{' '}
                    <Link
                        className='my-auto text-foreground hover:underline duration-75 hover:text-white'
                        href={'https://olekaleksander.dev'}
                    >
                        OlekAleksander
                    </Link>
                </div>
                <Link
                    className={buttonVariants({ variant: 'ghost' })}
                    href={'https://github.com/LumenPanel/panel'}
                >
                    <Github className='h-5 w-5'/>
                </Link>
            </div>
        </div>
    );
}
