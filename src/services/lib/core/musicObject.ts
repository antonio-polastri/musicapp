export type Origin  = "discogs" | "deezer" | "musicbrainz" | "itunes" | "lyricsovh" |"musixmatch"; 
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
 