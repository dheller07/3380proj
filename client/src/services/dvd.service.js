import http from "../http-common";

class DvdService {
    getAll() {
        return http.get("/dvds")
    }

    get(id) {
        return http.get(`/dvds/${id}`)
    }
    create(data) {
        return http.post("/dvds", data);
    }

    update(id, data) {
        return http.put(`/dvds/${id}`, data);
    }

    delete(id) {
        return http.delete(`/dvds/${id}`);
    }

    deleteAll() {
        return http.delete(`/dvds`);
    }
}

export default new DvdService();