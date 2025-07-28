import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Crown, 
  Clock, 
  Shield, 
  Users,
  ArrowRight,
  Zap
} from "lucide-react";

const features = [
  "15+ Horas de Vídeo Aulas",
  "50+ Scripts Prontos para Uso",
  "Suporte 24/7 no Discord",
  "Atualizações Vitalícias",
  "Certificado de Conclusão",
  "Grupo VIP de Alunos",
  "Templates de Servidor",
  "Banco de Dados Configurado",
  "Sistema Anti-Cheat Incluso",
  "Monetização e Marketing"
];

export const PricingSection = () => {
  return (
    <section data-section="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium">Oferta Especial de Lançamento</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Invista no Seu
            <span className="block text-primary">Futuro Digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma única compra, conhecimento para toda vida. Crie quantos servidores quiser com tudo que você aprender.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-card-glow relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-gradient-hero text-primary-foreground px-6 py-2 text-sm font-bold">
                MAIS VENDIDO
              </Badge>
            </div>

            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Pricing Info */}
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4">
                    Curso Completo de Servidor RP
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Tudo que você precisa para criar e gerenciar servidores de roleplay profissionais no GTA V.
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                      <span className="text-2xl text-muted-foreground line-through">R$ 197</span>
                      <span className="text-5xl font-bold text-secondary">R$ 37</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Acesso vitalício - Pagamento único
                    </p>
                  </div>

                  {/* Guarantee */}
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <div className="text-left">
                        <p className="font-semibold">Garantia de 30 Dias</p>
                        <p className="text-sm text-muted-foreground">100% do seu dinheiro de volta</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="cta" 
                    size="xl" 
                    className="w-full group mb-4"
                    onClick={() => window.open('https://checkout.winsspay.com.br/checkout/cmdmujr4a084bh4d3hx9vkhsj?offer=V6MBARA', '_blank')}
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Garantir Minha Vaga Agora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Acesso imediato após a compra
                  </p>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    O que está incluído:
                  </h4>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonus Section */}
                  <div className="mt-8 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                    <h5 className="font-bold text-secondary mb-2">🎁 Bônus Exclusivos:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Pack com 10 mapas customizados</li>
                      <li>• Sistema de economia balanceado</li>
                      <li>• Kit de texturas e skins</li>
                      <li>• Mentoria em grupo mensal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
              <Users className="w-5 h-5" />
              <span>500+ pessoas já compraram este curso nas últimas 24 horas</span>
            </div>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <p className="text-xs text-muted-foreground">Avaliação</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">98%</div>
                <p className="text-xs text-muted-foreground">Satisfação</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <p className="text-xs text-muted-foreground">Suporte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};