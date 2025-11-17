"use client";

import { useState, useTransition } from "react";
import { WelcomeScreen } from "./WelcomeScreen";
import { QuizScreen } from "./QuizScreen";
import { ResultsScreen } from "./ResultsScreen";
import { OfferScreen } from "./OfferScreen";
import { quizQuestions } from "@/lib/quiz-data";
import Confetti from "./Confetti";
import { getQuizResults } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import type { QuizOutputType } from "@/ai/flows/personalized-quiz-results";
import { Loader2 } from "lucide-react";

type Step = "welcome" | "quiz" | "loading" | "results" | "offer";

export default function QuizFlow() {
  const [step, setStep] = useState<Step>("welcome");
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [results, setResults] = useState<QuizOutputType | null>(null);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleStart = () => {
    setStep("quiz");
  };

  const handleAnswer = (answer: string) => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);

    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setStep("loading");
        startTransition(async () => {
          try {
            const resultData = await getQuizResults(newAnswers);
            setResults(resultData);
            setStep("results");
          } catch (e) {
            toast({
              title: "Erro",
              description: "Não foi possível obter seus resultados. Tente novamente.",
              variant: "destructive",
            });
            setStep("quiz"); 
            setCurrentQuestionIndex(0);
            setAnswers([]);
          }
        });
      }
    }, 500); 
  };
  
  const handleShowOffer = () => {
    setStep("offer");
  };

  const renderStep = () => {
    switch (step) {
      case "welcome":
        return <WelcomeScreen onStart={handleStart} />;
      case "quiz":
        return (
          <QuizScreen
            question={quizQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            progress={((currentQuestionIndex + 1) / quizQuestions.length) * 100}
          />
        );
      case "loading":
        return (
          <div className="flex flex-col items-center justify-center text-center gap-4 p-8 animate-in fade-in duration-500">
            <Loader2 className="h-12 w-12 animate-spin text-accent" />
            <h2 className="text-2xl font-bold">Analisando suas respostas...</h2>
            <p className="text-muted-foreground">Isso levará apenas um momento.</p>
          </div>
        );
      case "results":
        return results && <ResultsScreen results={results} onNext={handleShowOffer} />;
      case "offer":
        return <OfferScreen />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="w-full">
      {showConfetti && <Confetti />}
      {renderStep()}
    </div>
  );
}
