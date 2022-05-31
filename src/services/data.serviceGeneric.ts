import typeOfSeachDz  from './lib/config/options'; 
import DataService  from './lib/core/Service'; 
import { Album, Artist, Track, TrackDetail } from './lib/core/musicObject';


class DataServiceGeneric implements DataService{
   getSearch(q: string, tos: typeOfSeachDz) {
      throw new Error('Method not implemented.');
   }
   getArtist(q: string): Promise<Artist[]> {
      throw new Error('Method not implemented.');
   }
   getAlbums(artistID: string): Promise<Album[]> {
      throw new Error('Method not implemented.');
   }
   getTracks(albumId: string): Promise<Track[]> {
      throw new Error('Method not implemented.');
   }
   getTrack(trackId: string): Promise<TrackDetail> {
      throw new Error('Method not implemented.');
   }
   getBio(artistId: string) {
      throw new Error('Method not implemented.');
   }
   
    

}

export default new DataServiceGeneric();