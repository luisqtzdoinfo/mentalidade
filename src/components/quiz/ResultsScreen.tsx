import type { QuizOutputType } from "@/ai/flows/personalized-quiz-results";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BrainCircuit, Construction, ShieldCheck } from "lucide-react";

type ResultsScreenProps = {
  results: QuizOutputType;
  onNext: () => void;
};

const resultLevels = {
  MIND_OF_STEEL: {
    title: "Mente de Ferro",
    icon: <ShieldCheck className="h-16 w-16 text-accent" />,
  },
  MIND_IN_CONSTRUCTION: {
    title: "Mente em Construção",
    icon: <Construction className="h-16 w-16 text-accent" />,
  },
  FRAGMENTED_MIND: {
    title: "Mente Fragmentada",
    icon: <BrainCircuit className="h-16 w-16 text-accent" />,
  },
};

export function ResultsScreen({ results, onNext }: ResultsScreenProps) {
  const { title, icon } = resultLevels[results.level] || resultLevels.MIND_IN_CONSTRUCTION;

  return (
    <Card className="w-full max-w-2xl mx-auto text-center shadow-2xl border-2 border-primary/10 animate-in fade-in duration-1000">
      <CardHeader className="items-center p-6 md:p-10">
        {icon}
        <CardTitle className="text-4xl font-black mt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 md:px-10">
        <p className="text-lg text-foreground/80 my-4">
          {results.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center p-6 md:p-10">
        <Button size="lg" onClick={onNext} className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-bold px-10 py-6 group">
          {results.cta}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
