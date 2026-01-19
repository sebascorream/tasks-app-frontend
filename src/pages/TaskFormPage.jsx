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
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-900 to-black flex justify-center items-center px-6">
      <div className="w-full max-w-lg bg-zinc-800/80 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-3">📝</div>
          <h1 className="text-3xl font-bold">
            {params.id ? "Editar tarea" : "Nueva tarea"}
          </h1>
          <p className="text-zinc-400 mt-1">
            {params.id
              ? "Actualiza la información de tu tarea"
              : "Agrega una nueva tarea a tu lista"}
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-zinc-300">
              Título
            </label>
            <input
              type="text"
              placeholder="Ej: Terminar proyecto"
              {...register("title", {
                required: "Title is required",
              })}
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-xl mt-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
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
            <label className="text-sm font-medium text-zinc-300">
              Descripción
            </label>
            <textarea
              rows="4"
              placeholder="Describe brevemente la tarea"
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-xl mt-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
            />
            {errors.description && (
              <p className="text-red-400 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-zinc-300">
              Fecha
            </label>
            <input
              type="date"
              {...register("date", {
                required: "Date is required",
              })}
              className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 rounded-xl mt-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
            {errors.date && (
              <p className="text-red-400 text-sm mt-1">
                {errors.date.message}
              </p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-black py-3 rounded-xl font-semibold hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20"
          >
            {params.id ? "Actualizar tarea" : "Guardar tarea"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
