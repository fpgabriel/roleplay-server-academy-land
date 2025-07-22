import { Heart, Shield, Clock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center">
          {/* Brand */}
          <div className="text-center max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">GTA RP</span> Academy
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A melhor plataforma para aprender a criar servidores de roleplay profissionais no GTA V. 
              Transforme sua paixão por jogos em uma fonte de renda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span>Compra 100% Segura</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 GTA RP Academy. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              Feito com <Heart className="w-4 h-4 text-red-500" /> para a comunidade RP
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground max-w-4xl mx-auto">
              <strong>Importante:</strong> Este curso é focado em ensinar a criação de servidores de roleplay para fins educacionais e de entretenimento. 
              Certifique-se de seguir os termos de serviço do FiveM e leis locais. 
              Resultados podem variar de acordo com dedicação e implementação das técnicas ensinadas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};