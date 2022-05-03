import { get } from 'https';
import React ,{useState,useEffect} from 'react';
import './App.css';
//import * as Call from './api';
import   DataService from './services/data.serviceItues';  
import   DataServiceMB from './services/data.serviceMusicbrainz';  
import   DataServiceLyrics from './services/data.serviceLyrics';  
import   DataServiceDiscogs from './services/data.serviceDiscogs';
import LoadingSpinner from './component/spinner';
import { Lyrics } from './services/lib/core/musicObject';


const App = () => {
   
  const[listMB, setListMB] = useState("");
  const[albums,setAlbums] =  useState({});
  const[songs,setSongs] =  useState(Object);
  const[lyric,setLyric] = useState(Object);

  const[artistbio,setArtistbio] = useState(Object);
  const[titles,setTitles]  =  useState({songname:'',albumname:'',artistname: ''});
  const [spinnerLoading1, setSpinnerLoading1] = useState(false);
  const [spinnerLoading2, setSpinnerLoading2] = useState(false);
  const [spinnerLoading3, setSpinnerLoading3] = useState(false);
  const [spinnerLoading4, setSpinnerLoading4] = useState(false);
  const[researchType,setResearchType] = useState("artist");
 

  const getAlbums = async (artistid : string) =>{
    setAlbums({});
    setSpinnerLoading2(true);
     setAlbums( await DataServiceDiscogs.getAlbums(artistid).then( response=>{ return  response }).catch());
     setSpinnerLoading2(false);
     setSongs({});
     setLyric({});

  }

  const getSongs = async (albumid : string) =>{
      setSpinnerLoading3(true);
      setSongs({});
      setSongs( await DataServiceDiscogs.getTracks(albumid).then( response=>{ return response }).catch());
      setLyric({});
      setSpinnerLoading3(false);
   }

  const getLyrics = async(title:string,artist:string)=>{
    setSpinnerLoading4(true);
    setTitles({...titles,songname :title});
    setLyric (await DataServiceLyrics.getLyrics(titles.artistname?.split("(")[0],title).then(response =>{return response}).catch(()=>{"No lyrics found"}))
    console.log(lyric);
    setSpinnerLoading4(false);
  }
  const getWiki = async(artist:string)=>{
    setArtistbio({});
    setArtistbio ( await DataServiceDiscogs.getBio(artist).then(response =>{return response}).catch(()=>{"No lyrics found"}))
     

  }
 
  return (
    <div className="App">
     
      <div className='top'>
           <SearchMB setListMB={setListMB} setResearchType={setResearchType} researchType={researchType} setSpinnerLoading1={setSpinnerLoading1}></SearchMB>
      </div>

      <div className='body_container'>

          <div className='col scrollable'>
          
            {spinnerLoading1 ? <LoadingSpinner /> : listMB  &&

              <ListArtist listMB={listMB}  getAlbums={getAlbums} setAlbums={setAlbums} albums={albums} setTitles={setTitles} titles={titles} getWiki={getWiki}></ListArtist> 
            }
          </div>
   
          <div className='col scrollable'>
         
          {   spinnerLoading2 && <LoadingSpinner /> }


            <div className='artist_descriptio'>
             
           {artistbio &&

              <Artist artist={artistbio}></Artist>

            }

            </div>


            <div className='albumslist'>
            
            {  albums && Object.keys( albums).length>0 && <h1>Albums</h1>}
            {  albums && Object.keys( albums).length>0 &&
                  
                    <Albums alb={albums} songs={songs} setSongs={setSongs} getSongs={getSongs}></Albums> 
            } 
            </div>


          </div>
         
          <div className='col scrollable'> 
          {spinnerLoading3 && <LoadingSpinner /> }
            <div className='songslist'>
              {  songs && (<><h1 className='text-center'>{songs.title}</h1> 
                           <h1 className='text-center'>  {songs.released}</h1>
                          </>)}
                      <ul>{songs  && Object.keys( songs).length>0 &&

                              songs.tracklist.map((item:any,index:any) =>{

                                    return  <Track item={item} index={index}  getLyrics={getLyrics} > </Track>

                            }) 
                  
                    }
                    </ul> 
               </div>
          </div>


          <div className='col scrollable'> 
          {spinnerLoading4 ?<LoadingSpinner />:<>
              <h1>{titles.songname}</h1>  <br/>    
              <Lyric lyric={lyric}   ></Lyric>
              </>
            }
          </div>
      </div>
    
      <div className='footer'>
      </div>
    
    </div>
   
  );
}

 

