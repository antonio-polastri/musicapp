import {Album,Artist,Origin} from '../musicObject';
 

export class ArtistDeezer implements Artist{
   
    
    name!: string;
    components!: number;
    id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    descriptions!: string;
    albums!: Album[];

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any){
        this.origin= "deezer";
      //  console.log(json);
        this.name = json.name;
        this.components = 0;
        this.id = json.id;
        this.image = json.picture;

    }
  
    setAlbums(albums: Album[]): void {
        throw new Error('Method not implemented.');
    }
    addAlbum(album: Album): void {
        throw new Error('Method not implemented.');
    }
    getAlbums(): Album[] {
        throw new Error('Method not implemented.');
    }
     
    

}
 
export class ArtistDiscogs implements Artist{
    

    name!: string;
    components!: number;
    id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    descriptions!: string;
    albums!: Album[];

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any){
       // console.log(json);
        this.origin= "discogs";
        this.name = json.title;
        this.components = 0;
        this.id = json.id ;
        this.image= json.thumb;
        this.video = '';
        this.descriptions = '';
        this.albums = [];
    }
  
    setAlbums(albums: Album[]): void {
        throw new Error('Method not implemented.');
    }
    addAlbum(album: Album): void {
        throw new Error('Method not implemented.');
    }
    getAlbums(): Album[] {
        throw new Error('Method not implemented.');
    }
     

}

export class ArtistItunes implements Artist{
   
    
    name!: string;
    components!: number;
    id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    descriptions!: string;
    albums!: Album[];

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object){
        this.origin= "itunes";
    }
  
    setAlbums(albums: Album[]): void {
        throw new Error('Method not implemented.');
    }
    addAlbum(album: Album): void {
        throw new Error('Method not implemented.');
    }
    getAlbums(): Album[] {
        throw new Error('Method not implemented.');
    }
     

}

export class ArtistMusicBrainz implements Artist{
   
     
    name!: string;
    components!: number;
    id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    descriptions!: string;
    albums!: Album[];

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : any){
        console.log(json)
        this.origin= "musicbrainz";
        this.id = json.id;
        this.name = json.name;
        this.descriptions = json.disambiguation;
    }
  
    setAlbums(albums: Album[]): void {
        throw new Error('Method not implemented.');
    }
    addAlbum(album: Album): void {
        throw new Error('Method not implemented.');
    }
    getAlbums(): Album[] {
        throw new Error('Method not implemented.');
    }
     

}