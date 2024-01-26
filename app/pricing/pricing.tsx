'use client';



import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import FadeIn from '@/components/fade-in';
import Link from 'next/link';

export function PricingCards() {
    return (
        <FadeIn className='grid grid-cols-3 gap-4 max-w-screen-xl mx-auto'>
            <Card>
                <CardHeader className='space-y-4'>
                    <CardTitle>Non-commercial</CardTitle>
                    <h3 className='text-3xl font-bold mt-4'>Free</h3>
                </CardHeader>
                <CardContent>
                    <ul className='list-disc ml-6'>
                        <li>Unlimited Users</li>
                        <li>No support</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className='w-full' asChild>
                        <Link href='/docs/'>Get Started</Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader className='space-y-4'>
                    <CardTitle>Enterprise</CardTitle>
                    <h3 className='text-3xl font-bold mt-4'>
                        25 PLN/mo per node
                    </h3>
                </CardHeader>
                <CardContent>
                    <ul className='list-disc ml-6'>
                        <li>50 Clients per node.</li>
                        <li>Support</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className='w-full' asChild>
                        <Link href='/panel/'>Subscribe</Link>
                    </Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader className='space-y-4'>
                    <CardTitle>Custom</CardTitle>
                    <h3 className='text-3xl font-bold mt-4'>??? PLN</h3>
                </CardHeader>
                <CardContent>
                    <ul className='list-disc ml-6'>
                        <li>Unlimited Clients</li>
                        <li>Priority support</li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button className='w-full' asChild>
                        <Link href='/contact/'>Contact us</Link>
                    </Button>
                </CardFooter>
            </Card>
        </FadeIn>
    );
}
