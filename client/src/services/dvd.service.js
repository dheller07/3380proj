import http from "../http-common";

class DvdService {
    getAll() {
        return http.get("/dvd")
    }

    getSearchResults(data) {
        return http.get(`/dvd/search`, data)
    }
    create(data) {
        return http.post("/dvds", data);
    }
}

export default new DvdService();