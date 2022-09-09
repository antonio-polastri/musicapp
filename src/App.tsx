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
import { Badge, Box, Button, Divider, Flex, Grid, GridItem, Heading, Spinner ,Text, useToast} from '@chakra-ui/react';
import { SkeletonLoader } from './component/skel';
import DataServiceCall from './services/data.service'
 
 
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'
import { MapInner } from './component/mapinner';
import { MapInnerMulti } from './component/mapinner_multi';


const App = () => {
   
  const [listMB, setListMB] = useState( Array<Artist>());
  const [listMBFiltered, setListMBFiltered] = useState( Array<Artist>());

  const [albums,setAlbums] =  useState({});
  const [albumsFiltered,setAlbumFiltered] =  useState({});
  const [songs,setSongs] =  useState(Object);
  const [lyric,setLyric] = useState(Object);
  const [trackDetail,setTrackDetail] = useState(Object);

  const [artistbio,setArtistbio] = useState(Object);
  const [artistEvent,setArtistEvent] = useState(Object);
  const [hotelEvent,setHotelEvent] = useState(Object);
  const [titles,setTitles]  =  useState({songname:'',albumname:'',artistname: ''});

  const [searchtype, setSearchtype] = useState({type:'',q:''})
  const [researchType,setResearchType] = useState("artist");
  const [researchMType,setResearchMType] = useState("discogs");

  const [artistdraw, setArtistdraw] = useState(false);
  const [albumdraw, setAlbumdraw] = useState(false);
  const [songlistdraw, setSonglist] = useState(false);
  const [lyricdraw, setLyricdraw] = useState(false);
  const [eventdraw, setEventdraw] = useState(false);
  const [hoteldraw, setHoteldraw] = useState(false);
  const [biodraw, setBiodraw] = useState(false);

  const [spinnerLoading1, setSpinnerLoading1] = useState(false);
  const [spinnerLoading2, setSpinnerLoading2] = useState(false);
  const [spinnerLoading3, setSpinnerLoading3] = useState(false);
  const [spinnerLoading4, setSpinnerLoading4] = useState(false);

  const toast = useToast();
 

  const getAlbums = async (artistid : string,origin : Origin) =>{
     
    setAlbums({});
    setSongs({});
    setLyric({});
    setTrackDetail({});
    
    setSpinnerLoading2(true);
   
    let albums : any = await DataServiceCall.getAlbums(artistid ,origin );
    
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
      setSongs( await DataServiceCall.getSongs(albumid ,albumName ,origin));
      setLyric({});
      setSpinnerLoading3(false);
   }

  const getLyrics = async(title:string,artist:string ,trackdata : Track, trackid? : any)=>{

    setSpinnerLoading4(true);
    setTrackDetail({});

    setTrackDetail(await getTrackDetails(trackid));
    
    setTitles({...titles,songname :title});
     
    setLyricdraw(true)

    setLyric( await DataServiceCall.getLyrics(title,titles.artistname?.split("(")[0]));//( await proxy.get(`lyric?artist=${titles.artistname?.split("(")[0]}&title=${title}`)).data);//await new ServiceWrapper(DataServiceDeezer,origin).getTracks(albumid).then( response=>{ return response }).catch());

    console.log('lyric returne'+lyric)

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
  
    return await DataServiceCall.getTrackDetail(id);

  }
/*
  const getWiki = async(artist:string)=>{
    setArtistbio({});
    setTrackDetail({});

    setArtistbio ( await DataServiceDeezer.getBio(artist).then(response =>{return response}).catch(()=>{"No lyrics found"}))
      
  }*/
 


  const getBio = async(artist:string)=>{

    setArtistbio('');
    let dataBio : any = await DataServiceCall.getBio(artist);
    console.log(dataBio)
    dataBio.error ?  toastNoData("Bio data","Bio doesn't exist",'warning',toast) :setArtistbio(dataBio) ;
     
  }

  //eliminare il get artist e creare un oggetto ricerca che in base al tipo di ricerca popola le rispettive liste
  const getArtist = async(q : string) =>{

     setSpinnerLoading1(true);

     listMB.length = 0;
     let ar : any = await DataServiceCall.getArtist(q);
     setListMB( ar);
     setListMBFiltered(ar)

     setSpinnerLoading1(false);

  }
  const getEvent = async (artist:string) => {
    setEventdraw(false)
    setArtistEvent({})
    let ar : [] = await DataServiceCall.getConcerts(artist);
   // console.log(ar.length)
    ar.length > 0 ? setEventdraw(true) : toastNoData("Events data","Event doesn't reach",'warning',toast)
    setArtistEvent(ar); 
  }
  
  const getEventHotels = async(lat: string,lon: string )=>{
    //  console.log("gethotels")
   // console.log(lat+ " "+lon)
    setHoteldraw(false)
    setHotelEvent({})
   // let ar : [] = 
    let hotels =  await DataServiceCall.getHotels(lat,lon) ;
   //  console.log(hotels)
    hotels.total > 0 ?  setHotelEvent({'hotels':hotels,'coordinates':{'lat':lat,'lon':lon}}) : toastNoData("Hotels data","Hotel doesn't reach",'warning',toast)
    hotels.total > 0 ?  setHoteldraw(true)  :  setHotelEvent({}); 
    //console.log("adadadadada "+hotels.hotels)
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

    let ar : any = await DataServiceCall.getDataSearch(q,tos);
    

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
        setSonglist(true)
        break;
      }
      
    }

    setSpinnerLoading1(false);
    setSpinnerLoading2(false);

  }
  const toastNoData =  (title:string,text:string,state:string,toast:any)=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
      
    toast({
      title: title,
      description: text,
      status: state,
      duration: 4000,
      isClosable: true,
    })
  }

 

  return (
   
    
   
    <div className="App">
 
     
                    <Layer side='left' size="full" context="Songs" open ={songlistdraw} close={setSonglist} children={
 

                     ( 
                     <div className='semicontainer'>

                      <div className='col scrollable'> 

                        {spinnerLoading3 && <LoadingSpinner /> }

                        <div className='songslist'>
                          
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
                   )}></Layer>  
         
                {artistbio.artist  && (

                    <Layer side="bottom" size="md" context="" open ={biodraw} close={setBiodraw} children={ <>
                    <div style={{display:'flex'}}>
                        <img src={artistbio.artist.image[2]['#text']} alt={artistbio.artist.name}></img> 
                        <div style={{padding:'1rem'}}>
                          <h1 style={{fontSize:'2rem'}} >{artistbio.artist.name} </h1> 
                          <br></br>
                          <div dangerouslySetInnerHTML={{__html:artistbio.artist.bio.summary}}>
                          </div> 
                        </div>
                        
                    </div>   
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <h1 style={{fontSize:'1.5rem'}} >Similar Artist</h1> 
                        {artistbio.artist.similar.artist.map((item: any,index: any) =>{

                                        return  <div  className='similar_artist'>{item.name}</div>

                                        })
                      }

                        </div> 
                      </>}></Layer>            
                    
                    ) 
                }
          <Layer side="top" size="full" context="Events" open ={eventdraw} close={setEventdraw} children={ 
            <>  <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              {
              artistEvent.length > 0  &&
               (artistEvent.map((item:any,i:any)=>{

                    return <>
                     
                      <GridItem  >

                        <Heading as='h1' size='md' fontWeight='bold' mb={3}>
                          {item.title}
                          
                        </Heading>
                        <Button className='bio_button'size='xs' colorScheme='linkedin'   onClick={()=> {getEventHotels(item.location[1],item.location[0]) }}>Hotels!</Button>
                       
                        <Text fontSize='lg' >{ item.start	}  </Text>
                        {item.entities[0] && <Text fontSize='sm'> {item.entities[0].name}</Text>}
                        {item.entities[0] && <Text fontSize='sm'  mb={3}> {item.entities[0].formatted_address}</Text>}
                        {item.entities[0] && 
                          <MapInner lat={item.location[1]} lon={item.location[0]}></MapInner>
                          }
                      </GridItem>
                      
                   
                   
                    </>
                  })
                )
              } </Grid>
                </>}
              ></Layer>   

          <Layer side="top" size="full" context="Hotels" open ={hoteldraw} close={setHoteldraw}  children={ 
            <>  <Grid templateColumns='repeat(3, 1fr)' gap={6}>
              {
/**categoryCode
: 
"4EST"
categoryName
: 
"4 STARS"
code
: 
187882
currency
: 
"EUR"
destinationCode
: 
"PRI"
destinationName
: 
"Seychelles Island"
latitude
: 
"-4.320131301879883"
longitude
: 
"55.751983642578125"
maxRate
: 
"549.72"
minRate
: 
"320.90"
name
: 
"Acajou Beach Resort" */}
                      <>
                     
                      <GridItem  >

                     { 
                     
                     /*   <Heading as='h1' size='md' fontWeight='bold' mb={3}>
                          {item.name} - {item.categoryName} - {item.destinationName}
                          lat={item.latitude} lon={item.longitude}
               </Heading> 
                       
                       
                       
                         
                         <Text fontSize='sm'  mb={3}> Price : {item.minRate} - {item.maxRate}</Text> 
                         */}

                          <MapInnerMulti hotelEvent={hotelEvent} ></MapInnerMulti>
                          
                      </GridItem>
                      
                   
                   
                    </>
                  </Grid>
                </>}

          
              ></Layer>    


           
      <div className='top'>
  

           <SearchComponent getSearch={getSearch} getArtist={getArtist}  setResearchType={setResearchType} researchType={researchType} setSpinnerLoading1={setSpinnerLoading1}></SearchComponent>
      
      </div>

      <div className='body_container'>

        <div className='semicontainer'>
         

          <div className='col scrollable'>

          {  listMBFiltered && Object.keys( listMBFiltered).length>0 &&  <Filter list={listMB} listFiltered={listMBFiltered} setListFiltered={setListMBFiltered}></Filter>}
          
            {spinnerLoading1 ? <LoadingSpinner /> : listMB  &&

              <ListArtistComponent setEventdraw={setEventdraw} getEvent={getEvent} setBiodraw={setBiodraw} listMB={listMBFiltered} getBio={getBio} artistbio={artistbio} getAlbums={getAlbums} setAlbums={setAlbums} albums={albums} setTitles={setTitles} titles={titles} /*getWiki={getWiki}*/></ListArtistComponent> 
           
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

          
      </div>
     
    
    </div>
    
  );
}

export default App;
