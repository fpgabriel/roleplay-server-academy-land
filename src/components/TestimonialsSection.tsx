import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Roberto",
    role: "Proprietário do Phoenix RP",
    content: "Nunca pensei que seria possível criar um servidor tão profissional. O curso me ensinou desde o básico até configurações avançadas. Hoje tenho 200+ jogadores ativos diariamente!",
    rating: 5,
    serverName: "Phoenix RP - 200+ players"
  },
  {
    name: "Ana Silva",
    role: "Desenvolvedora de Scripts",
    content: "O módulo de programação foi incrível! Aprendi a criar scripts personalizados que fazem toda a diferença na experiência dos jogadores. Recomendo para qualquer um que queira se destacar.",
    rating: 5,
    serverName: "RealLife RP - 150+ players"
  },
  {
    name: "Pedro Santos",
    role: "Administrador de Servidor",
    content: "O suporte é excepcional! Sempre que tive dúvidas, fui atendido rapidamente. O curso pagou por si só em menos de um mês com as doações dos jogadores.",
    rating: 5,
    serverName: "Brasil RP - 300+ players"
  },
  {
    name: "Lucas Oliveira",
    role: "Criador de Conteúdo",
    content: "Como streamer, precisava de um servidor único para meu conteúdo. O curso me deu todas as ferramentas necessárias para criar algo verdadeiramente especial.",
    rating: 5,
    serverName: "Streamer Server - 100+ players"
  },
  {
    name: "Marina Costa",
    role: "Empresária Digital",
    content: "Transformei meu servidor em um negócio lucrativo! As estratégias de monetização e engagement foram fundamentais para o sucesso.",
    rating: 5,
    serverName: "Elite RP - 250+ players"
  },
  {
    name: "Gabriel Lima",
    role: "Desenvolvedor Freelancer",
    content: "Depois do curso, comecei a oferecer serviços de criação de servidores para terceiros. É uma fonte de renda extra incrível!",
    rating: 5,
    serverName: "Freelancer - 10+ projetos"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Nossos Alunos
            <span className="block text-primary">Estão Dizendo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 alunos já transformaram suas ideias em servidores de sucesso. Veja alguns depoimentos reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-card-glow group relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="border-t border-primary/10 pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-primary font-medium mt-1">{testimonial.serverName}</p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="bg-card/20 backdrop-blur border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Números que Impressionam</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Alunos Satisfeitos</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">4.9★</div>
                <p className="text-muted-foreground">Avaliação Média</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Taxa de Conclusão</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <p className="text-muted-foreground">Satisfação Garantida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};