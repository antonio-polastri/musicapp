import axios from 'axios';
import * as Call from './lib/config/api';
import * as Adapter from './lib/core/adapter/LyricsAdpt'
import * as AlbumAdpt from './lib/core/adapter/AlbumAdpt'
import * as ArtistAdpt from './lib/core/adapter/ArtistAdpt'
import * as TrackAdpt from './lib/core/adapter/TrackAdpt'

//https://musicbrainz.org/doc/MusicBrainz_Entity



class DataServiceLyrics {


    //necessario costruire la query per la rischiesta
     getLyrics = async (artist : string,songname : string)=>{
 
         return await Call.axiosLyrics.get(`/${artist}/${songname}`).then(  response => { return new Adapter.LyricsOvh(response.data) }).catch(function(ex) {
           return {lyric:"testo non presente"}
            
          });
        

      }

}

export default new DataServiceLyrics();