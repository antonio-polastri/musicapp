import * as Call from './lib/config/api';
import  typeOfSeachDz  from './lib/config/options'; 
import * as AlbumAdpt from './lib/core/adapter/AlbumAdpt'
import * as ArtistAdpt from './lib/core/adapter/ArtistAdpt'
import * as TrackAdpt from './lib/core/adapter/TrackAdpt'
 
import * as TrackDetailsAdpt from './lib/core/adapter/TrackDetailsAdpt'
import DataService  from './lib/core/Service'; 
import { Artist } from './lib/core/musicObject';


class DataServiceDeezer implements DataService{
   
    getSearch = async(q:string,tos:typeOfSeachDz) =>{

            
        return await Call.axiosRequestDeezer.get(`/search?q=${tos}"${q}"&output=json`).then(response => response.data);

    }

    getArtist = async(q:string): Promise<Artist[]> =>{
    

        return await Call.axiosRequestDeezer.get(`/search/artist/?q=${q}&output=json`).then(response => 
          {  
             var returnedValue : ArtistAdpt.ArtistDeezer[] = [];

            response.data.data.forEach( (element:any) => {
               
               returnedValue.push(new ArtistAdpt.ArtistDeezer(element));
            });
          
            return returnedValue;
           });

    }
    getAlbums = async(artistID :string) =>{
      //the solutions is a proxy server tht repay the request
     
             return await Call.axiosRequestDeezer.get(`/artist/${artistID}/albums`).then(response => 
               {   
                 // console.log(response.data)

                var returnedValue : AlbumAdpt.AlbumDeezer[] = [];
     
                 response.data.data.forEach( (element:any) => {
                    
                    returnedValue.push(new AlbumAdpt.AlbumDeezer(element));
                 });
               
                 return returnedValue;
                });
     
         }
 
   getTracks = async(albumId :string ) => {

     
     return await Call.axiosRequestDeezer.get(`/album/${albumId}`).then(response =>
      {
       // console.log(response.data);

         let returnedValue : TrackAdpt.TrackDeezer[] = [];
         let i = 0;
         response.data.tracks.data.forEach((track : any) => {
            i++;

            returnedValue.push(new TrackAdpt.TrackDeezer(track,i));
         })
         console.log(returnedValue);
         return returnedValue;


      
      });


    }
   //get single track data, specific for deezen
   getTrack = async(trackId : string) =>{
     
      return await Call.axiosRequestDeezer.get(`/track/${trackId}`).then((response)=>{
          let a = new TrackDetailsAdpt.TrackDetailDeezer (response.data);
          console.log(a)
         return a;


      });

   }
   
   
   getBio = async(artistId : string) => {

    return null;//await Call.axiosRequestDeezer.get(`/artists/${artistId}`).then(response => response.data);

    } 

}

export default new DataServiceDeezer();