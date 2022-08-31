import typeOfSeachDz from "../config/options";
import { Album, Artist, Track, TrackDetail } from  './musicObject'


interface DataService{

    getSearch(q:string,tos:typeOfSeachDz) :any;
    getArtist(q:string): Promise<Artist[]>;
    getAlbums(artistID :string):Promise<Album[]>;
    getTracks(albumId :string ) :Promise<Track[]>;
    getTrack(trackId : string):Promise<TrackDetail>;
    getBio(artistId : string):any;

}

export default DataService;