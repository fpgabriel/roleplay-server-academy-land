import { Card, CardContent } from "@/components/ui/card";
import { 
  Server, 
  Code, 
  Users, 
  Shield, 
  Database, 
  Settings,
  Gamepad2,
  MessageSquare,
  Crown,
  Zap
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Configuração Completa do Servidor",
    description: "Aprenda a configurar FXServer, recursos essenciais e otimizações para performance máxima."
  },
  {
    icon: Code,
    title: "Scripts e Recursos Personalizados",
    description: "Desenvolva seus próprios scripts em Lua e JavaScript para criar experiências únicas."
  },
  {
    icon: Users,
    title: "Sistema de Whitelist e Permissões",
    description: "Implemente sistemas de seleção de jogadores e hierarquias administrativas."
  },
  {
    icon: Shield,
    title: "Segurança e Anti-Cheat",
    description: "Proteja seu servidor contra hackers e trapaceiros com as melhores práticas."
  },
  {
    icon: Database,
    title: "Banco de Dados MySQL",
    description: "Configure e gerencie bancos de dados para salvar progressos dos jogadores."
  },
  {
    icon: Settings,
    title: "Painel de Administração",
    description: "Crie painéis web personalizados para gerenciar seu servidor remotamente."
  },
  {
    icon: Gamepad2,
    title: "Jobs e Atividades",
    description: "Implemente empregos, missões e atividades para engajar os jogadores."
  },
  {
    icon: MessageSquare,
    title: "Sistema de Chat e Comandos",
    description: "Desenvolva sistemas de comunicação avançados e comandos administrativos."
  },
  {
    icon: Crown,
    title: "Economia e Lojas",
    description: "Crie sistemas econômicos complexos com lojas, bancos e transações."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">O Que Você Vai Aprender</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo Para Criar Seu
            <span className="block text-primary">Servidor Profissional</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um curso completo que aborda desde a instalação básica até configurações avançadas para servidores de roleplay de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-card-glow group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card/20 backdrop-blur border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              + Bônus Exclusivos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Scripts Prontos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <p className="text-muted-foreground">Suporte Discord</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <p className="text-muted-foreground">Atualizações Grátis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};