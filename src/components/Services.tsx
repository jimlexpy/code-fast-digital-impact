import { 
  Users, 
  Smartphone, 
  Network, 
  Code, 
  Shield, 
  Brain, 
  Zap, 
  Building 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Staff Aumentado',
      description: 'Expande tu equipo con profesionales especializados que se integran perfectamente a tu cultura organizacional.'
    },
    {
      icon: Smartphone,
      title: 'Modernización de Aplicaciones',
      description: 'Transforma aplicaciones legacy en soluciones modernas, escalables y eficientes.'
    },
    {
      icon: Network,
      title: 'Interoperabilidad',
      description: 'Conecta sistemas y plataformas para una comunicación fluida y eficiente entre todos tus procesos.'
    },
    {
      icon: Code,
      title: 'NoCode / LowCode',
      description: 'Acelera el desarrollo con plataformas que minimizan la codificación manual y maximizan la productividad.'
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: 'Integra seguridad en cada etapa del desarrollo para aplicaciones robustas y confiables.'
    },
    {
      icon: Brain,
      title: 'Data & AI',
      description: 'Aprovecha el poder de los datos y la inteligencia artificial para decisiones estratégicas inteligentes.'
    },
    {
      icon: Zap,
      title: 'Hiperautomatización',
      description: 'Automatiza procesos complejos para maximizar la eficiencia y reducir costos operacionales.'
    },
    {
      icon: Building,
      title: 'Arquitectura Empresarial',
      description: 'Diseña una arquitectura tecnológica sólida que soporte el crecimiento y la innovación empresarial.'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-foreground">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para impulsar la transformación digital de tu empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card group">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent size={32} className="text-primary" />
                  </div>
                </div>
                
                <h3 className="heading-sm mb-4 text-card-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#nosotros" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Descubre cómo podemos ayudarte
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;