import { AxiosRequestHeaders } from "axios";

 


export default function authHeader() :AxiosRequestHeaders  {
  
    let user = JSON.parse(localStorage.getItem('user')!);

    //let exp = user.exp;
   // const now =  Date.now();
    //let c = CONFIG.EXPIRES;
     
    if (user && user.accessToken! && ( user.exp  >  Date.now())    ) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };

    } else {
      
       localStorage.removeItem('user');
      
      return {};
    }
  }