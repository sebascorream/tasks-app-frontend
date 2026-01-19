import axios from "./axios";

// Configurar axios para enviar cookies
axios.defaults.withCredentials = true;

export const registerRequest = async (user) => {
    try {
        const response = await axios.post(`/register`, user);
        return response;
    } catch (error) {
        console.error("Register error:", error.response?.data);
        throw error;
    }
};

export const loginRequest = async (user) => {
    try {
        const response = await axios.post(`/login`, user);
        return response;
    } catch (error) {
        console.error("Login error:", error.response?.data);
        throw error;
    }
};

export const verifyTokenRequest = async () => {
    try {
        const response = await axios.get(`/verify`);
        return response;
    } catch (error) {
        console.error("Verify token error:", error.response?.data);
        throw error;
    }
};

