import axios from '../Configuration/CustomAxiosConfig.js';
const BASE_URL = 'http://localhost:8080/api/v1/user';

export async function getUser() {
    const TOKEN = localStorage.getItem('token');
    if (!TOKEN) {
        console.error('Token not found. Redirecting to login page...');
        return null;
    }
    try {
        const response = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

export async function updateUser(user) {
    const TOKEN = localStorage.getItem('token');
    if (!TOKEN) {
        console.error('Token not found. Redirecting to login page...');
        return null;
    }
    try {
        const response = await axios.put(BASE_URL, user, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        return null;
    }
}

