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
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Mis tareas
        </h1>

        <Link
          to="/add-tasks"
          className="bg-emerald-500 text-black px-4 py-2 rounded-lg font-medium hover:bg-emerald-400 transition"
        >
          + Nueva tarea
        </Link>
      </div>

      {/* Empty state */}
      {tasks.length === 0 && (
        <div className="text-center text-zinc-400 mt-20">
          <p className="text-xl mb-2">No tienes tareas aún</p>
          <p>Empieza creando tu primera tarea</p>
        </div>
      )}

      {/* Tasks grid */}
      {tasks.length > 0 && (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TasksPage;
