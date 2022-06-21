import {Origin,Lyrics} from '../musicObject';

export class LyricsOvh implements Lyrics{

    id!: number
    origin!: Origin;
    albumid!: number;
    artistid!: number;
    lyric!: string;

    constructor(json : any){
        this.origin= "lyricsovh";
        this.lyric = json.lyrics;
        this.id = 0;
        this.albumid = 0;
        this.artistid = 0;
        
    }

    
}