import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Preciso ter conhecimento em programação para fazer o curso?",
    answer: "Não! O curso foi desenvolvido para iniciantes. Começamos do zero e explicamos cada passo detalhadamente. Mesmo que você nunca tenha programado antes, conseguirá acompanhar sem problemas."
  },
  {
    question: "Qual é o tempo de duração do curso?",
    answer: "O curso possui mais de 15 horas de conteúdo em vídeo, divididas em módulos práticos. Você pode assistir no seu próprio ritmo. A maioria dos alunos conclui em 2-4 semanas estudando 1 hora por dia."
  },
  {
    question: "Vou receber suporte durante o curso?",
    answer: "Sim! Você terá acesso ao nosso Discord exclusivo com suporte 24/7. Nossa equipe e comunidade de alunos estão sempre prontos para ajudar com qualquer dúvida."
  },
  {
    question: "O curso funciona para servidores em outros países?",
    answer: "Absolutamente! As técnicas ensinadas funcionam globalmente. Você aprenderá a configurar servidores para qualquer região, com dicas específicas para diferentes públicos."
  },
  {
    question: "Preciso de um computador potente para criar o servidor?",
    answer: "Para aprender e testar, qualquer computador moderno serve. Para hospedar um servidor com muitos jogadores, recomendamos uma VPS, que custa a partir de R$ 30/mês."
  },
  {
    question: "Vou aprender a monetizar meu servidor?",
    answer: "Sim! Temos um módulo completo sobre monetização ética, incluindo sistemas de doação, VIP, lojas virtuais e estratégias de marketing para crescer sua comunidade."
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Oferecemos garantia incondicional de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro, sem perguntas ou burocracia."
  },
  {
    question: "Recebo atualizações do conteúdo?",
    answer: "Sim! Todas as atualizações futuras são incluídas gratuitamente. O FiveM evolui constantemente e mantemos o curso sempre atualizado com as últimas novidades."
  },
  {
    question: "Posso criar quantos servidores eu quiser?",
    answer: "Claro! Uma vez que você aprende as técnicas, pode criar quantos servidores desejar. Muitos alunos criam múltiplos servidores ou oferecem serviços para terceiros."
  },
  {
    question: "Quanto tempo demora para ter um servidor funcionando?",
    answer: "Seguindo o curso passo a passo, você terá um servidor básico funcionando em 24-48 horas. Para um servidor completo e profissional, conte com 1-2 semanas de dedicação."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Tire Suas Dúvidas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas
              <span className="block text-primary">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Respondemos as principais dúvidas sobre o curso e criação de servidores de roleplay.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-primary/10 rounded-lg px-6 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions? */}
          <div className="text-center mt-12">
            <div className="bg-card/20 backdrop-blur border border-primary/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar! Entre em contato conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.gg/exemplo" 
                  className="inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg px-6 py-3 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  Discord da Comunidade
                </a>
                <a 
                  href="mailto:suporte@exemplo.com" 
                  className="inline-flex items-center justify-center gap-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 rounded-lg px-6 py-3 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  Email de Suporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};