import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function OfferScreen() {
  const ebookCover = PlaceHolderImages.find(p => p.id === 'ebook-cover');

  const features = [
    "Dominar seus sabotadores",
    "Construir disciplina diária sem depender de motivação",
    "Ter foco cirúrgico",
    "Se tornar forte mentalmente",
    "Parar de começar e parar",
    "Criar uma rotina que te empurra para o sucesso",
    "Desenvolver consistência de verdade",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center p-4 md:p-8 animate-in fade-in duration-1000">
      <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4">
        Está Pronto Para Virar a Chave da Sua Vida?
      </h1>
      <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-2xl">
        Você acabou de descobrir o que está te travando. Agora só existe um caminho lógico: evoluir sua mente.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full my-8">
        <div className="w-full md:w-1/2 flex-shrink-0">
          {ebookCover && (
             <Image
                src={ebookCover.imageUrl}
                alt={ebookCover.description}
                width={400}
                height={600}
                className="rounded-lg shadow-2xl mx-auto w-[250px] h-auto md:w-[400px]"
                data-ai-hint={ebookCover.imageHint}
              />
          )}
        </div>
        <div className="w-full md:w-1/2 text-left">
          <p className="mb-6 font-bold text-base md:text-lg">O ebook “Mentalidade de Aço” é o guia prático que te ensina a:</p>
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-xl md:text-2xl font-bold italic text-foreground my-6 md:my-10">
        “Se você quer resultados diferentes, precisa de uma mente diferente.”
      </p>

      <Button
        size="lg"
        asChild
        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base md:text-xl font-bold px-8 md:px-12 py-6 md:py-8 group animate-pulse text-center"
      >
        <a href="#">
          Quero Minha Transformação Agora
          <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
}
