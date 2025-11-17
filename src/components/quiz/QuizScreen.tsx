"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { quizQuestions } from "@/lib/quiz-data";
import type { Question } from "@/lib/quiz-data";
import { cn } from "@/lib/utils";

type QuizScreenProps = {
  question: Question;
  onAnswer: (answer: string) => void;
  progress: number;
};

export function QuizScreen({ question, onAnswer, progress }: QuizScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswer(answer);
  };

  return (
    <Card key={question.id} className="w-full max-w-3xl mx-auto shadow-2xl border-2 border-primary/10 animate-in fade-in-50 slide-in-from-bottom-10 duration-500">
      <CardHeader>
        <Progress value={progress} className="w-full h-2" />
        <p className="text-sm text-muted-foreground text-center pt-2">
          Pergunta {question.id} de {quizQuestions.length}
        </p>
      </CardHeader>
      <CardContent className="p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 min-h-[6rem] flex items-center justify-center">
          {question.question}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.answers.map((answer, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              className={cn(
                "justify-start text-left h-auto py-4 text-base whitespace-normal border-2 hover:border-accent hover:bg-accent/10 focus:bg-accent/20 focus:border-accent transition-all duration-300",
                selectedAnswer === answer && "bg-accent text-accent-foreground border-accent hover:bg-accent hover:text-accent-foreground",
                selectedAnswer && selectedAnswer !== answer && "opacity-50"
              )}
              onClick={() => handleSelectAnswer(answer)}
              disabled={!!selectedAnswer}
            >
              {answer}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
