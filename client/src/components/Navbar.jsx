import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();

  const isTasksPage = location.pathname.startsWith("/tasks");

  return (
    <nav className="bg-zinc-800 mx-auto my-4 max-w-6xl flex items-center justify-between px-8 py-4 rounded-xl">
      <Link to={isAuthenticated ? "/tasks" : "/"}>
        <h1 className="text-2xl font-bold text-white">
          Tasks <span className="text-emerald-400">Manager</span>
        </h1>
      </Link>

      <ul className="flex items-center gap-x-4 text-white">
        {isAuthenticated ? (
          <>

            <li className="text-sm text-zinc-300">
              Hola, <span className="font-semibold">{user.username}</span>
            </li>

            <li>
              <button
                onClick={logout}
                className="bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-600 transition"
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
                className="px-4 py-2 rounded-lg hover:bg-zinc-700 transition"
              >
                Iniciar sesión
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="bg-emerald-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-emerald-400 transition"
              >
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
