import { Play } from "lucide-react";

export const VSLSection = () => {
  return (
    <section className="py-20 bg-card/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Assista ao Vídeo e Descubra
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Como você pode criar seu próprio servidor de RP profissional
          </p>

          {/* Video Container */}
          <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-elegant bg-card/10 backdrop-blur border border-primary/20">
            {/* YouTube Embed */}
            <iframe
              src="https://www.youtube.com/embed/7L30O2-Z8zY"
              title="VSL - Como Criar Servidor de RP no GTA V"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Play Button Overlay (optional) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-black/20">
              <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>

          {/* CTA Below Video */}
          <div className="mt-8">
            <p className="text-lg text-muted-foreground mb-4">
              Viu como é simples? Comece agora mesmo!
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl text-muted-foreground line-through">R$ 197</span>
              <span className="text-4xl font-bold text-secondary">R$ 37</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              ✅ Acesso vitalício - Pagamento único
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};