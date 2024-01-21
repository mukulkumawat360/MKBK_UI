import axios from "axios";


const apiclient=axios.create({
    baseURL:"http://localhost:8080/login"

}
);

export const retriveUserExistance =(data)=>apiclient.post('/validateCredentials',data)

