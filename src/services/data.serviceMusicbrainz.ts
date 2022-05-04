import axios from 'axios';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/adapter/AlbumAdpt'
import * as ArtistAdpt from './lib/core/adapter/ArtistAdpt'
import * as TrackAdpt from './lib/core/adapter/TrackAdpt'

//https://github.com/Borewit/musicbrainz-api
//https://musicbrainz.org/doc/MusicBrainz_Entity

//la query potrebbe cambiare in base al tipo di dati raccolti

class DataServiceMusicbrainz {



   //get artist from research
     getArtist  = async (term : string)=>{
      //se abbiamo il gruppo è presente dentro questo, usabile per inserire nella pagina
        return await Call.axiosRequestMB.get('artist?query=' + term).then(response => response.data);
       

     } 

     getArtistDetails = async (params: string) => {
        
      //https://musicbrainz.org/ws/2/artist/f90e8b26-9e52-4669-a5c9-e28529c47894
         return await Call.axiosRequestMB.get('artist?query=' + params).then(response => response.data);

     }


     getReleaseCredits = async(releaseId : string) =>{

   //   https://musicbrainz.org/ws/2/release/ff049656-0f4a-4126-bf1e-32597cd6a05b?inc=artist-credits


     }

     //get albums details
     getAlbums  = async (id : string)=>{
        console.log(`release-group?artist=${id}&type=album|ep`)
        //A release group, just as the name suggests, is used to group several different releases into a single logical entity. Every release belongs to one, and only one release group.
 //https://musicbrainz.org/ws/2/release-group?artist=3bf74908-e8b3-4158-8fae-4fd795bb4474&type=album|ep
      //return await Call.axiosRequestMB.get(`artist/${id}/?inc=releases`).then(response => response.data);
      return await Call.axiosRequestMB.get(`release?artist=${id}&type=album|ep`).then(response => response.data);
     

   } 
   //get tracks details
   getTracks  = async (id : string)=>{
 
      return await Call.axiosRequestMB.get(`release/${id}/?inc=artist-credits+labels+recordings+recording-level-rels+work-rels+work-level-rels+artist-rels`).then(response => response.data);

   } 

}

export default new DataServiceMusicbrainz();