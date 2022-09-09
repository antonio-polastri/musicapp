export type Origin  = "discogs" | "deezer" | "musicbrainz" | "itunes" | "lyricsovh" |"musixmatch" | "lastfm" |"predicthq"; 
export interface Track{

    name : string;
    lenght : number;
    artist : string;
    id : number;
    origin : Origin;
    image : string;
    video : string;
    albumid : number;
    artistid : number;
    lyrics : string;
    master_url : string;
    released : string;
    notes: string;
    album_details : object;
    extraartist : string[];
    position : string;
    type : string;
    link? : string;


}
export interface TrackDetail{

    name : string;
    name_short : string;
    lenght : number;
    artist : Object;
    id : number;
    origin : Origin;
    image : string;
    video : string;
    albumid : number;
    artistid : number;
    lyrics : string;
    released : string;
    album_details : object;
    position : string;
    type : string;
    link? : string;
    preview?:string;


}
export interface Lyrics{

    
    id : number;
    origin : Origin;
    albumid : number;
    artistid : number;
    lyric : string;


}
export interface Album{

    name : string;
    lenght : number;
    artist : string;
    id : number;
    origin : Origin;
    image : string;
    video : string;
    date : string;
    release : string;
    artistid : number;
    tracks : Track[];
    label : string;
    format : string;
    url : string;
 
}

 export interface Artist{

    name : string;
    components? : number;
    id : number;
    origin : Origin;
    image : string;
    video? : string;
    descriptions? : string;
    albums? : Album[];
   

}

export interface Bio{

    name : string;
    
   

}

export interface Event{

    title : string;
    category : string;
    start: Date;
    end :Date;
    location : number[];
    country : string;
    id : string;
    origin : Origin;
    entities : {};
    timezone : string;
    
   

}
export interface Hotel{

    hotelId : string;
    hotelName : string;
    starRating : number ;
    dailyRate : number;
    crossedOutRate : number;
    imageURL : string;
    landingURL : string;
    includeBreakfast : boolean;
    freeWifi : boolean;
    

}