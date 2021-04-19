import http from "../http-common";

class LocationService {
    getAll() {
        return http.get("/locations")
    }

    get(id) {
        return http.get(`/locations/${id}`)
    }
    create(data) {
        return http.post("/locations", data);
    }

    update(id, data) {
        return http.put(`/locations/${id}`, data);
    }

    delete(id) {
        return http.delete(`/locations/${id}`);
    }

    deleteAll() {
        return http.delete(`/locations`);
    }
}

export default new LocationService();