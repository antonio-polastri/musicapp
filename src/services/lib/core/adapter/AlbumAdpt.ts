import {Album, Track,Origin} from '../musicObject';

export class AlbumDeezer implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    id!: number;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artistid!: number;
    tracks!: Track[];
    origin: Origin;
    label! : string;
    format! : string;
    url! : string;
;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any){
        this.origin= "deezer";
       // console.log(json)
       this.name = json.title;
       this.date = json.release_date;
       this.id = json.id;
       this.image = json.cover_medium;
       this.url = json.link;


    }
     


}
 
export class AlbumDiscogs implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    id!: number;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artistid!: number;
    tracks!: Track[];
    origin: Origin;
    label! : string;
    format! : string;
    url! : string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any){

        //console.log(json)
        this.origin= "discogs";
        this.id = json.main_release;
        this.name = json.title;
        this.image = '';
        this.label = json.label;
        this.lenght = 0;
        this.date = json.year;
        this.format = json.format;
        this.release = json.release;
        this.artist = json.artist;
        this.url = json.resource_url;

        
        //elaborate json
    }
    

}

export class AlbumItunes implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    id!: number;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artistid!: number;
    tracks!: Track[];
    origin: Origin;
    label!: string;
    format!: string;
    url!: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object){
        this.origin= "itunes";
        //elaborate json
    }
   
     


}

export class AlbumMusicBrainz implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    id!: number;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artistid!: number;
    tracks!: Track[];
    origin: Origin;
    label!: string;
    format!: string;
    url!: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any){
        this.origin= "musicbrainz";
        this.name = json.title;
        this.id = json.id;
        this.date = json.date;


        //elaborate json
    }
     
     


}