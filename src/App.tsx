import React ,{useState,useEffect} from 'react';
import './App.css';
 
/* SERVICE */

import   DataServiceDeezer from './services/data.serviceDeezer';


/*COMPONENTS */
import LoadingSpinner from './component/spinner';
import { Albums as AlbumsComponent}   from './component/albums';
import { TrackDetails   as TrackDetailsComponent} from './component/trackdetails';
import { ListArtist as ListArtistComponent} from './component/artists';
import { Artist as ArtistComponent} from './component/artist';
import { TrackItem as TrackItemComponent} from './component/trackitem';
import { Lyric as LyricComponent} from './component/lyric';
import { Search as SearchComponent} from './component/search';
import * as Call from './services/lib/config/api';

//import   {Album} from './component/album';

import { Track,Artist, Origin} from './services/lib/core/musicObject';
import { AxiosInstance } from 'axios';

 



const App = () => {
   
  const [listMB, setListMB] = useState( Array<Artist>());
  const [albums,setAlbums] =  useState({});
  const [songs,setSongs] =  useState(Object);
  const [lyric,setLyric] = useState(Object);
  const [trackDetail,setTrackDetail] = useState(Object);

  const [artistbio,setArtistbio] = useState(Object);
  const [titles,setTitles]  =  useState({songname:'',albumname:'',artistname: ''});

  const [searchtype, setSearchtype] = useState({type:'',q:''})
  const [researchType,setResearchType] = useState("artist");
  const [researchMType,setResearchMType] = useState("discogs");



  const [spinnerLoading1, setSpinnerLoading1] = useState(false);
  const [spinnerLoading2, setSpinnerLoading2] = useState(false);
  const [spinnerLoading3, setSpinnerLoading3] = useState(false);
  const [spinnerLoading4, setSpinnerLoading4] = useState(false);
  
  const proxy : AxiosInstance = Call.axiosReq


  const getAlbums = async (artistid : string,origin : Origin) =>{
     
    setAlbums({});
    setSongs({});
    setLyric({});
    setTrackDetail({});
    
    setSpinnerLoading2(true);
   
    
    setAlbums(( await proxy.get(`albums?artistid=${artistid}&origin=${origin}`)).data );//await new ServiceWrapper(DataServiceDeezer,origin).getAlbums(artistid).then( response=>{ return  response }).catch());
    
    setSpinnerLoading2(false);
     
  }

  const getSongs = async (albumid : string,albumName : string,origin: Origin) =>{

      setSpinnerLoading3(true);
      setSongs({});
      setTrackDetail({});

      setTitles({...titles, albumname :albumName}); 
      setSongs( ( await proxy.get(`songs?albumid=${albumid}&origin=${origin}`)).data);//await new ServiceWrapper(DataServiceDeezer,origin).getTracks(albumid).then( response=>{ return response }).catch());


      setLyric({});
      setSpinnerLoading3(false);
   }

  const getLyrics = async(title:string,artist:string ,trackdata : Track, trackid? : any)=>{

    setSpinnerLoading4(true);
    setTrackDetail({});

    setTrackDetail(await getTrackDetails(trackid));
    
    setTitles({...titles,songname :title});
    
    setLyric( ( await proxy.get(`lyric?artist=${titles.artistname?.split("(")[0]}&title=${title}`)).data);//await new ServiceWrapper(DataServiceDeezer,origin).getTracks(albumid).then( response=>{ return response }).catch());
/*

     setLyric (await DataServiceLyrics.getLyrics(titles.artistname?.split("(")[0],title ).then(response =>{return response}).catch(()=>{"No lyrics found"}))
    
     if(lyric.lyric && lyric.lyric.indexOf("No lyric") === -1)

        setLyric (await dataServiceMusicxMatch.getTrackFromLists(titles.artistname?.split("(")[0],title ).then(

          response =>{
          
            return {'lyric' : response}
          }
          ).catch(()=>{"No lyrics found"}))
  
*/    


    setSpinnerLoading4(false);

  }
//funziona solo con deezer
  const getTrackDetails = async(id : any) =>{
  
    return( (await proxy.get(`trackdetail?id=${id}`)).data)

  }

  const getWiki = async(artist:string)=>{
    setArtistbio({});
    setTrackDetail({});

    setArtistbio ( await DataServiceDeezer.getBio(artist).then(response =>{return response}).catch(()=>{"No lyrics found"}))
      
  }
//eliminare il get artist e creare un oggetto ricerca che in base al tipo di ricerca popola le rispettive liste
  const getArtist = async(q : string) =>{

     setSpinnerLoading1(true);

     listMB.length = 0;
 
     setListMB( ( await proxy.get(`artist?q=${q}`)).data);

     setSpinnerLoading1(false);

  }
 
  return (

    <div className="App">
     
      <div className='top'>

           <SearchComponent getArtist={getArtist} setResearchType={setResearchType} researchType={researchType} setSpinnerLoading1={setSpinnerLoading1}></SearchComponent>
      
      </div>

      <div className='body_container'>

        <div className='semicontainer'>

          <div className='col scrollable'>
          
            {spinnerLoading1 ? <LoadingSpinner /> : listMB  &&

              <ListArtistComponent listMB={listMB}  getAlbums={getAlbums} setAlbums={setAlbums} albums={albums} setTitles={setTitles} titles={titles} getWiki={getWiki}></ListArtistComponent> 
           
           }
          </div>
   
          <div className='col scrollable'>
         
          {   spinnerLoading2 && <LoadingSpinner /> }

            <div className='artist_descriptio'>
             
            {artistbio &&

              <ArtistComponent artist={artistbio}></ArtistComponent>
            }

            </div>


            <div className='albumslist'>
            
            {  albums && Object.keys( albums).length>0 && <div className="title_sl"><h1>Albums</h1></div>}
            {  albums && Object.keys( albums).length>0 &&
                  
               <AlbumsComponent albms={albums} songs={songs} setSongs={setSongs} getSongs={getSongs}></AlbumsComponent> 
            } 
            </div>
 
          </div>
          </div>

          <div className='semicontainer'>

            <div className='col scrollable'> 

              {spinnerLoading3 && <LoadingSpinner /> }

              <div className='songslist'>
                
                {  songs && (<div className='title_sl'><h1 className='text-center'>{titles.albumname}</h1> 
                            <h1 className='text-center'>  {titles.artistname}  </h1>
                            </div>)
                }
                        <ul>
                          {songs  && Object.keys( songs).length>0 &&

                                songs.map((item:any,index:any) =>{

                                      return  <TrackItemComponent item={item} index={index}  getLyrics={getLyrics} > </TrackItemComponent>

                                }) 
                    
                          }
                      </ul> 
                </div>
            </div>


            <div className='col scrollable'> 

              { spinnerLoading4 ?<LoadingSpinner />:<>
                
                <TrackDetailsComponent item={trackDetail}></TrackDetailsComponent>   

                <LyricComponent lyric={lyric}></LyricComponent>
                </>
              }
            </div>
          </div> 
      </div>
    
      <div className='footer'>
      </div>
    
    </div>
   
  );
}

export default App;
