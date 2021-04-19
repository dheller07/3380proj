import http from "../http-common";

class LibrarianService {
    getAll() {
        return http.get("/librarians")
    }

    get(id) {
        return http.get(`/librarians/${id}`)
    }
    create(data) {
        return http.post("/librarians", data);
    }

    update(id, data) {
        return http.put(`/librarians/${id}`, data);
    }

    delete(id) {
        return http.delete(`/librarians/${id}`);
    }

    deleteAll() {
        return http.delete(`/librarians`);
    }
}

export default new LibrarianService();