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
import { HomeHeader } from './header';

export default function Home() {
    return (
        <main>
            <HomeHeader/>
            <Features />
        </main>
    );
}
