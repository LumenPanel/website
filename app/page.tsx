'use client';

import { cn } from '@/lib/utils';

import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import FadeUp from '@/components/fade-up';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import {
    PageActions,
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/ui/header';

import Features from './features';

export default function Home() {
    return (
        <main>
            <FadeUp>
                <section className='lg:flex items-center mt-16 mx-2'>
                    <PageHeader className='flex-grow mt-4'>
                        <PageHeaderHeading className='max-w-3xl'>
                            Server Management
                            <br />
                            <u>Made Simple</u>
                        </PageHeaderHeading>
                        <PageHeaderDescription>
                            Beautifully designed and modern VPS, LXC and
                            GameServer management panel with integrated billing.
                        </PageHeaderDescription>
                        <PageActions className='flex space-x-4'>
                            <Button className='w-36' asChild>
                                <Link href='/docs/get-started'>
                                    Get Started
                                </Link>
                            </Button>
                            <Link
                                target='_blank'
                                rel='noreferrer'
                                href='https://github.com/LumenPanel/panel'
                                className={cn(
                                    buttonVariants({ variant: 'outline' }),
                                    'w-36 flex items-center'
                                )}
                            >
                                <Github className='mr-2 h-4 w-4' />
                                GitHub
                            </Link>
                        </PageActions>
                    </PageHeader>

                    <Image
                        src='/screenshots/server-list.webp'
                        alt={'Server List'}
                        width={3840 / 5}
                        height={2134 / 5}
                    />
                </section>
            </FadeUp>
            <Features />
        </main>
    );
}
