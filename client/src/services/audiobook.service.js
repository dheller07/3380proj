import http from "../http-common";

class AudioBookService {
    getAll() {
        return http.get("/audiobooks")
    }

    get(id) {
        return http.get(`/audiobooks/${id}`)
    }
    create(data) {
        return http.post("/audiobooks", data);
    }

    update(id, data) {
        return http.put(`/audiobooks/${id}`, data);
    }

    delete(id) {
        return http.delete(`/audiobooks/${id}`);
    }

    deleteAll() {
        return http.delete(`/audiobooks`);
    }
}

export default new AudioBookService();