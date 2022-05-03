import {Album,Artist,Origin} from '../musicObject';
 

export class ArtistDeezer implements Artist{
   
    
    name!: string;
    components!: number;
    _id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    descriptions!: string;
    albums!: Album[];

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object){
        this.origin= "deezen";
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
    _id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    descriptions!: string;
    albums!: Album[];

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object){
        this.origin= "discogs";
        this.name = 
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
    _id!: number;
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
    _id!: number;
    origin!: Origin;
    image!: string;
    video!: string;
    descriptions!: string;
    albums!: Album[];

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(json : object){
        this.origin= "musicbrainz";
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