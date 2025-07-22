import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-85" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Curso Mais Completo do Brasil</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crie Seu Próprio
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Servidor de RP
            </span>
            <span className="block text-4xl md:text-5xl">no GTA V</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Aprenda passo a passo como criar, configurar e gerenciar um servidor de roleplay profissional no GTA V. 
            Do zero ao servidor completo em funcionamento.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">500+ Alunos</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">15+ Horas</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">Suporte Vitalício</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => {
                const pricingSection = document.querySelector('[data-section="pricing"]');
                pricingSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Comprar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-primary/20 bg-card/20 backdrop-blur hover:bg-primary/10"
              onClick={() => {
                const vslSection = document.querySelector('[data-section="vsl"]');
                vslSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Conteúdo
            </Button>
          </div>

          {/* Price */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-2">Acesso vitalício por apenas</p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl text-muted-foreground line-through">R$ 197</span>
              <span className="text-5xl font-bold text-secondary">R$ 37</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">✅ Pagamento único - Acesso para sempre!</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};