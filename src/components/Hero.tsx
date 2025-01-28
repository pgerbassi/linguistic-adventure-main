import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-primary to-primary" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-light rounded-full"
        >
          Bem-vindo ao Futuro do Aprendizado de Idiomas
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-light mb-6"
        >
          Domine a Arte dos Idiomas &
          <br />
          <span className="text-highlight">Torne-se um Poliglota Hoje!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-light/80 mb-8 max-w-2xl mx-auto"
        >
          Aprenda qualquer idioma, a qualquer hora, em qualquer lugar—com facilidade e diversão!
          Junte-se a milhares de alunos bem-sucedidos em todo o mundo.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-highlight text-light rounded-lg font-medium 
                   transition-colors duration-300 hover:bg-accent 
                   shadow-lg hover:shadow-xl hover:shadow-highlight/20"
        >
          Comece Sua Jornada
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;