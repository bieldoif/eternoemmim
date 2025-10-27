'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { exploreEmotions, type ExploreEmotionsOutput } from '@/ai/flows/explore-emotions';
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { Separator } from '../ui/separator';

export function EmotionExplorer({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [exploration, setExploration] = useState<ExploreEmotionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleExploration = async () => {
    if (!text) return;
    setIsOpen(true);
    setIsLoading(true);
    setExploration(null);
    try {
      const result = await exploreEmotions({ diaryEntry: text });
      setExploration(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro na Exploração',
        description: 'Não foi possível aprofundar as emoções. Tente novamente mais tarde.',
        variant: 'destructive',
      });
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  const enhancedParagraphs =
    exploration?.enhancedEntry
      .split(/\r?\n\s*\r?\n/)
      .map((p) => p.trim().replace(/\r?\n/g, ' '))
      .filter((p) => p.length > 0) || [];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={handleExploration}>
          <Sparkles className="mr-2 h-4 w-4" />
          Exploração Emocional
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[80vh] flex flex-col font-body">
        <DialogHeader>
          <DialogTitle className="font-headline">Exploração Emocional</DialogTitle>
          <DialogDescription>
            Uma versão da IA com a profundidade emocional e narrativa aprimoradas.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <ScrollArea className="flex-1 -mx-6 px-6">
            <div className="py-4">
            {isLoading && (
                <div className="flex items-center justify-center h-full">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
            )}
            {exploration && (
                <article className="prose max-w-none text-sm text-foreground/80 leading-relaxed space-y-4">
                {enhancedParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
                </article>
            )}
            </div>
        </ScrollArea>
        <Separator />
        <DialogFooter className="pt-4">
          <Button variant="outline" onClick={() => setIsOpen(false)}>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
