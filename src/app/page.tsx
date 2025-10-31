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
import { Heart, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PdfGenerator from '@/components/pdf-generator';

export default function Home() {
  const [activePart, setActivePart] = useState<BookPart | null>(null);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const generatePdf = () => {
    setIsGeneratingPdf(true);
    // The actual PDF generation is handled by the PdfGenerator component,
    // which will be rendered conditionally. We just need to toggle the state.
  };

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
                {book.parts.map((part) => (
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
              </SidebarMenu>
            </ScrollArea>
          </SidebarContent>
          <Separator />
          <SidebarFooter className="p-4 flex-col gap-2 items-center justify-center text-center">
            <Button onClick={generatePdf} disabled={isGeneratingPdf} className="w-full">
              <FileDown className="mr-2" />
              <span className="group-data-[collapsible=icon]:hidden">
                {isGeneratingPdf ? 'Gerando PDF...' : 'Baixar PDF'}
              </span>
            </Button>
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
      {isGeneratingPdf && (
        <PdfGenerator
          book={book}
          onComplete={() => setIsGeneratingPdf(false)}
        />
      )}
    </SidebarProvider>
  );
}
