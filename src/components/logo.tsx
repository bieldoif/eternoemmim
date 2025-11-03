import { book } from '@/lib/book';

export function Logo() {
  return (
    <div className="text-left">
      <h1 className="font-headline text-lg md:text-xl font-bold tracking-tight text-foreground">
        {book.title}
      </h1>
      <p className="text-xs md:text-sm text-muted-foreground">
        por {book.author}
      </p>
    </div>
  );
}
