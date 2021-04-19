import http from "../http-common";

class NarratorService {
    getAll() {
        return http.get("/narrators")
    }

    get(id) {
        return http.get(`/narrators/${id}`)
    }
    create(data) {
        return http.post("/narrators", data);
    }

    update(id, data) {
        return http.put(`/narrators/${id}`, data);
    }

    delete(id) {
        return http.delete(`/narrators/${id}`);
    }

    deleteAll() {
        return http.delete(`/narrators`);
    }
}

export default new NarratorService();