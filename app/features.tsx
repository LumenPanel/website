'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import FadeIn from '@/components/fade-in';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Features() {
    const [textIndex, setTextIndex] = useState(0);
    const texts = ['servers', 'files', 'configuration', 'clients', 'plans'];
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);
    return (
        <section id='features' className='mt-24 select-none'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <FadeIn>
                    <Card className='overflow-hidden h-72'>
                        <CardContent className='relative h-full'>
                            <motion.div
                                animate={{
                                    backgroundPosition: ['0% 0%', '100% 100%'],
                                    backgroundImage: [
                                        `radial-gradient(farthest-corner, hsl(210 20% 98%), hsl(210 20% 98%))`,
                                        'radial-gradient(farthest-corner, hsl(224 71.4% 4.1%), hsl(210 20% 98%))',
                                        'radial-gradient(farthest-corner, hsl(224 71.4% 4.1%), hsl(224 71.4% 4.1%))',
                                        'radial-gradient(farthest-corner, hsl(210 20% 98%), hsl(210 20% 98%))',
                                    ],
                                }}
                                transition={{
                                    backgroundPosition: {
                                        times: [0, 0.5, 0.5, 1],
                                        type: 'spring',
                                        repeat: Infinity,
                                        duration: 10,
                                        delay: 1,
                                    },
                                    backgroundImage: {
                                        times: [0, 0.2, 0.8, 1],
                                        repeat: Infinity,
                                        duration: 10,
                                        delay: 1,
                                    },
                                }}
                                className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-#06080a to-hsl( 210 20% 98%) bg-radial bg-cover flex flex-col justify-center items-center'
                            >
                                <h3 className='z-50 font-semibold text-center text-3xl mix-blend-difference'>
                                    Two
                                    <br />
                                    included
                                    <br />
                                    themes.
                                </h3>
                            </motion.div>
                        </CardContent>
                    </Card>
                </FadeIn>
                <FadeIn className='lg:col-span-2'>
                    <Card className='h-72  overflow-hidden'>
                        <CardContent>
                            <CardHeader>
                                <CardTitle className='text-2xl'>
                                    Easily manage your{' '}
                                    <AnimatePresence mode='wait'>
                                        <motion.span
                                            key={textIndex}
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            {texts[textIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </CardTitle>
                            </CardHeader>
                        </CardContent>
                    </Card>
                </FadeIn>
                <FadeIn>
                    <Card className='h-72  overflow-hidden'>
                        <CardHeader>
                            <CardTitle className='text-2xl'>
                                Internationalization built in
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </FadeIn>
                <FadeIn>
                    <Card className='h-72  overflow-hidden'>
                        <CardHeader>
                            <CardTitle className='text-2xl'>
                                Built in support for the most popular payment
                                gateways
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className='mx-autopx-6 lg:px-8'>
                                <Image
                                    src='/screenshots/top-up.webp'
                                    className=''
                                    alt={''}
                                    height={637}
                                    width={1095}
                                />
                                <div className='relative' aria-hidden='true'>
                                    <div className='absolute -inset-x-5 bottom-0 bg-gradient-to-t from-background pt-[8%]' />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </FadeIn>
                <FadeIn>
                    <Card className='h-72  overflow-hidden'>
                        <CardHeader>
                            <CardTitle className='text-2xl'>
                                User experience as a top priority
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <video
                                width='100'
                                height='60'
                                loop
                                autoPlay
                                muted
                                preload='none'
                                controls={false}
                                className='rounded-lg shadow-lg -mt-3.5'
                            >
                                <source
                                    src='/videos/ux.webm'
                                    type='video/webm'
                                />
                                Your browser does not support this video
                            </video>
                        </CardContent>
                    </Card>
                </FadeIn>
            </div>
        </section>
    );
}
