'use server';

import { generatePersonalizedResults } from '@/ai/flows/personalized-quiz-results';
import type { QuizInputType, QuizOutputType } from '@/ai/flows/personalized-quiz-results';

export async function getQuizResults(answers: string[]): Promise<QuizOutputType> {
    if (answers.length !== 7) {
        throw new Error("Expected 7 answers, but got " + answers.length);
    }
    const input: QuizInputType = { answers };
    try {
        const result = await generatePersonalizedResults(input);
        return result;
    } catch (error) {
        console.error("Error generating personalized results:", error);
        // Fallback in case of AI error for robustness.
        return {
            level: 'MIND_IN_CONSTRUCTION',
            description: 'Você tem potencial enorme — mas sua inconsistência está te custando resultados. Com pequenos ajustes, você pode dobrar sua força mental.',
            cta: 'Veja o que falta para destravar sua mente.'
        };
    }
}
