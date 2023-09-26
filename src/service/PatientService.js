import httpService from "./httpService";
export default {
    getUser(){
        return httpService.get("http://localhost:8081/user/hello");
    }

}