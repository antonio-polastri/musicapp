import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
import * as Call from './lib/config/api';
import * as AlbumAdpt from './lib/core/adapter/AlbumAdpt'
import * as ArtistAdpt from './lib/core/adapter/ArtistAdpt'
import * as TrackAdpt from './lib/core/adapter/TrackAdpt'



class DataServiceDiscogs{

    token = '&token=AewajmAUAVgBcbOuIgjuNDzfcRcQihTkwloznSNf';
  
    getData = async(q : string) => {

        
        return await Call.axiosRequestDS
        .get(`database/search?q=${q}&type=artist${this.token}`)
        .then(response =>{

            var retvalue : ArtistAdpt.ArtistDiscogs[] = [];

            response.data.results.forEach( (element:any) => {
               // let a : ArtistAdpt.ArtistDiscogs = new ArtistAdpt.ArtistDiscogs(element);
                retvalue.push(new ArtistAdpt.ArtistDiscogs(element));
            });
           //console.log(retvalue)
            return retvalue;
        });

        


    }
    getAlbums = async(artistid : string) => {

      //resolve pagination problems
      return await Call.axiosRequestDS
      .get(`/artists/${artistid}/releases?page=1&per_page=400&sort=year&sort_order=asc`)
      .then(response =>{ 
        
        let retValue : AlbumAdpt.AlbumDiscogs[] = [];
        response.data.releases.forEach((element: object) =>{

            retValue.push(new AlbumAdpt.AlbumDiscogs(element));

        })
       // console.log(retValue)
        return retValue;
    
        
    });


  } 
  getTracks = async(releaseId : string) => {

     
     return await Call.axiosRequestDS.get(`/releases/${releaseId}`).then(response => response.data);


 }
 getBio = async(artistId : string) => {

     
  return await Call.axiosRequestDS.get(`/artists/${artistId}`).then(response => response.data);


}

}

export default new DataServiceDiscogs();