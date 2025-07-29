import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const Metrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      number: '5+',
      label: 'Años de experiencia',
      description: 'En transformación digital'
    },
    {
      icon: Users,
      number: '100+',
      label: 'Proyectos ejecutados',
      description: 'Con resultados exitosos'
    },
    {
      icon: Globe,
      number: '3',
      label: 'Países',
      description: 'De presencia regional'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Satisfacción del cliente',
      description: 'Calidad garantizada'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-foreground">
            Resultados que <span className="gradient-text">hablan por sí solos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestra experiencia y compromiso se reflejan en cada proyecto que entregamos
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="text-center group">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <IconComponent size={36} className="text-primary" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-5xl lg:text-6xl font-bold text-primary mb-2">
                    {metric.number}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-card-foreground mb-4">
              Certificaciones y Alianzas Estratégicas
            </h3>
            <p className="text-muted-foreground mb-6">
              Trabajamos con las principales plataformas tecnológicas del mercado para 
              garantizar soluciones de clase mundial.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-primary font-semibold">
              <span>AWS Partner</span>
              <span>Microsoft Azure</span>
              <span>Google Cloud</span>
              <span>Salesforce</span>
              <span>ServiceNow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;