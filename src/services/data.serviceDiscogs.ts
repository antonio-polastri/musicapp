import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/adapter/AlbumAdpt'
import * as ArtistAdpt from './lib/core/adapter/ArtistAdpt'
import * as TrackAdpt from './lib/core/adapter/TrackAdpt'



class DataServiceDiscogs{

    token = '&token=AewajmAUAVgBcbOuIgjuNDzfcRcQihTkwloznSNf';
  
    getData = async(q : string) => {

        
        return await Call.axiosRequestDS.get(`database/search?q=${q}&type=artist${this.token}`)
        .then(response =>{ return new ArtistAdpt.ArtistDiscogs(response.data)} );


    }
    getAlbums = async(artistid : string) => {

      
      return await Call.axiosRequestDS.get(`/artists/${artistid}/releases?page=1&per_page=400&sort=year&sort_order=asc`).then(response => response.data);


  } 
  getTracks = async(releaseId : string) => {

     
     return await Call.axiosRequestDS.get(`/releases/${releaseId}`).then(response => response.data);


 }
 getBio = async(artistId : string) => {

     
  return await Call.axiosRequestDS.get(`/artists/${artistId}`).then(response => response.data);


}

}

export default new DataServiceDiscogs();