import http from "../http-common";

class DeviceService {
    getAll() {
        return http.get("/device")
    }

    getSearchResults(data) {
        return http.get(`/device/search`, data)
    }
    create(data) {
        return http.post("/device", data);
    }
}

export default new DeviceService();