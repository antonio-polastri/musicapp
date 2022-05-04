import axios from 'axios';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/adapter/AlbumAdpt'
import * as ArtistAdpt from './lib/core/adapter/ArtistAdpt'
import * as TrackAdpt from './lib/core/adapter/TrackAdpt'

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