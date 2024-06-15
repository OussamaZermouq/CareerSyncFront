import axios from 'axios';


export default async function getSkills(){
    try {
        const BASE_URL = 'http://localhost:5000'
        const response = await axios.get(BASE_URL+'/skills');
        return response.data;
    } catch (error) {
        console.error('Error fetching Products:', error);
        return null;
    }
}