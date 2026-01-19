import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          dayjs(task.date).utc().format("YYYY-MM-DD")
        );
      }
    }
    loadTask();
  }, [params.id, getTask, setValue]);

  const onSubmit = handleSubmit((data) => {
    const payload = {
      ...data,
      date: dayjs(data.date).utc().format(),
    };

    if (params.id) {
      updateTask(params.id, payload);
    } else {
      createTask(payload);
    }

    navigate("/tasks");
  });

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-zinc-800 max-w-md w-full p-8 rounded-xl border border-zinc-700">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {params.id ? "Editar tarea" : "Nueva tarea"}
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="text-sm text-zinc-300">
              Título
            </label>
            <input
              type="text"
              placeholder="Ej: Terminar proyecto"
              {...register("title", {
                required: "Title is required",
              })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              autoFocus
            />
            {errors.title && (
              <p className="text-red-400 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-zinc-300">
              Descripción
            </label>
            <textarea
              rows="3"
              placeholder="Describe la tarea"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-zinc-300">
              Fecha
            </label>
            <input
              type="date"
              {...register("date", {
                required: "Date is required",
              })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {errors.date && (
              <p className="text-red-400 text-sm mt-1">
                {errors.date.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 text-black py-2 rounded-md font-semibold hover:bg-emerald-600 transition"
          >
            {params.id ? "Actualizar tarea" : "Guardar tarea"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
