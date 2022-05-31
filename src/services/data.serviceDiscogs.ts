import * as Call from './lib/config/api';
import typeOfSeachDz from './lib/config/options';
import * as AlbumAdpt from './lib/core/adapter/AlbumAdpt'
import * as ArtistAdpt from './lib/core/adapter/ArtistAdpt'
import DataService from './lib/core/Service';
import * as TrackAdpt from './lib/core/adapter/TrackAdpt'
import { TrackDetail } from './lib/core/musicObject';



class DataServiceDiscogs implements DataService{

    private token = '&token=AewajmAUAVgBcbOuIgjuNDzfcRcQihTkwloznSNf';

    getSearch(q: string, tos: typeOfSeachDz) {
        throw new Error('Method not implemented.');
    }


    getTrack(trackId: string): Promise<TrackDetail> {
        throw new Error('Method not implemented.');
    }

  
  
    getArtist = async(q : string) => {

        
        return await Call.axiosRequestDS
        .get(`database/search?q=${q}&type=artist${this.token}`)
        .then(response =>{

            var returnedValue : ArtistAdpt.ArtistDiscogs[] = [];

            response.data.results.forEach( (element:any) => {
               // let a : ArtistAdpt.ArtistDiscogs = new ArtistAdpt.ArtistDiscogs(element);
               returnedValue.push(new ArtistAdpt.ArtistDiscogs(element));
            });
           //console.log(retvalue)
            return returnedValue;
        });
 
    }
     /*
    getTrackFree= async(q : string) => {

        
        return await Call.axiosRequestDS
        .get(`database/search?q=${q}&type=artist${this.token}`)
        .then(response =>{

            var returnedValue : ArtistAdpt.ArtistDiscogs[] = [];

            response.data.results.forEach( (element:any) => {
               
               returnedValue.push(new ArtistAdpt.ArtistDiscogs(element));
            });
           //console.log(retvalue)
            return returnedValue;
        });
 
    }
*/
    getAlbums = async(artistid : string) => {

      //resolve pagination problems
      return await Call.axiosRequestDS
      .get(`/artists/${artistid}/releases?page=1&per_page=400&sort=year&sort_order=asc`)
      .then(response =>{ 
        
        let returnedValue : AlbumAdpt.AlbumDiscogs[] = [];
        response.data.releases.forEach((element: object) =>{

            returnedValue.push(new AlbumAdpt.AlbumDiscogs(element));

        })
       // console.log(retValue)
        return returnedValue;
    
        
    });


  } 
  getTracks = async(releaseId : string) => {

     
     return await Call.axiosRequestDS.get(`/releases/${releaseId}`).then(response => {
         
        let returnedValue : TrackAdpt.TrackDiscogs[] = [];
       // console.log(response.data)
        response.data.tracklist.forEach((element : object) =>{
            returnedValue.push(new TrackAdpt.TrackDiscogs(element,response.data));
        })

        return returnedValue});


 }
 getBio = async(artistId : string) => {

     
    return await Call.axiosRequestDS.get(`/artists/${artistId}`).then(response => response.data);


    }

}

export default new DataServiceDiscogs();