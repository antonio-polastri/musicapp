import  {  AxiosInstance } from "axios";
import authHeader from "./auth-header";
import * as Call from './lib/config/api';
import { Origin, Track } from "./lib/core/musicObject";
 
const proxy : AxiosInstance = Call.axiosReq
 
//axios service call to MW, attenzione inietto qua l'header
class DataServiceCall {

            
                
        getDataSearch = async (q:string,tos:string)=>{
            
                return ( await proxy.get(`search?q=${q}&st=${tos}`,{headers: authHeader() })).data ;
            }

        getSongs = async (albumid : string,albumName : string,origin: Origin) =>{

            return  ( await proxy.get(`songs?albumid=${albumid}&origin=${origin}`,{headers: authHeader()})).data

        }
        getAlbums = async (artistid : string,origin : Origin) =>{

        return  ( await proxy.get(`albums?artistid=${artistid}&origin=${origin}`,{headers: authHeader()})).data;

        }
        
        getLyrics = async(title:string,artist:string ) =>{
            
          return  ( await proxy.get(`lyric?artist=${artist}&title=${title}`,{headers: authHeader()})).data
        }

        getArtist = async(q : string) =>{

            return ( await proxy.get(`artist?q=${q}`,{headers: authHeader()})).data;  
        }

        getTrackDetail   = async(id : any) =>{

            return( (await proxy.get(`trackdetail?id=${id}`,{headers: authHeader()})).data)
        }

        getBio = async(artist : string) =>{


            return( (await proxy.get(`bio?artist=${artist}`,{headers: authHeader()})).data)
        }

        getConcerts = async(artist : string) =>{


            return( (await proxy.get(`concert?artist=${artist}`,{headers: authHeader()})).data)
        }

        getHotels = async(lat : string,lon : string) =>{
             
            return( ((await proxy.get(`hotel?lon=${lon}&lat=${lat}`,{headers: authHeader()})).data).hotels)
        }

}
export default new DataServiceCall();