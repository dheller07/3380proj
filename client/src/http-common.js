import axios from "axios";

export default axios.create({
    // base url depends on server config
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json"
    }
});
