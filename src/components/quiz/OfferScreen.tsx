import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Rocket, Zap, Gift, Flame } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function OfferScreen() {
  const ebookCover = PlaceHolderImages.find(p => p.id === 'ebook-cover');

  const methodBenefits = [
    "Reprograma sua mentalidade para ação imediata",
    "Elimina padrões invisíveis que te travam sem você perceber",
    "Aumenta sua clareza mental a ponto de você enxergar caminhos onde antes só via confusão",
    "Instala disciplina natural — não forçada",
    "Reduz drasticamente a autossabotagem",
    "Te coloca em estado mental de avanço constante",
  ];

  const bonuses = [
    "Acesso imediato ao protocolo de reprogramação mental",
    "Conteúdos exclusivos que aceleram sua evolução interna",
    "Técnicas que produzem mudanças perceptíveis em poucos dias",
    "Uma metodologia que cria resultados duradouros, não euforias passageiras",
    "Condição especial de lançamento disponível apenas enquanto esta oferta estiver ativa",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center p-4 md:p-8 animate-in fade-in duration-1000">
      <div className="w-full max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl text-foreground mb-4">
          Vamos ser diretos: Se a sua vida não está avançando na velocidade que você quer, o problema não é falta de capacidade — <strong>é falta de mentalidade treinada.</strong>
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-4">
          Você sabe disso. Há uma voz dentro de você que repete: “Eu posso mais.” E essa voz está certa.
        </p>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          O que falta não é motivação. É método. É estrutura. É a chave que destrava sua mente para que você pare de sabotar, pare de adiar e finalmente assuma o controle da sua vida. E é exatamente isso que você vai receber <strong>HOJE</strong>.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 w-full my-8">
        <div className="w-full flex-shrink-0">
          {ebookCover && (
             <Image
                src={ebookCover.imageUrl}
                alt={ebookCover.description}
                width={300}
                height={450}
                className="rounded-lg shadow-2xl mx-auto w-[200px] h-auto md:w-[300px]"
                data-ai-hint={ebookCover.imageHint}
              />
          )}
        </div>
        <div className="w-full text-left space-y-6">
          <div>
            <h3 className="flex items-center justify-center md:justify-start gap-2 text-xl md:text-2xl font-bold text-foreground mb-4">
              <Rocket className="h-6 w-6 text-accent" />
              O QUE ESTE MÉTODO FAZ POR VOCÊ:
            </h3>
            <ul className="space-y-3">
              {methodBenefits.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-base md:text-lg">
                  <Check className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
             <p className="text-base md:text-lg text-muted-foreground mt-4 text-center md:text-left">
              Isso não é teoria. É prática. É transformação. É virada de chave de verdade.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-3xl space-y-8 text-left my-8 rounded-lg border border-primary/20 p-6 bg-card">
        <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
                <Flame className="h-6 w-6 text-accent" />
                POR QUE VOCÊ PRECISA DISSO AGORA?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground">
              Porque cada dia que você adia, você fortalece o mesmo padrão que te prende. Cada “depois eu vejo” te mantém exatamente no mesmo lugar. E a real é: Você não quer continuar onde está. Você quer romper. Evoluir. Crescer. Você quer ser a versão de si mesmo que você sabe que existe — mas ainda não conseguiu acessar. <strong>Este método é a ponte. E essa ponte está aberta agora.</strong>
            </p>
        </div>
        <div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
                <Gift className="h-6 w-6 text-accent" />
                ENTRANDO HOJE, VOCÊ LIBERA:
            </h3>
            <ul className="space-y-3">
              {bonuses.map((bonus, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-muted-foreground">
                  <span className="text-accent font-bold text-lg mt-[-2px]">⭐</span>
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>


      <div className="text-center my-6 md:my-10 max-w-3xl">
        <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-bold text-foreground mb-4">
          <Zap className="h-6 w-6 text-accent" />
          A VERDADE É SIMPLES:
        </h3>
        <p className="text-lg md:text-xl text-muted-foreground italic">
            Ou você continua pensando como sempre pensou… e tendo exatamente os mesmos resultados.
        </p>
        <p className="text-lg md:text-xl text-foreground font-bold my-3">
            Ou você decide hoje instalar uma mentalidade que te leva para outro nível. Outro padrão. Outro destino.
        </p>
        <p className="text-base md:text-lg text-foreground mt-4">
          Esta é sua chance real de virar o jogo — <strong>agora, não depois.</strong> A decisão é sua. A transformação também.
        </p>
      </div>

      <Button
        size="lg"
        asChild
        className="w-full max-w-md bg-accent text-accent-foreground hover:bg-accent/90 rounded-full text-lg font-bold px-8 py-7 group animate-pulse text-center"
      >
        <a href="https://pay.cakto.com.br/gizrfup_654479">
          DESTRAVAR MINHA MENTE AGORA
          <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
}
