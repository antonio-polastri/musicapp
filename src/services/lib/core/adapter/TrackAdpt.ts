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
   
    constructor(json : object){
        this.origin= "deezen";
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

    constructor(json : object){
        this.origin= "discogs";
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
    constructor(json : object){
        this.origin= "musicbrainz";
    }
     

}