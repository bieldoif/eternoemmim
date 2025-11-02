'use client';

import Image from 'next/image';
import { book, type BookPart } from '@/lib/book';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Card } from './ui/card';

function WelcomeView() {
  const coverImage = PlaceHolderImages.find((img) => img.id === 'cover-img');
  
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 md:p-8 text-center animate-fade-in">
       {coverImage && (
        <Card className="w-full max-w-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={coverImage.imageUrl}
            alt={coverImage.description}
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            data-ai-hint={coverImage.imageHint}
            priority
          />
        </Card>
      )}
      <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {book.title}
      </h1>
      <p className="text-lg text-muted-foreground mt-2">por {book.author}</p>
      <blockquote className="mt-8 max-w-2xl text-lg italic text-foreground/80 border-l-2 border-primary pl-4">
        {book.openingQuote}
      </blockquote>
      <p className="mt-8 max-w-3xl text-base text-muted-foreground leading-relaxed">
        {book.synopsis}
      </p>
    </div>
  )
}

function PartView({ part }: { part: BookPart }) {
  const image = PlaceHolderImages.find((img) => img.id === part.imageId);

  return (
    <div className="animate-fade-in">
      {image && part.imageId && (
        <div className="relative h-auto w-full max-w-4xl mx-auto my-8">
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            data-ai-hint={image.imageHint}
            priority
          />
        </div>
      )}
      <div className="p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {part.title}
          </h2>
        </header>

        <article className="prose prose-lg lg:prose-xl max-w-none font-body text-foreground/90 text-lg leading-relaxed space-y-6 whitespace-pre-wrap">
          <p>{part.content}</p>
        </article>

        <Separator className="my-12" />

        <footer className="flex flex-col sm:flex-row items-center justify-center gap-4">
        </footer>
      </div>
    </div>
  );
}


export default function ChapterView({ activePart }: { activePart: BookPart | null }) {
  return (
    <ScrollArea className="h-screen bg-background">
      {activePart ? <PartView part={activePart} /> : <WelcomeView />}
    </ScrollArea>
  );
}
