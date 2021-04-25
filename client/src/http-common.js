import axios from "axios";

export default axios.create({
    // base url depends on server config
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    }
});
