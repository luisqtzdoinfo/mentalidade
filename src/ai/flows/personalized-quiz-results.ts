'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized quiz results based on user answers.
 *
 * It includes the `generatePersonalizedResults` function which takes quiz answers as input and returns a personalized result and call to action.
 * - `generatePersonalizedResults` - The function to generate personalized quiz results.
 * - `QuizInputType` - The input type for the `generatePersonalizedResults` function.
 * - `QuizOutputType` - The output type for the `generatePersonalizedResults` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuizInputSchema = z.object({
  answers: z.array(
    z.string().describe('The answer provided by the user for a quiz question.')
  ).length(7).describe('An array of 7 answers to the quiz questions.'),
});

export type QuizInputType = z.infer<typeof QuizInputSchema>;

const QuizOutputSchema = z.object({
  level: z.enum(['MIND_OF_STEEL', 'MIND_IN_CONSTRUCTION', 'FRAGMENTED_MIND']).describe('The level of the user, based on their answers.'),
  description: z.string().describe('A personalized description of the user based on their quiz results.'),
  cta: z.string().describe('A call to action tailored to the user based on their quiz results.'),
});

export type QuizOutputType = z.infer<typeof QuizOutputSchema>;

export async function generatePersonalizedResults(input: QuizInputType): Promise<QuizOutputType> {
  return personalizedQuizResultsFlow(input);
}

const quizResultsPrompt = ai.definePrompt({
  name: 'quizResultsPrompt',
  input: {schema: QuizInputSchema},
  output: {schema: QuizOutputSchema},
  prompt: `Based on the user's answers to the quiz, determine their mental fortitude level and provide a personalized description and call to action.

You must choose from the 3 levels below:

MIND_OF_STEEL:  "You are at the top—disciplined, focused, and with a mindset above average. The question now is: do you want to become unshakeable?"

MIND_IN_CONSTRUCTION: "You have enormous potential—but your inconsistency is costing you results. With small adjustments, you can double your mental strength."

FRAGMENTED_MIND: "The problem isn't you. It's the method you've never had. Your mind today is a mess... but completely trainable."


Here are the user's answers:
{{#each answers}}
- {{{this}}}
{{/each}}

Based on the answers, determine which level the user is at, write a description of the user based on the level and generate a call to action based on the level.

Ensure the response is structured to match the specified output schema.

Ensure you return a level, a description and a call to action.`,
});

const personalizedQuizResultsFlow = ai.defineFlow(
  {
    name: 'personalizedQuizResultsFlow',
    inputSchema: QuizInputSchema,
    outputSchema: QuizOutputSchema,
  },
  async input => {
    const {output} = await quizResultsPrompt(input);
    return output!;
  }
);
