import http from "../http-common";


 class EmployeeService {
     getAll() {
         return http.get("/employee")
     }

     get(data) {
         return http.get(`/employee/search`, data)
     }
     create(data) {
         return http.post("/employee", data);
     }

     update(data) {
         return http.put(`/employees/modify`, data);
     }
 }

export default new EmployeeService();