import dataServiceDeezer from '../../../data.serviceDeezer';
import dataServiceDiscogs from '../../../data.serviceDiscogs';
import dataServiceItues from '../../../data.serviceItues';
import dataServiceMusicbrainz from '../../../data.serviceMusicbrainz';
import typeOfSeachDz from '../../config/options';
import { Album, Artist, Origin, Track, TrackDetail } from '../musicObject';
import DataService from '../Service';
/* DI of services */
export class ServiceWrapper{

        private service : DataService;

        /*constructor(service : DataService){
            this.service = service;
        }*/
        constructor(ds : DataService, origin? : Origin){
            
            if(origin){
                //set dataservice selected by origin
               switch(origin){

                    case "deezer":
                        this.service = dataServiceDeezer
                        break;
                    case "discogs":
                        this.service = dataServiceDiscogs
                        break;
                    case "itunes":
                        this.service = dataServiceItues
                        break;
                    /*case "lyricsovh":
                        this.service = dataserv
                        break;*/
                    case "musicbrainz":
                        this.service = dataServiceMusicbrainz
                        break;
                  /*  case "musixmatch":
                        this.service = dataServiceMusicxMatch
                        break;*/
                    default:
                        this.service = ds ;
                        break;
                    
               }


            }else{

                this.service = ds;
            }
            
           
        }
        

        getAlbum(id : string):Promise<Album[]>{

            return this.service.getAlbums(id);           
        }

        getSearch(q:string,tos:typeOfSeachDz) :any{

            return this.service.getSearch(q,tos);
        }

        getArtist(q:string):Promise<Artist[]>{

            return this.service.getArtist(q);
        }

        getAlbums(artistID :string):Promise<Album[]>{

            return this.service.getAlbums(artistID);

        }

        getTracks(albumId :string ) :Promise<Track[]>{

            return this.service.getTracks(albumId);

        }

        getTrack(trackId : string):Promise<TrackDetail>{

            return this.service.getTrack(trackId);

        }

        getBio(artistId : string):any{

            return this.service.getBio(artistId);

        }
}

