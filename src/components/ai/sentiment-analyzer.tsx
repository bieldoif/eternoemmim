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
import { analyzeSentiment, type SentimentAnalysisOutput } from '@/ai/flows/analyze-sentiment';
import { useToast } from '@/hooks/use-toast';
import { BrainCircuit, Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

export function SentimentAnalyzer({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [analysis, setAnalysis] = useState<SentimentAnalysisOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleAnalysis = async () => {
    if (!text) return;
    setIsOpen(true);
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzeSentiment(text);
      setAnalysis(result);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro na Análise',
        description: 'Não foi possível analisar o sentimento. Tente novamente mais tarde.',
        variant: 'destructive',
      });
      setIsOpen(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleAnalysis}>
          <BrainCircuit className="mr-2 h-4 w-4" />
          Análise de Sentimentos
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-body">
        <DialogHeader>
          <DialogTitle className="font-headline">Análise de Sentimentos</DialogTitle>
          <DialogDescription>
            A IA analisou os sentimentos presentes neste trecho do diário.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isLoading && (
            <div className="flex items-center justify-center h-24">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}
          {analysis && (
            <ScrollArea className="h-48">
              <p className="text-sm text-foreground/80 leading-relaxed">{analysis.sentiment}</p>
            </ScrollArea>
          )}
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={() => setIsOpen(false)}>Fechar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
