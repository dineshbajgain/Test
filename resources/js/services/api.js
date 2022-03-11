import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = "application/json";
axios.defaults.baseURL = "/api";
