import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Profissional de Negócios",
    videoId: "dQw4w9WgXcQ",
    quote: "Esta plataforma transformou minha jornada de aprendizado de idiomas. Agora posso falar três idiomas com confiança!",
  },
  {
    id: 2,
    name: "João Santos",
    role: "Engenheiro de Software",
    videoId: "dQw4w9WgXcQ",
    quote: "As aulas com IA são incrivelmente eficazes. Aprendi mais em 3 meses do que em anos de aulas tradicionais.",
  },
  {
    id: 3,
    name: "Ana Oliveira",
    role: "Blogueira de Viagens",
    videoId: "dQw4w9WgXcQ",
    quote: "Poder praticar com falantes nativos fez toda a diferença. Super recomendo!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Histórias de Sucesso
          </h2>
          <p className="text-light/80 max-w-2xl mx-auto">
            Veja o que nossa comunidade de alunos bem-sucedidos tem a dizer
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-full aspect-video mb-6 rounded-xl overflow-hidden border-2 border-highlight">
                <iframe
                  src={`https://www.youtube.com/embed/${testimonials[currentIndex].videoId}`}
                  title={testimonials[currentIndex].name}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <blockquote className="text-xl text-light mb-6 max-w-2xl">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <cite className="text-light/80 not-italic">
                <span className="font-semibold text-highlight">
                  {testimonials[currentIndex].name}
                </span>
                <span className="mx-2">•</span>
                <span>{testimonials[currentIndex].role}</span>
              </cite>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-accent/10 text-light hover:bg-accent/20 
                       transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-accent/10 text-light hover:bg-accent/20 
                       transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;