import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 w-full max-w-md rounded-xl p-6 border border-zinc-700 hover:border-emerald-500 hover:bg-zinc-700 transition">
      <header className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-semibold text-white">
          {task.title}
        </h2>

        <div className="flex gap-x-2">
          <Link
            to={`/tasks/${task._id}`}
            className="text-sm bg-emerald-500 hover:bg-emerald-600 text-black px-3 py-1.5 rounded-md transition"
          >
            Editar
          </Link>

          <button
            onClick={() => deleteTask(task._id)}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md transition"
          >
            Eliminar
          </button>
        </div>
      </header>

      {task.description && (
        <p className="text-sm text-slate-300 mb-4">
          {task.description}
        </p>
      )}

      <footer className="flex justify-between items-center text-xs text-slate-400">
        <span className="flex items-center gap-1">
          📅 {dayjs(task.date).utc().format("DD MMM YYYY")}
        </span>
      </footer>
    </div>
  );
}

export default TaskCard;
