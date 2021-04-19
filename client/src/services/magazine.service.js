import http from "../http-common";

class MgzService {
    getAll() {
        return http.get("/magazines")
    }

    get(id) {
        return http.get(`/magazines/${id}`)
    }
    create(data) {
        return http.post("/magazines", data);
    }

    update(id, data) {
        return http.put(`/magazines/${id}`, data);
    }

    delete(id) {
        return http.delete(`/magazines/${id}`);
    }

    deleteAll() {
        return http.delete(`/magazines`);
    }
}

export default new MgzService();