import { Feather } from 'lucide-react';
import { book } from '@/lib/book';

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center text-center group-data-[collapsible=icon]:hidden">
      <h1 className="font-headline text-xl font-bold tracking-tight text-foreground">
        {book.title}
      </h1>
      <p className="text-sm text-muted-foreground mt-1">por {book.author}</p>
    </div>
  );
}
