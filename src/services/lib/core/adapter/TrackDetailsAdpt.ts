 
import { Origin, TrackDetail} from '../musicObject';
 

export class TrackDetailDeezer implements TrackDetail{
    name!: string;
    name_short!: string;
    lenght!: number;
    artist!: Object;
    _id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    album_id!: number;
    artist_id!: number;
    lyrics!: string;
    released!: string;
    album_details!: object;
    position!: string;
    type!: string;
    link?: string | undefined;
    preview?: string | undefined;
     
    constructor(json : any){
        this.origin = 'deezer';
      // console.log(typeof(this)+"**"+json);
        this.artist = json.artist;
        this._id = json.id;
        this.released = json.release_date;
        this.preview = json.preview;
        this.link = json.link;
        this.name = json.title;
        this.name_short = json.title_short;
        this.lenght = json.duration;

 

    }

}
  