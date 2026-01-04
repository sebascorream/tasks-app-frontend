import { createContext, useContext, useState } from 'react';
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest} from '../api/tasks';
import { ca } from 'zod/locales';
import { get } from 'mongoose';

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTasks debe ser usado dentro de un TasksProvider');
    }   

    return context;
};

export function TasksProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const res = await getTasksRequest();
            setTasks(res.data);
        } catch (error) {
            console.error('Error al obtener tareas:', error);
        }
    };

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task);
            setTasks([...tasks, res.data]); // Agregar nueva tarea al estado
            return res.data;
        } catch (error) {
            console.error('Error al crear tarea:', error);
            throw error; // Re-lanzar para que el llamador pueda manejarlo
        }
    };

    const deleteTask = async (id) => {
        try {
        const res = await deleteTaskRequest(id);
        if(res.status === 204)
            setTasks(tasks.filter(task => task._id !== id));
        }catch (error) {
            console.error('Error al eliminar tarea:', error);
        }
    };

    const getTask = async (id) => {
        try {
            const res = await getTaskRequest(id);
        return res.data;
        } catch (error) {
            console.error('Error al obtener tarea:', error);
        }
    };

    const updateTask = async (id, task) => {
        try {
          await updateTaskRequest(id, task);
        } catch (error) {
          console.error('Error al actualizar tarea:', error);
        }  
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                getTasks,
                deleteTask,
                getTask,
                updateTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}