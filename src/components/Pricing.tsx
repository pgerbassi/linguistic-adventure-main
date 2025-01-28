import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "Access to 5 languages",
      "Basic exercises",
      "Progress tracking",
      "Mobile app access",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    features: [
      "Access to all languages",
      "Advanced exercises",
      "Live tutoring sessions",
      "Offline mode",
      "Priority support",
    ],
    cta: "Get Pro",
    popular: true,
  },
  {
    name: "Premium",
    price: "$29",
    period: "per month",
    features: [
      "Everything in Pro",
      "1-on-1 coaching",
      "Customized study plan",
      "Certification prep",
      "Unlimited practice",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-light mb-4">
            Choose Your Plan
          </h2>
          <p className="text-light/80 max-w-2xl mx-auto">
            Start your language learning journey today with our flexible plans
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative p-8 rounded-xl backdrop-blur-sm 
                         border border-light/10 transition-all duration-300
                         ${plan.popular ? 'bg-primary/30' : 'bg-primary/10'}
                         ${plan.popular ? 'scale-105' : 'hover:scale-105'}`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 
                               bg-highlight text-light text-sm font-medium rounded-full">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-light mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-light">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-light/70 ml-2">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-light/80">
                    <Check className="w-5 h-5 text-highlight mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all duration-300
                          ${plan.popular 
                            ? 'bg-highlight hover:bg-highlight/90 text-light' 
                            : 'bg-primary hover:bg-primary/90 text-light'}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;