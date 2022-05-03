import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import * as Call from './lib/config/api';
import  typeOfSeachDz  from './lib/config/options'; 

class DataServiceDeezer{
    

  
    getSearch = async(q:string,tos:typeOfSeachDz) =>{


        return await Call.axiosRequestDeezer.get(`/search?q=${tos}"${q}"`).then(response => response.data);

    }

   /*
  getTracks = async(artist : string,title:string,) => {

     
     return await Call.axiosRequestDeezer.get(`/releases/${artist}`).then(response => response.data);


    }
    getBio = async(artistId : string) => {

        
    return await Call.axiosRequestDS.get(`/artists/${artistId}`).then(response => response.data);


    }*/

}

export default new DataServiceDeezer();