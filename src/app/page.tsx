'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ChapterView from '@/components/chapter-view';
import { Logo } from '@/components/logo';
import { book, type BookPart } from '@/lib/book';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';

function AppMenu() {
  const [activePart, setActivePart] = useState<BookPart | null>(null);
  const [isSheetOpen, setSheetOpen] = useState(false);

  const chapters = book.parts.filter((part) => part.type === 'chapter');
  const otherParts = book.parts.filter((part) => part.type !== 'chapter');

  const handlePartClick = (part: BookPart) => {
    setActivePart(part);
    setSheetOpen(false); // Fecha o menu ao selecionar um item
  };

  return (
    <>
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 p-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Logo />
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Abrir Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <Logo />
              </SheetHeader>
              <ScrollArea className="h-[calc(100%-80px)]">
                <nav className="p-4">
                  <ul>
                    {otherParts.map((part) => (
                      <li key={part.id}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start font-headline"
                          onClick={() => handlePartClick(part)}
                        >
                          {part.title}
                        </Button>
                      </li>
                    ))}
                  </ul>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="chapters">
                      <AccordionTrigger className="font-headline text-sm hover:no-underline py-2 px-2 rounded-md hover:bg-accent [&[data-state=open]>svg]:text-primary">
                        Capítulos
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul>
                          {chapters.map((part) => (
                            <li key={part.id}>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="w-full justify-start font-headline text-xs"
                                onClick={() => handlePartClick(part)}
                              >
                                {part.title}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main>
        <ChapterView activePart={activePart} />
      </main>
    </>
  );
}

export default function Home() {
  return <AppMenu />;
}
