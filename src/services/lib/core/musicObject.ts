export type Origin  = "discogs" | "deezen" | "musicbrainz" | "itunes" | "lyricsovh"; 
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

    setTracks(tracks : Track[]) : void;
    addTrack(track : Track) : void;
    getTracks() : Track[] | null;


}

 export interface Artist{

    name : string;
    components : number;
    _id : number;
    origin : Origin;
    image : string;
    video : string;
    descriptions : string;
    albums : Album[];
    setAlbums(albums : Album[]) : void;
    addAlbum(album : Album) : void;
    getAlbums() : Album[];

}
 