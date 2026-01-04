import axios from "./axios";

export const getTasksRequest = async () => {
    try {
        const response = await axios.get("/tasks");
        return response;
    } catch (error) {
        console.error("Get tasks error:", error.response?.data);
        throw error;
    }
};

export const getTaskRequest = async (id) => {
    try {
        const response = await axios.get(`/tasks/${id}`);
        return response;
    } catch (error) {
        console.error("Get task error:", error.response?.data);
        throw error;
    }
};

export const createTaskRequest = async (task) => {
    try {
        const response = await axios.post("/tasks", task);
        return response;
    } catch (error) {
        console.error("Create task error:", error.response?.data);
        throw error;
    }
};

export const updateTaskRequest = async (id, task) => {
    try {
        const response = await axios.put(`/tasks/${id}`, task);
        return response;
    } catch (error) {
        console.error("Update task error:", error.response?.data);
        throw error;
    }
};

export const deleteTaskRequest = async (id) => {
    try {
        const response = await axios.delete(`/tasks/${id}`);
        return response;
    } catch (error) {
        console.error("Delete task error:", error.response?.data);
        throw error;
    }
};