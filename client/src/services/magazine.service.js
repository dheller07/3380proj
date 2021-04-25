import http from "../http-common";

class MgzService {
    getAll() {
        return http.get("/magazine")
    }

    get(data) {
        return http.get(`/magazine/search`, data)
    }
    create(data) {
        return http.post("/magazine", data);
    }
}

export default new MgzService();