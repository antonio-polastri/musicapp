import axios from 'axios';
import * as Call from './lib/config/api';


class DataServiceItunes {

    //necessario costruire la query per la rischiesta
     getAlbums = async (term : string)=>{
 
         return await Call.axiosRequestItunes.get('type=musicArtist&term=' + term).then(response => response.data);
        

      }

    getAutor  = async (term : string)=>{
 
        return await Call.axiosRequestItunes.get('type=musicArtist&entity=album&term=' + term).then(response => response.data);
       

     } 

   

}

export default new DataServiceItunes();