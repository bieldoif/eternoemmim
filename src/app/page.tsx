'use client';

import { useState } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { book, type BookPart } from '@/lib/book';
import ChapterView from '@/components/chapter-view';
import { Logo } from '@/components/logo';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home() {
  const [activePart, setActivePart] = useState<BookPart | null>(null);

  const chapters = book.parts.filter((part) => part.type === 'chapter');
  const otherParts = book.parts.filter(
    (part) => part.type !== 'chapter'
  );

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar className="border-r" collapsible="icon">
          <SidebarHeader className="p-4">
            <Logo />
          </SidebarHeader>
          <Separator />
          <SidebarContent asChild>
            <ScrollArea>
              <SidebarMenu className="p-2 lg:p-4">
                {otherParts.map((part) => (
                  <SidebarMenuItem key={part.id}>
                    <SidebarMenuButton
                      onClick={() => setActivePart(part)}
                      isActive={activePart?.id === part.id}
                      tooltip={{
                        children: part.title,
                        className: 'font-body',
                      }}
                      className="font-headline"
                    >
                      <Heart className="text-primary" />
                      <span className="truncate">{part.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="chapters" className="border-b-0">
                    <AccordionTrigger className="font-headline text-sm hover:no-underline py-2 px-2 rounded-md hover:bg-sidebar-accent [&[data-state=open]>svg]:text-primary">
                      <div className="flex items-center gap-2">
                        <Heart className="text-primary" />
                        <span className="truncate">Capítulos</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1">
                      <SidebarMenu className="pl-4">
                        {chapters.map((part) => (
                          <SidebarMenuItem key={part.id}>
                            <SidebarMenuButton
                              onClick={() => setActivePart(part)}
                              isActive={activePart?.id === part.id}
                              tooltip={{
                                children: part.title,
                                className: 'font-body',
                              }}
                              className="font-headline text-xs justify-start"
                              variant="ghost"
                            >
                              <span className="truncate">{part.title}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              </SidebarMenu>
            </ScrollArea>
          </SidebarContent>
          <Separator />
          <SidebarFooter className="p-4 flex-col gap-2 items-center justify-center text-center">
            <p className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">
              {book.closingMessage}
            </p>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <main className="flex-1">
            <ChapterView activePart={activePart} />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
