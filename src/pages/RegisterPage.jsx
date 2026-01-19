import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    await signup(values);
  });

  return (
    <div className="relative min-h-[calc(100vh-100px)] flex items-center justify-center bg-zinc-950 overflow-hidden px-4">
      
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="relative bg-zinc-900/80 backdrop-blur-xl max-w-md w-full p-10 rounded-2xl border border-zinc-800 shadow-xl"
      >
        {/* Backend errors */}
        {registerErrors &&
          registerErrors.map((error, i) => (
            <div
              key={i}
              className="mb-3 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm text-red-400"
            >
              {error}
            </div>
          ))}

        <h1 className="text-3xl font-extrabold text-center mb-2">
          Crea tu cuenta
        </h1>

        <p className="text-zinc-400 text-center mb-8">
          Regístrate para comenzar a organizar tus tareas
        </p>

        <form onSubmit={onSubmit} className="space-y-5">
          
          {/* Username */}
          <div>
            <input
              type="text"
              placeholder="Nombre de usuario"
              {...register("username", {
                required: "El usuario es obligatorio",
                minLength: {
                  value: 3,
                  message: "Mínimo 3 caracteres",
                },
              })}
              className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-400">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Correo electrónico"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres",
                },
              })}
              className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-500 py-3 font-semibold text-zinc-900 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/30"
          >
            Crear cuenta
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-emerald-400 hover:text-emerald-300 transition"
          >
            Inicia sesión
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

export default RegisterPage;
