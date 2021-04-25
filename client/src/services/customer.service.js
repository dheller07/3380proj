import http from "../http-common";

class CustomerService {
    getAll() {
        return http.get("/customer")
    }

    getSearchResults(data) {
        return http.get(`/customer/search`, data)
    }
    create(data) {
        return http.post("/customer", data);
    }

    update(data) {
        return http.put(`/customers/modify`, data);
    }
}

export default new CustomerService();