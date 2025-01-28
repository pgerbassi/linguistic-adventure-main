import { motion } from "framer-motion";
import { Globe2, Smartphone, Wifi, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "Múltiplos Idiomas",
    description: "Acesso a mais de 30 idiomas com pronúncias nativas",
  },
  {
    icon: Smartphone,
    title: "Multiplataforma",
    description: "Aprenda perfeitamente em todos os seus dispositivos",
  },
  {
    icon: Wifi,
    title: "Modo Offline",
    description: "Continue aprendendo mesmo sem conexão com a internet",
  },
  {
    icon: MessageCircle,
    title: "Prática ao Vivo",
    description: "Pratique com falantes nativos em conversas em tempo real",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light mb-4">
            Recursos da Plataforma
          </h2>
          <p className="text-light/80 max-w-2xl mx-auto mb-8">
            Tudo que você precisa para se tornar fluente em vários idiomas
          </p>

          <div className="relative aspect-video w-full max-w-3xl mx-auto mb-16 rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Recursos da Plataforma"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <button 
            className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-light 
                     bg-highlight rounded-full overflow-hidden group focus:outline-none focus:ring-2 
                     focus:ring-highlight/50 hover:scale-105 transition-transform duration-200
                     before:absolute before:inset-0
                     before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                     before:translate-x-[-200%] before:animate-shine"
          >
            Explorar Recursos
            <span className="ml-2">→</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start p-6 rounded-xl bg-accent/5 
                         border border-light/10 hover:border-light/20 
                         transition-all duration-300"
            >
              <div className="w-12 h-12 mr-4 bg-highlight/10 rounded-lg 
                            flex items-center justify-center flex-shrink-0">
                {<feature.icon className="w-6 h-6 text-highlight" />}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  {feature.title}
                </h3>
                <p className="text-light/70">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;