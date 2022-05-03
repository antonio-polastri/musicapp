import {Origin,Lyrics} from '../musicObject';

export class LyricsOvh implements Lyrics{

    _id!: number
    origin!: Origin;
    album_id!: number;
    artist_id!: number;
    lyric!: string;

    constructor(json : any){
        this.origin= "lyricsovh";
        this.lyric = json.lyrics;
        this._id = 0;
        this.album_id = 0;
        this.artist_id = 0;
        
    }

    
}