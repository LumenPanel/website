import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import { Footer } from '@/components/footer';
import { NavBar } from '@/components/navbar';

import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'LumenPanel',
        template: `LumenPanel | %s`,
    },
    metadataBase: new URL('https://lumen.olekaleksander.dev'),
    description:
        'Modern VPS, LXC and GameServer management panel with integrated billing.',
    keywords: [
        'VPS',
        'LXC',
        'GameServer',
        'Billing',
        'Tailwind CSS',
        'Next.js',
    ],
    authors: [
        {
            name: 'olekaleksander',
            url: 'https://olekaleksander.dev',
        },
    ],
    creator: 'olekaleksander',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://lumen.olekaleksander.dev',
        title: 'LumenPanel',
        description:
            'Modern VPS, LXC and GameServer management panel with integrated billing.',
        siteName: 'LumenPanel',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LumenPanel',
        description:
            'Modern VPS, LXC and GameServer management panel with integrated billing.',
        creator: '@olekaleksander',
    },
    icons: {
        icon: '/logo.svg',
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={GeistSans.className}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
