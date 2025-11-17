import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type WelcomeScreenProps = {
  onStart: () => void;
};

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="w-full max-w-2xl text-center flex flex-col items-center animate-in fade-in duration-1000 p-4">
      <h1 className="text-3xl md:text-6xl font-black text-foreground mb-4 font-headline">
        Quão Forte é Sua Mente? Descubra Agora.
      </h1>
      <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-lg">
        A maioria das pessoas acredita ter disciplina... até responder este teste.
        Leva menos de 60 segundos. O resultado pode te chocar.
      </p>
      <Button
        size="lg"
        onClick={onStart}
        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base md:text-lg font-bold px-8 md:px-10 py-5 md:py-6 group"
      >
        Começar Meu Teste
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
