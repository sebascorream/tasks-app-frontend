import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-900 to-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Mis tareas
            </h1>
            <p className="text-zinc-400 mt-1">
              Organiza y controla tus actividades diarias
            </p>
          </div>

          <Link
            to="/add-tasks"
            className="inline-flex items-center gap-2 bg-emerald-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20 w-fit"
          >
            <span className="text-xl">+</span>
            Nueva tarea
          </Link>
        </div>

        {/* Empty state */}
        {tasks.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center text-zinc-400 mt-32">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-zinc-800 mb-6 text-4xl">
              📝
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              No tienes tareas aún
            </h2>
            <p className="max-w-md mb-6">
              Crea tu primera tarea y empieza a organizar tu día de forma
              eficiente y sencilla.
            </p>

            <Link
              to="/add-tasks"
              className="bg-emerald-500 text-black px-7 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition shadow-md shadow-emerald-500/20"
            >
              Crear primera tarea
            </Link>
          </div>
        )}

        {/* Tasks grid */}
        {tasks.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TasksPage;
