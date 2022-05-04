import {Album, Track,Origin} from '../musicObject';

export class AlbumDeezer implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artist_id!: number;
    tracks!: Track[];
    origin: Origin;
    label! : string;
    format! : string;
    url! : string;
;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object){
        this.origin= "deezen";
    }
     
    setTracks(tracks : Track[]) : void{
        
    };

    addTrack(track : Track) : void{
        this.tracks.push(track);

    };

    getTracks() : Track[] | null{
        return this.tracks;
    };


}
 
export class AlbumDiscogs implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artist_id!: number;
    tracks!: Track[];
    origin: Origin;
    label! : string;
    format! : string;
    url! : string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any){

        //console.log(json)
        this.origin= "discogs";
        this._id = json.main_release;
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
     
    setTracks(tracks : Track[]) : void{
        
    };

    addTrack(track : Track) : void{
        this.tracks.push(track);

    };

    getTracks() : Track[] | null{
        return this.tracks;
    };


}

export class AlbumItunes implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artist_id!: number;
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
   
     
    setTracks(tracks : Track[]) : void{
        
    };

    addTrack(track : Track) : void{
        this.tracks.push(track);

    };

    getTracks() : Track[] | null{
        return this.tracks;
    };


}

export class AlbumMusicBrainz implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    image!: string;
    video!: string;
    date!: string;
    release!: string;
    artist_id!: number;
    tracks!: Track[];
    origin: Origin;
    label!: string;
    format!: string;
    url!: string;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object){
        this.origin= "musicbrainz";
        //elaborate json
    }
     
    setTracks(tracks : Track[]) : void{
        
    };

    addTrack(track : Track) : void{
        this.tracks.push(track);

    };

    getTracks() : Track[] | null{
        return this.tracks;
    };


}