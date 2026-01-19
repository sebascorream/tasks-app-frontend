import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="group relative bg-zinc-800/80 backdrop-blur-xl w-full max-w-md rounded-2xl p-6 border border-zinc-700 hover:border-emerald-500 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10">
      
      {/* Header */}
      <header className="flex justify-between items-start mb-3">
        <h2 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition">
          {task.title}
        </h2>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
          <Link
            to={`/tasks/${task._id}`}
            className="text-xs bg-zinc-900 border border-zinc-700 hover:border-emerald-500 text-emerald-400 px-3 py-1.5 rounded-lg transition"
          >
            Editar
          </Link>

          <button
            onClick={() => deleteTask(task._id)}
            className="text-xs bg-zinc-900 border border-zinc-700 hover:border-red-500 text-red-400 px-3 py-1.5 rounded-lg transition"
          >
            Eliminar
          </button>
        </div>
      </header>

      {/* Description */}
      {task.description && (
        <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
          {task.description}
        </p>
      )}

      {/* Footer */}
      <footer className="flex justify-between items-center text-xs text-zinc-500">
        <span className="flex items-center gap-2 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-700">
          📅 {dayjs(task.date).utc().format("DD MMM YYYY")}
        </span>
      </footer>
    </div>
  );
}

export default TaskCard;