//function to search by api artist and 
const SearchMB = (par: any)=>{

  const[searchValue,setSearchValue]= React.useState("");
  
  /*const handleChange = (event : any)=>{

    console.log(event);
    par.setResearchType(event.target.value);

  }*/
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(searchValue)
    if (!searchValue) return;
        par.setSpinnerLoading1(true);
        par.setListMB( await DataServiceDiscogs.getData(searchValue).then(response=>response).catch());
        par.setSpinnerLoading1(false);
    };
 
  return(
    <form onSubmit={handleSubmit}>
    <input placeholder='Cerca artista MB' type="text"
        className="input"
        onChange={e => setSearchValue(e.target.value)}/>
    <div>
      <input type="radio" name="searchtype" value="artist" onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "artist"}/> Artist  
      <input type="radio" name="searchtype" value="song"  onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "song"} />Song   
    </div>
    </form>
    
  );


}
 


const ListArtist = (value : any)=> {

 //console.log(value)
  return(
     <div className='artistlist'>
      
        <ul>
          {value.listMB.results.map((item:any,i:any)=>{
            
             return <ArtistData item={item} setAlbums={value.setAlbums} getAlbums={value.getAlbums} albums={value.albums} setTitles={value.setTitles} titles={value.titles} getWiki={value.getWiki} ></ArtistData>

            })
          }
        </ul>

     </div>
       
      

  ); 

}
const Artist = (item:any)=>{

  return(

    <div>
      <h1>{item.artist.name}</h1><br/> 
      <p>{item.artist.profile}</p><br/> 
      <div>
      { item.artist.members && <h1>Members</h1>}
      <br/>
            { item.artist.members && Object.keys( item.artist.members).length>1 && item.artist.members.map((itemm:any,index:any)=>{

              return   <li>{itemm.name}</li>   

      })}
      </div>
    </div>

  );
}
//listing artists
const ArtistData = (item:any) =>{
  // console.log(item);
  return(
    <li id={item.item.id} className="artist_cont" >
        
       { item.item.thumb ?(<img className='thumb' src={item.item.thumb} alt={item.item.title} /> )
       :
        (<img className='thumb' src='https://dummyimage.com/340x120/c24646/ffffff.png&text=NO+IMG' alt={item.item.title} /> )
      }
      <h1 title={item.item.title}  onClick={()=>{ item.getAlbums(item.item.id) ;item.setTitles({artistname :item.item.title,artistId:item.item.id}); item.getWiki(item.item.id) }} > {item.item.title} </h1>
      
    
    </li>
  );
}
//need to change on change research
const Albums = (albums :  any) => {
console.log(albums);
 return(
<>
      <ul>{albums.alb.releases.map((item:any,index:any) =>{

         return  item.main_release && <Album item={item} getSongs={albums.getSongs} songs={albums.songs}>{item}</Album>

          })
        }
      </ul> 
       <h1>Single & More</h1>
      <ul>{albums.alb.releases.map((item:any,index:any) =>{

        return  !item.main_release && <Album item={item} getSongs={albums.getSongs} songs={albums.songs}>{item}</Album>

         })
       }
     </ul> 
  </>
  )

}

const Album = (album : any) => {

 // console.log(album)
 return(
   
    <li>
       <h5 onClick={()=>{  album.getSongs(album.item.main_release)}}>{album.item.title} - {album.item.year} {album.item.format &&   album.item.format} </h5>
   </li>
  
  )

}

const Track = (track : any) =>{
   //console.log(track);
   
  return(

    <li onClick={()=>{ track.getLyrics(track.item.title.split("(")[0],track.item.artist); }}>
       <h5><span>{track.item.position}:<b> {track.item.title} </b> {track.item.duration} </span> </h5>
       <audio  >
         <source src="https://cdns-preview-5.dzcdn.net/stream/c-57d4be92340bafa2626c9b60a8eab42e-6.mp3"></source>
       </audio>
    </li>
   
  )

}


const Lyric = (item : any)=>{  

  const replacejsr = (text : string)=>{
    if(text)
    return text.split('\n').map((item,idx)=>{
      return(  
        <React.Fragment key={idx}>
        {item}<br/> 
        </React.Fragment>
        );
    })
   return null;
   }

   // console.log(item);
  return(
    <p> 
      { item.lyric.lyric   && Object.keys(item.lyric.lyric).length>0  && ( 
        <div className="lyric">
           <h4 className='lyrics_title' ></h4>  
           <p className='lyrics_text lyrics'> { replacejsr(item.lyric.lyric)}</p>
       </div>
        )
       } 
    </p>
  )
 

}

export default App;
