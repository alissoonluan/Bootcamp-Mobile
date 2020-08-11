import axios from "axios";

export default axios.create({
    baseURL:"http://5bcf7a8aa38c.ngrok.io",
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFsaXNzb25AYWxpc3Nvbi5jb20iLCJwYXNzd29yZCI6InNlY3JldG8iLCJpYXQiOjE1OTY3NTA3MzAsImV4cCI6MTU5Njc2ODczMH0.qcF-9qjtSmszf7T9QUaS-jEM1jhOo4usJDCxLMHzNxw"
    }

});




