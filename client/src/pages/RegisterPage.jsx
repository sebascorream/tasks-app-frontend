import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="flex min-h-[calc(100vh-100px)] justify-center items-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-xl border border-zinc-700">
        {/* Backend errors */}
        {registerErrors &&
          registerErrors.map((error, i) => (
            <div
              key={i}
              className="bg-red-500/10 border border-red-500 text-red-400 p-2 rounded-md mb-2"
            >
              {error}
            </div>
          ))}

        <h1 className="text-2xl font-bold mb-6 text-center">
          Crear cuenta
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters long",
                },
              })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-red-400 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters long",
                },
              })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-black py-2 rounded-md font-semibold hover:bg-emerald-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-zinc-300">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-emerald-400 hover:underline"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
