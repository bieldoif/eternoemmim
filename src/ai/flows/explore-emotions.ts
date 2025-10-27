'use server';

/**
 * @fileOverview A flow to explore and deepen the emotions of the main character in each diary entry.
 *
 * - exploreEmotions - A function that handles the emotional exploration process.
 * - ExploreEmotionsInput - The input type for the exploreEmotions function.
 * - ExploreEmotionsOutput - The return type for the exploreEmotions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExploreEmotionsInputSchema = z.object({
  diaryEntry: z.string().describe('A diary entry to analyze and deepen emotions.'),
});
export type ExploreEmotionsInput = z.infer<typeof ExploreEmotionsInputSchema>;

const ExploreEmotionsOutputSchema = z.object({
  enhancedEntry: z
    .string()
    .describe('The diary entry with enhanced emotional depth and narrative.'),
});
export type ExploreEmotionsOutput = z.infer<typeof ExploreEmotionsOutputSchema>;

export async function exploreEmotions(input: ExploreEmotionsInput): Promise<ExploreEmotionsOutput> {
  return exploreEmotionsFlow(input);
}

const exploreEmotionsPrompt = ai.definePrompt({
  name: 'exploreEmotionsPrompt',
  input: {schema: ExploreEmotionsInputSchema},
  output: {schema: ExploreEmotionsOutputSchema},
  prompt: `You are a professional novelist assisting an author in deepening the emotional impact of their writing.
  Analyze the following diary entry and provide suggestions for enhancing the emotional depth and narrative.
  Focus on identifying the core emotions expressed and suggest ways to amplify them through vivid descriptions, internal monologues, or character interactions.

  Diary Entry:
  {{diaryEntry}}`,
});

const exploreEmotionsFlow = ai.defineFlow(
  {
    name: 'exploreEmotionsFlow',
    inputSchema: ExploreEmotionsInputSchema,
    outputSchema: ExploreEmotionsOutputSchema,
  },
  async input => {
    const {output} = await exploreEmotionsPrompt(input);
    return output!;
  }
);
