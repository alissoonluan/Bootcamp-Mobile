import axios from "axios";

export default axios.create({
    baseURL:"http://ea732ce462b9.ngrok.io",
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaXNzb25AYWxpc3Nvbi5jb20iLCJwYXNzd29yZCI6InNlY3JldG8iLCJpYXQiOjE1OTc0NDg3ODMsImV4cCI6MTU5NzQ2Njc4M30._2FXTDYlHjd7zpRh1M2lg_wFxidlcMsHAjcUB5QrU7U"
    }

});




