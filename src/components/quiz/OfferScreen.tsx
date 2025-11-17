import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Zap, Gift, Flame } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function OfferScreen() {
  const ebookCover = PlaceHolderImages.find(p => p.id === 'ebook-cover');

  const receives = [
    "A fórmula completa para queimar gordura de forma leve, constante e prazerosa",
    "Um plano de ação pronto para seguir — mesmo que você não saiba por onde começar",
    "Técnicas que aceleram resultados em poucos dias",
    "Um sistema criado para quem já tentou de tudo e nunca conseguiu manter",
    "Bônus exclusivos que tornam sua rotina mais fácil e eficiente",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center p-4 md:p-8 animate-in fade-in duration-1000">
      <h1 className="text-3xl md:text-5xl font-black text-foreground mb-4">
        🔥 OFERTA PERSUASIVA – VERSÃO PREMIUM
      </h1>
      <p className="text-base md:text-xl text-muted-foreground mb-8 max-w-3xl">
        Transformar seu corpo não precisa ser difícil, demorado ou doloroso — e hoje, você tem acesso a um método que elimina todo o esforço desnecessário.
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
        <div className="w-full md:w-1/2 text-left space-y-6">
            <div>
                <p className="text-base md:text-lg text-muted-foreground">
                    Você está prestes a entrar em um programa criado para pessoas reais, com rotina corrida, que querem resultados rápidos, visíveis e sem sofrimento. E o melhor: tudo comprovado, passo a passo, simples e com suporte guiado.
                </p>
            </div>
            <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
                    <Gift className="h-6 w-6 text-accent" />
                    O que você recebe ao entrar hoje:
                </h3>
                <ul className="space-y-2">
                    {receives.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
      
      <div className="w-full max-w-3xl space-y-6 text-left my-8">
        <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
                <Zap className="h-6 w-6 text-accent" />
                Por que essa oferta é única?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
            Porque você não está comprando só um método — você está comprando a sua transformação real, rápida e possível. Sem adivinhação. Sem achismos. Sem dieta maluca. Apenas o caminho correto, explicado de forma clara e projetado para funcionar no seu dia.
            </p>
        </div>
        <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
                <Flame className="h-6 w-6 text-accent" />
                Condições especiais liberadas agora:
            </h3>
            <ul className="list-disc list-inside text-base md:text-lg text-muted-foreground space-y-1">
                <li>Valor reduzido por tempo limitado</li>
                <li>Bônus que não voltarão depois</li>
                <li>Garantia total para você experimentar sem riscos</li>
            </ul>
        </div>
      </div>


      <p className="text-xl md:text-2xl font-bold italic text-foreground my-6 md:my-10">
        Se você quer mudar, este é o momento. As próximas semanas podem ser completamente diferentes — e tudo começa aqui.
      </p>

      <Button
        size="lg"
        asChild
        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-base md:text-xl font-bold px-8 md:px-12 py-6 md:py-8 group animate-pulse text-center"
      >
        <a href="https://pay.cakto.com.br/gizrfup_654479">
          Quero Minha Transformação Agora
          <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
}
