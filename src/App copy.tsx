import React ,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import './App.css';
 
/* SERVICE */

//import   DataServiceDeezer from './services/data.serviceDeezer';


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
import { Filter } from './component/filter';
import { Layer } from './component/layer';

 



const App = () => {
   
  const [listMB, setListMB] = useState( Array<Artist>());
  const [listMBFiltered, setListMBFiltered] = useState( Array<Artist>());

  const [albums,setAlbums] =  useState({});
  const [albumsFiltered,setAlbumFiltered] =  useState({});
  const [songs,setSongs] =  useState(Object);
  const [lyric,setLyric] = useState(Object);
  const [trackDetail,setTrackDetail] = useState(Object);

  const [artistbio,setArtistbio] = useState(Object);
  const [titles,setTitles]  =  useState({songname:'',albumname:'',artistname: ''});

  const [searchtype, setSearchtype] = useState({type:'',q:''})
  const [researchType,setResearchType] = useState("artist");
  const [researchMType,setResearchMType] = useState("discogs");

  const [artistdraw, setArtistdraw] = useState(false);
  const [albumdraw, setAlbumdraw] = useState(false);
  const [songlistdraw, setSonglist] = useState(false);
  const [lyricdraw, setLyricdraw] = useState(false);

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
   
    let albums : any = ( await proxy.get(`albums?artistid=${artistid}&origin=${origin}`)).data;
    setAlbums(albums); 
    setAlbumFiltered(albums); 
    setAlbumdraw(true)
    setSpinnerLoading2(false);
     
  }

  const getSongs = async (albumid : string,albumName : string,origin: Origin) =>{

      setSpinnerLoading3(true);
      setSongs({});
      setTrackDetail({});
      setSonglist(true)
      setTitles({...titles, albumname : albumName}); 
      setSongs( ( await proxy.get(`songs?albumid=${albumid}&origin=${origin}`)).data); 


      setLyric({});
      setSpinnerLoading3(false);
   }

  const getLyrics = async(title:string,artist:string ,trackdata : Track, trackid? : any)=>{

    setSpinnerLoading4(true);
    setTrackDetail({});

    setTrackDetail(await getTrackDetails(trackid));
    
    setTitles({...titles,songname :title});
    setLyricdraw(false)
    setLyricdraw(true)
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
/*
  const getWiki = async(artist:string)=>{
    setArtistbio({});
    setTrackDetail({});

    setArtistbio ( await DataServiceDeezer.getBio(artist).then(response =>{return response}).catch(()=>{"No lyrics found"}))
      
  }*/
//eliminare il get artist e creare un oggetto ricerca che in base al tipo di ricerca popola le rispettive liste
  const getArtist = async(q : string) =>{

     setSpinnerLoading1(true);

     listMB.length = 0;
     let ar : any =( await proxy.get(`artist?q=${q}`)).data
     setListMB( ar);
     setListMBFiltered(ar)

     setSpinnerLoading1(false);

  }
  const getSearch = async(q:string,tos:string) =>{

    //listMB.length = 0;
   // listMBFiltered.length = 0;

     setAlbums({});
     setAlbumFiltered({})
    setSongs({});
    setLyric({});
    setTrackDetail({});

    setSpinnerLoading1(true);
    setSpinnerLoading2(true);

    setArtistdraw(true)

    let ar : any =( await proxy.get(`search?q=${q}&st=${tos}`)).data;
    console.log(ar)
    switch(tos){
      case 'artist':{

        setListMB( ar);
        setListMBFiltered(ar)

        break;
      }
      case 'album':{
         setAlbums(ar); 
         setAlbumFiltered(ar); 
        break;
      }
      case 'track':{

        break;
      }
      
    }

    setSpinnerLoading1(false);
    setSpinnerLoading2(false);

  }
 
  return (

    
   
    <div className="App">

    {/*  <Layer open ={artistdraw} close={setArtistdraw} children={<ListArtistComponent listMB={listMBFiltered}  getAlbums={getAlbums} setAlbums={setAlbums} albums={albums} setTitles={setTitles} titles={titles} ></ListArtistComponent> }></Layer>
     
      <Layer open ={albumdraw} close={setAlbumdraw} children={
        
             
             albumsFiltered && Object.keys( albumsFiltered).length>0 &&
                  
                <AlbumsComponent albms={albumsFiltered} songs={songs} setSongs={setSongs} getSongs={getSongs}></AlbumsComponent> 
            } ></Layer>
     
          */}

     
    <Layer side='left'  context="Songs" open ={songlistdraw} close={setSonglist} children={ <div className='songslist'>
                
                
                        <ul>
                          {songs  && Object.keys( songs).length>0 &&

                                songs.map((item:any,index:any) =>{

                                      return  <TrackItemComponent item={item} index={index}  getLyrics={getLyrics} > </TrackItemComponent>

                                }) 
                    
                          }
                      </ul> 
                </div>}></Layer>  

     <Layer side="right" context="Lyric" open ={lyricdraw} close={setLyricdraw} children={ <>
                
                <TrackDetailsComponent item={trackDetail}></TrackDetailsComponent>   

                <LyricComponent lyric={lyric}></LyricComponent>
                </>}></Layer>            

      <div className='top'>
  

           <SearchComponent getSearch={getSearch} getArtist={getArtist} setResearchType={setResearchType} researchType={researchType} setSpinnerLoading1={setSpinnerLoading1}></SearchComponent>
      
      </div>

      <div className='body_container'>

        <div className='semicontainer'>
         

          <div className='col scrollable'>

          {  listMBFiltered && Object.keys( listMBFiltered).length>0 &&  <Filter list={listMB} listFiltered={listMBFiltered} setListFiltered={setListMBFiltered}></Filter>}
          
            {spinnerLoading1 ? <LoadingSpinner /> : listMB  &&

              <ListArtistComponent listMB={listMBFiltered}  getAlbums={getAlbums} setAlbums={setAlbums} albums={albums} setTitles={setTitles} titles={titles} /*getWiki={getWiki}*/></ListArtistComponent> 
           
           }
          </div>
   
          <div className='col scrollable'>

         
         
          {   spinnerLoading2 && <LoadingSpinner /> }

           {/* <div className='artist_descriptio'>
             
            {artistbio &&

              <ArtistComponent artist={artistbio}></ArtistComponent>
            }

          </div>*/}


            <div className='albumslist'>
            
            {  albumsFiltered && Object.keys( albumsFiltered).length>0 && 
            <> 
              
                <Filter list={albums} listFiltered={albumsFiltered} setListFiltered={setAlbumFiltered}> </Filter>
              
            </>
            }
            {  albumsFiltered && Object.keys( albumsFiltered).length>0 &&
                  
               <AlbumsComponent albms={albumsFiltered} songs={songs} setSongs={setSongs} getSongs={getSongs}></AlbumsComponent> 
            } 
            </div>
 
          </div>
          </div>

          <div className='semicontainer'>

            <div className='col scrollable'> 

              {spinnerLoading3 && <LoadingSpinner /> }

              <div className='songslist'>
                
                {  /*songs && (<div className='title_sl'><h1 className='text-center'>{titles.albumname}</h1> 
                            <h1 className='text-center'>  {titles.artistname}  </h1>
                            </div>)
          */}
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
