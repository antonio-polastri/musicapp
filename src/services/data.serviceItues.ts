import axios from 'axios';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/adapter/AlbumAdpt'
import * as ArtistAdpt from './lib/core/adapter/ArtistAdpt'
import * as TrackAdpt from './lib/core/adapter/TrackAdpt'
import DataService  from './lib/core/Service'; 
import typeOfSeachDz from './lib/config/options';
import { Artist, Track, TrackDetail } from './lib/core/musicObject';


class DataServiceItunes implements DataService {

    
    getSearch(q: string, tos: typeOfSeachDz) {
        throw new Error('Method not implemented.');
    }
    getArtist(q: string): Promise<Artist[]> {
        throw new Error('Method not implemented.');
    }
    getTracks(albumId: string): Promise<Track[]> {
        throw new Error('Method not implemented.');
    }
    getTrack(trackId: string): Promise<TrackDetail> {
        throw new Error('Method not implemented.');
    }
    getBio(artistId: string) {
        throw new Error('Method not implemented.');
    }

    //necessario costruire la query per la rischiesta
     getAlbums = async (term : string)=>{
 
         return await Call.axiosRequestItunes.get('type=musicArtist&term=' + term).then(response => response.data);
        

      }

    getAutor  = async (term : string)=>{
 
        return await Call.axiosRequestItunes.get('type=musicArtist&entity=album&term=' + term).then(response => response.data);
       

     } 

   

}

export default new DataServiceItunes();