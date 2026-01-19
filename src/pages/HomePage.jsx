import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]" />
      </div>

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center text-center px-6 py-32"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Organiza tus tareas <br />
          con{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            eficiencia
          </span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10">
          Planifica tu día, gestiona tus pendientes y mantén el control de tus
          actividades desde un solo lugar.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            to="/register"
            className="px-8 py-4 rounded-lg font-semibold bg-emerald-500 text-zinc-900 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30"
          >
            Comenzar ahora
          </Link>

          <Link
            to="/login"
            className="px-8 py-4 rounded-lg font-semibold border border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 transition-all"
          >
            Ya tengo cuenta
          </Link>
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className="relative max-w-6xl mx-auto px-6 pb-32">
        <div className="grid gap-6 md:grid-cols-3">
          
          {[
            {
              icon: "📝",
              title: "Crea tareas fácilmente",
              text: "Registra y edita tus actividades en segundos con una interfaz intuitiva."
            },
            {
              icon: "📅",
              title: "Organiza tu tiempo",
              text: "Asigna fechas y prioridades para mantener el control de tus pendientes."
            },
            {
              icon: "🚀",
              title: "Aumenta tu productividad",
              text: "Concéntrate en lo importante y cumple tus objetivos diarios."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-zinc-900/80 backdrop-blur p-8 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">
                {item.title}
              </h3>
              <p className="text-zinc-400">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>
    </div>
  );
}

export default HomePage;
