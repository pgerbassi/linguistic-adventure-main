import { motion } from "framer-motion";
import { Brain, Gamepad2, Users, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Aprendizado com IA",
    description: "Aulas personalizadas adaptadas ao seu estilo e ritmo de aprendizado",
  },
  {
    icon: Gamepad2,
    title: "Experiência Gamificada",
    description: "Aprenda através de jogos interativos e desafios envolventes",
  },
  {
    icon: Users,
    title: "Tutores Especialistas",
    description: "Conecte-se com falantes nativos e professores profissionais",
  },
  {
    icon: Sparkles,
    title: "Acompanhamento Inteligente",
    description: "Monitore seu progresso com análises detalhadas e insights",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light mb-4">
            Por Que Nos Escolher
          </h2>
          <p className="text-light/80 max-w-2xl mx-auto mb-8">
            Experimente a maneira mais eficaz de dominar vários idiomas
          </p>
          
          <div className="relative aspect-video w-full max-w-3xl mx-auto mb-16 rounded-xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Por que nos escolher"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <a href="https://pay.hotmart.com/D96966130K?sck=HOTMART_PRODUCT_PAGE&off=8429n4o8&hotfeature=32&_gl=1*mt8zzm*_gcl_au*Njk1MTEzNjQxLjE3MzgwMDE1OTU.*_ga*MjEwOTUzMjE1MC4xNzM4MDAxNTkw*_ga_GQH2V1F11Q*MTczODAzMTEwMy41LjEuMTczODAzMTQ4OC41OS4wLjA.&bid=1738031491700" target="_blank" rel="noopener noreferrer">
          <button 
            className="relative inline-flex items-center justify-center px-8 py-4 font-bold text-light 
                     bg-highlight rounded-full overflow-hidden group focus:outline-none focus:ring-2 
                     focus:ring-highlight/50 hover:scale-105 transition-transform duration-200
                     before:absolute before:inset-0
                     before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                     before:translate-x-[-200%] before:animate-shine"
          >
            Comece Agora
            <span className="ml-2">→</span>
          </button>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-primary/10 backdrop-blur-sm 
                         border border-light/10 hover:border-light/20 
                         transition-all duration-300"
            >
              <div className="w-12 h-12 mb-4 mx-auto bg-highlight/10 
                            rounded-lg flex items-center justify-center">
                {<benefit.icon className="w-6 h-6 text-highlight" />}
              </div>
              <h3 className="text-xl font-semibold text-light mb-2">
                {benefit.title}
              </h3>
              <p className="text-light/70">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;