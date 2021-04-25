import http from "../http-common";

class BookService {
    getAll() {
        return http.get("/book")
    }

    getSearchResults(data) {
        return http.get("/books/search", data);
    }

    create(data) {
        return http.post("/book", data);
    }
}

export default new BookService();