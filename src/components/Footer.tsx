import { Heart, Shield, Clock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">GTA RP</span> Academy
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A melhor plataforma para aprender a criar servidores de roleplay profissionais no GTA V. 
              Transforme sua paixão por jogos em uma fonte de renda.
            </p>
            <div className="flex flex-wrap gap-4">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#curso" className="hover:text-primary transition-colors">Sobre o Curso</a></li>
              <li><a href="#instrutor" className="hover:text-primary transition-colors">Instrutor</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#preco" className="hover:text-primary transition-colors">Preços</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>suporte@gtarpacademy.com</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Horário de atendimento:</p>
                <p>Segunda à Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 14h</p>
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