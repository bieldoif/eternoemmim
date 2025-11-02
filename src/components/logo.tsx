import { Feather } from 'lucide-react';
import { book } from '@/lib/book';
import { useSidebar } from './ui/sidebar';

export function Logo() {
  const { isMobile } = useSidebar();
  const className = isMobile
    ? 'text-left group-data-[collapsible=icon]:hidden'
    : 'flex flex-col items-center justify-center text-center group-data-[collapsible=icon]:hidden';

  return (
    <div className={className}>
      <h1 className="font-headline text-lg md:text-xl font-bold tracking-tight text-foreground">
        {book.title}
      </h1>
      <p className="text-xs md:text-sm text-muted-foreground md:mt-1">
        por {book.author}
      </p>
    </div>
  );
}
