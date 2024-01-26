'use client';

import FadeUp from '@/components/fade-up';
import {
    PageHeader,
    PageHeaderDescription,
    PageHeaderHeading,
} from '@/components/ui/header';

export function PricingHeader() {
    return (
        <FadeUp>
            <PageHeader className='*:text-center mx-auto *:mx-auto'>
                <PageHeaderHeading>Pricing</PageHeaderHeading>
                <PageHeaderDescription>
                    Choose the right plan for your hostings needs!
                </PageHeaderDescription>
            </PageHeader>
        </FadeUp>
    );
}
