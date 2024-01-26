export default function NotFoundPage() {
    return (
        <main className='flex h-screen items-center justify-center'>
            <div className='text-center'>
                <p className='text-base font-semibold text-primary'>404</p>
                <h1 className='mt-4 text-2xl font-bold tracking-tight sm:text-5xl'>
                    Page not found
                </h1>
                <p className='mt-6 text-base leading-7 text-foreground/80'>
                    The page you’re looking for does not exist.
                </p>
            </div>
        </main>
    );
}
