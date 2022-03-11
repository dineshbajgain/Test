import axiosInstance from "./api";
const setup = () => {
    axios.interceptors.request.use((config) => {
        const token = JSON.parse(localStorage.getItem("vuex"))?.auth.token;
        console.log(token);
        if (token) {
        config.headers.authorization = 'Bearer ' + token;
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
  
}
export default setup;