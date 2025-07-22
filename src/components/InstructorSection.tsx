import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Calendar } from "lucide-react";
import instructorAvatar from "@/assets/instructor-avatar.jpg";

export const InstructorSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conheça Seu
              <span className="block text-primary">Instrutor</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aprenda com quem já criou e gerenciou servidores de sucesso com milhares de jogadores ativos.
            </p>
          </div>

          <Card className="bg-gradient-card border-primary/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Instructor Image */}
                <div className="relative h-96 lg:h-full">
                  <img 
                    src={instructorAvatar} 
                    alt="Instrutor do Curso" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Instructor Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold mb-2">João Silva</h3>
                    <p className="text-lg text-primary font-semibold mb-4">
                      Desenvolvedor Sênior & Especialista em Servidores RP
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge variant="secondary">5+ Anos de Experiência</Badge>
                      <Badge variant="outline">FiveM Expert</Badge>
                      <Badge variant="outline">Lua/JS Developer</Badge>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span>Criou 15+ servidores de sucesso</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span>Mais de 10.000 jogadores impactados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>500+ horas de conteúdo criado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span>Avaliação 4.9/5 pelos alunos</span>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "Minha missão é ensinar você a criar não apenas um servidor, mas uma verdadeira comunidade. 
                    Compartilho tudo que aprendi em anos de experiência para que você evite os erros que cometi e 
                    alcance o sucesso muito mais rápido."
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card className="bg-gradient-card border-primary/10 text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Alunos Formados</p>
            </Card>
            <Card className="bg-gradient-card border-primary/10 text-center p-6">
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <p className="text-sm text-muted-foreground">Servidores Criados</p>
            </Card>
            <Card className="bg-gradient-card border-primary/10 text-center p-6">
              <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-sm text-muted-foreground">Avaliação Média</p>
            </Card>
            <Card className="bg-gradient-card border-primary/10 text-center p-6">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Suporte Disponível</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};