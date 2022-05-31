export type Origin  = "discogs" | "deezer" | "musicbrainz" | "itunes" | "lyricsovh" |"musixmatch"; 
export interface Track{

    name : string;
    lenght : number;
    artist : string;
    _id : number;
    origin : Origin;
    image : string;
    video : string;
    album_id : number;
    artist_id : number;
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
    _id : number;
    origin : Origin;
    image : string;
    video : string;
    album_id : number;
    artist_id : number;
    lyrics : string;
    released : string;
    album_details : object;
    position : string;
    type : string;
    link? : string;
    preview?:string;


}
export interface Lyrics{

    
    _id : number;
    origin : Origin;
    album_id : number;
    artist_id : number;
    lyric : string;


}
export interface Album{

    name : string;
    lenght : number;
    artist : string;
    _id : number;
    origin : Origin;
    image : string;
    video : string;
    date : string;
    release : string;
    artist_id : number;
    tracks : Track[];
    label : string;
    format : string;
    url : string;
 
}

 export interface Artist{

    name : string;
    components? : number;
    _id : number;
    origin : Origin;
    image : string;
    video? : string;
    descriptions? : string;
    albums? : Album[];
   

}
 