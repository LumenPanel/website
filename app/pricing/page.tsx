import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/ui/header';
import FadeUp from '@/components/fade-up';
import { PricingHeader } from './header';
import { PricingCards } from './pricing';
import PricingFAQ from './faq';

export default function PricingPage() {
    return (
        <main>
            <PricingHeader/>
            <PricingCards/>
            <PricingFAQ/>
        </main>
    );
}
