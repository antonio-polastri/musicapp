import { threadId } from 'worker_threads';
import { Track,Origin} from '../musicObject';
 

export class TrackDeezer implements Track{
    
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    album_id!: number;
    artist_id!: number;
    lyrics!: string;
    master_url!: string;
    released!: string;
    notes!: string;
    album_detail!: object;
    extraartist!:string[];
    album_details!: object;
    type! : string;
    position!: string;
    link?: string ;

    constructor(json : any,i : number){
        this.origin= "deezer";
       // console.log(i);
        this._id =  json.id;
        this.name = json.title_short;
        this.lenght = json.duration;
        this.link = json.link;
        this.position = String(i);
    }
    
    
  
     


}
 
export class TrackDiscogs implements Track{
    
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    album_id!: number;
    artist_id!: number;
    lyrics!: string;
    master_url!: string;
    released!: string;
    notes!: string;
    album_detail!: object;
    extraartist!:string[];
    album_details!: object; 
    position!: string;
    type! : string;

    constructor(track:any ,json : any){
        this.origin= "discogs";
        this.name = track.title;
        this.lenght = parseInt(track.duration);
        this.artist = json.artists_sort;
        this._id = 0;
        this.image = '';
        this.video = '';
        this.album_id = json.master_id;
        this.artist_id = 0;
        this.lyrics ='';
        this.master_url = json.master_url;
        this.released = json.released;
        this.notes = json.notes;
        this.position = track.position;
        this.type = track.track;
        
    }
    
   
   
     
}

export class TrackItunes implements Track{
   
    
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    album_id!: number;
    artist_id!: number;
    lyrics!: string;
    master_url!: string;
    released!: string;
    notes!: string;
     
    extraartist!:string[];
    album_details!: object;
    position!: string;
    type! : string;

    constructor(json : object){
        this.origin= "itunes";
    }
    
   
    
     

}

export class TrackMusicBrainz implements Track{
   
   
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    album_id!: number;
    artist_id!: number;
    lyrics!: string;
    master_url!: string;
    released!: string;
    notes!: string;
    album_detail!: object;
    extraartist!:string[];
    album_details!: object;
    position!: string;
    type! : string;

    
    constructor(json : any){
        this.origin= "musicbrainz";
      //  console.log(json);
        this._id = json.id;
        this.name = json.title;
        this.lenght = json.lenght;
        this.position = json.position;

        
    }
     
     
    
     

}