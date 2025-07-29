import teamCollaboration from '@/assets/team-collaboration.jpg';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Cyril Joshep',
      position: 'CTO, Biosoftware',
      content: 'Code Fast transformó completamente nuestra infraestructura. Su enfoque en DevSecOps nos permitió acelerar nuestros deployments un 50% manteniendo la máxima seguridad.',
      rating: 5
    },
    {
      name: 'Raúl Marquez',
      position: 'CEO, Digital Challengers',
      content: 'La implementación de okta como IAM nos ahorro 6 meses de desarrollo. El equipo de Code Fast superó todas nuestras expectativas.',
      rating: 5
    },
    {
      name: 'Victor Lopez',
      position: 'Gerente TI, EcuadigitalChallengers',
      content: 'Su expertise en Data & AI nos ayudó a tomar decisiones más inteligentes. Los resultados fueron inmediatos y medibles.',
      rating: 5
    }
  ];

  const clientLogos = [
    'Biosoftware',
    'Digital Challengers', 
    'Ecuadigital Challengers',
    'CloudSystems',
    'DataFlow',
    'InnovateLab'
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-foreground">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor activo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 relative">
              <Quote size={40} className="text-primary/20 mb-6" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-card-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Empresas que confían en nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-300">
                <div className="text-card-foreground font-semibold opacity-70 hover:opacity-100 transition-opacity">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Image */}
        <div className="mt-16 text-center">
          <div className="relative max-w-4xl mx-auto">
            <img
              src={teamCollaboration}
              alt="Code Fast team collaboration"
              className="w-full h-[300px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl flex items-end justify-center p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Nuestro Equipo
                </h3>
                <p className="text-foreground/90">
                  Expertos comprometidos con tu éxito
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;