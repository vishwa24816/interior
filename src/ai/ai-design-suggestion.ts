// This is an AI-powered design suggestion flow that recommends design choices based on user preferences and similar projects in the portfolio.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDesignSuggestionInputSchema = z.object({
  userPreferences: z
    .string()
    .describe('The user\u0027s design preferences, including style, color, and materials.'),
  similarProjects: z
    .string()
    .describe('A description of similar projects in the portfolio.'),
});

export type AiDesignSuggestionInput = z.infer<typeof AiDesignSuggestionInputSchema>;

const AiDesignSuggestionOutputSchema = z.object({
  designSuggestions: z
    .string()
    .describe('AI-powered design suggestions tailored to the user\u0027s preferences and similar projects.'),
});

export type AiDesignSuggestionOutput = z.infer<typeof AiDesignSuggestionOutputSchema>;

export async function getAiDesignSuggestion(
  input: AiDesignSuggestionInput
): Promise<AiDesignSuggestionOutput> {
  return aiDesignSuggestionFlow(input);
}

const aiDesignSuggestionPrompt = ai.definePrompt({
  name: 'aiDesignSuggestionPrompt',
  input: {schema: AiDesignSuggestionInputSchema},
  output: {schema: AiDesignSuggestionOutputSchema},
  prompt: `Based on the user's design preferences: {{{userPreferences}}} and similar projects in the portfolio: {{{similarProjects}}}, provide AI-powered design suggestions tailored to the user's needs.`,
});

const aiDesignSuggestionFlow = ai.defineFlow(
  {
    name: 'aiDesignSuggestionFlow',
    inputSchema: AiDesignSuggestionInputSchema,
    outputSchema: AiDesignSuggestionOutputSchema,
  },
  async input => {
    const {output} = await aiDesignSuggestionPrompt(input);
    return output!;
  }
);
