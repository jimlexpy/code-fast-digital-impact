import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const services = [
    'Staff Aumentado',
    'DevSecOps',
    'Data & AI',
    'Cloud Solutions',
    'NoCode/LowCode',
    'Modernización'
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contacto@codefast.com', label: 'Email' },
    { icon: Phone, href: 'tel:+15551234567', label: 'Teléfono' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold gradient-text mb-4">
              Code<span className="text-secondary">Fast</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Consultoría digital especializada en transformación tecnológica 
              con agilidad y eficiencia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Navegación</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Contacto</h3>
            <div className="space-y-4">
              <div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong><br />
                  contacto@codefast.com
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Teléfono:</strong><br />
                  +1 (555) 123-4567
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Presencia:</strong><br />
                  Miami, México, Colombia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Code Fast. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;