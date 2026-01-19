import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col justify-center items-center px-6">
      
      {/* Hero */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Organiza tus tareas con{" "}
          <span className="text-emerald-500">eficiencia</span>
        </h1>

        <p className="text-zinc-400 text-lg mb-8">
          Planifica tu día, gestiona tus pendientes y mantén el control de tus
          actividades en un solo lugar.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Comenzar
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl w-full">
        <div className="bg-zinc-800 p-6 rounded-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-emerald-400">
            📝 Crea tareas
          </h3>
          <p className="text-zinc-400">
            Registra tus actividades de forma rápida y sencilla.
          </p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-emerald-400">
            📅 Organiza tu tiempo
          </h3>
          <p className="text-zinc-400">
            Asigna fechas y mantén tus pendientes bajo control.
          </p>
        </div>

        <div className="bg-zinc-800 p-6 rounded-md text-center">
          <h3 className="text-xl font-semibold mb-2 text-emerald-400">
            🚀 Aumenta tu productividad
          </h3>
          <p className="text-zinc-400">
            Concéntrate en lo importante y cumple tus objetivos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
