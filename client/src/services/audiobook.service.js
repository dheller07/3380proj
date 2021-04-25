import http from "../http-common";

class AudioBookService {
    getAll() {
        return http.get("/audiobook")
    }

    get(data) {
        return http.get(`/audiobooks/search`, data)
    }
    create(data) {
        return http.post("/audiobook", data);
    }
}

export default new AudioBookService();