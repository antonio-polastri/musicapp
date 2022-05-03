import {Album, Track,Origin} from '../musicObject';

export class AlbumDeezer implements Album{
   
    name!: string;
    lenght!: number;
    artist!: string;
    _id!: number;
    image!: string;
    video!: string;
    date!: Date;
    release!: string;
    artist_id!: number;
    tracks!: Track[];
    origin: Origin;

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
    date!: Date;
    release!: string;
    artist_id!: number;
    tracks!: Track[];
    origin: Origin;

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object){
        this.origin= "discogs";
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
    date!: Date;
    release!: string;
    artist_id!: number;
    tracks!: Track[];
    origin: Origin;

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
    date!: Date;
    release!: string;
    artist_id!: number;
    tracks!: Track[];
    origin: Origin;

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