import cloudSolutions from '@/assets/cloud-solutions.jpg';
import { CheckCircle, Cloud, Lock, Zap } from 'lucide-react';

const CloudSolutions = () => {
  const benefits = [
    {
      icon: Cloud,
      title: 'Escalabilidad Automática',
      description: 'Infraestructura que crece contigo'
    },
    {
      icon: Lock,
      title: 'Seguridad Avanzada',
      description: 'Protección de nivel empresarial'
    },
    {
      icon: Zap,
      title: 'Alto Rendimiento',
      description: 'Optimización continua de recursos'
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="heading-lg mb-6 text-foreground">
              Somos expertos en soluciones 
              <span className="gradient-text"> cloud seguras</span>, 
              escalables y modernas
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transformamos la infraestructura tecnológica de tu empresa con arquitecturas 
              cloud nativas que garantizan seguridad, escalabilidad y eficiencia operacional.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contacto" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Consulta gratuita
              </a>
              <a 
                href="#testimonios" 
                className="btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Ver casos de éxito
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={cloudSolutions}
                alt="Cloud computing solutions"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSolutions;