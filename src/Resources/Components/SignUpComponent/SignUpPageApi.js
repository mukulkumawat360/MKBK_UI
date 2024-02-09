import axios from "axios";

const apiclient=axios.create({
    baseURL:"http://localhost:8080/login"

}
);


export const retriveUserSignUp=(data)=>apiclient.post('/crtlgncred',data)