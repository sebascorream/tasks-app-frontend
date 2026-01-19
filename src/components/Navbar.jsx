import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();

  const isTasksPage = location.pathname.startsWith("/tasks");

  return (
    <nav className="sticky top-0 z-40 mx-auto max-w-5xl">
      <div className="bg-zinc-800/80 backdrop-blur-xl border border-zinc-700 rounded-2xl px-8 py-4 flex items-center justify-between shadow-lg">
        
        {/* Logo */}
        <Link to={isAuthenticated ? "/tasks" : "/"}>
          <h1 className="text-2xl font-bold tracking-tight text-white hover:text-emerald-400 transition">
            Tasks <span className="text-emerald-400">Manager</span>
          </h1>
        </Link>

        {/* Actions */}
        <ul className="flex items-center gap-4 text-sm text-white">
          {isAuthenticated ? (
            <>
              <li className="hidden sm:flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-700 text-zinc-300">
                👋 Hola, <span className="font-semibold text-white">{user.username}</span>
              </li>

              <li>
                <button
                  onClick={logout}
                  className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-xl hover:border-red-500 hover:text-red-400 transition"
                >
                  Cerrar sesión
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-xl border border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 transition"
                >
                  Iniciar sesión
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="bg-emerald-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-emerald-400 transition shadow-md shadow-emerald-500/20"
                >
                  Registrarse
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
