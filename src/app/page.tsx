'use client';

import { Logo } from '@/components/logo';
import BookView from '@/components/book-view';

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
      </header>
      <main>
        <BookView />
      </main>
    </>
  );
}
