import axios from "axios";
 
const local = 'http://localhost:5000'
const production = 'https://bac-backend-web.onrender.com'
 
// Use environment variable instead of hardcoded value
const MODE = process.env.NEXT_PUBLIC_MODE || 'pro'
 
const api_url = MODE === 'pro' ? production : local
 
const api = axios.create({
    baseURL: `${api_url}/api`,
    withCredentials: true
})
 
export default api