import { get } from 'https';
import React ,{useState,useEffect} from 'react';
import './App.css';
//import * as Call from './api';
import   DataService from './services/data.serviceItues';  
import   DataServiceMB from './services/data.serviceMusicbrainz';  
import   DataServiceLyrics from './services/data.serviceLyrics';  

const App = () => {
   
  
  const [listMB, setListMB] = useState("");
  const[albums,setAlbums] =  useState({});
  const[songs,setSongs] =  useState(Object);
  const[lyric,setLyric] = useState(Object);
 
  return (
    <div className="App">
      <SearchMB setListMB={setListMB} ></SearchMB>
      { listMB  &&
         <ListArtist listMB={listMB}  setAlbums={setAlbums}  setSongs={setSongs}  setLyric={setLyric} ></ListArtist> 
      }
    </div>
  );
}

 

//function to search by api artist and 
const SearchMB = (par: any)=>{

  const[searchValue,setSearchValue]= React.useState("");
  
  const handleSubmit = async (e:any) => {
    //al cambio di ricerca è necessario pulire tuttii i figli che dovrebbero avere ostataoo
    e.preventDefault();
    console.log(searchValue)
    if (!searchValue) return;
   //  console.log(await DataServiceMB.getArtist(searchValue).then(response=>{ return {ct : response.count,response : response.artists,offset : response.offset} }).catch())
    
    par.setListMB( await DataServiceMB.getArtist(searchValue).then(response=>{ return {ct : response.count,response : response.artists,offset : response.offset ,clicket: false} }).catch());
    //check error
    //par.setList({count : r.resultCount,response : r.results});
   // par.setList(result);
   // console.log(result);
     
  };


  return(
    <form onSubmit={handleSubmit}>
    <input placeholder='Cerca artista MB' type="text"
        className="input"
        onChange={e => setSearchValue(e.target.value)}/>
    </form>
    
  );


}
 


const ListArtist = (value : any)=> {

 // console.log(value)
  return(

    
    <div>
      <h1>{value.ct}</h1>
      <ul>{value.listMB.response.map((item:any,i:any)=>{

         return <ArtistData item={item}></ArtistData>
        
        
        }) }</ul>
     </div>
       
      

  ); 

}

//listing artists
const ArtistData = (item:any) =>{

  //const[albumID,setAlbumId] =  useState("");
  const[albums,setAlbums] =  useState({});
   
  
   //console.log(item);

   useEffect(() => {
    
  });

    const getAlbums = async (artistid : string) =>{
      //setAlbums({});
      //  setAlbums( await DataServiceMB.getAlbums(artistid).then( response=>{ return {ct : response.recordings.length,   response : response.recordings} }).catch());

      setAlbums( await DataServiceMB.getAlbums(artistid).then( response=>{ return {ct : response.releases.length,   response : response.releases} }).catch());
    }

  return(
    <li id={item.item.id}>

      <h1 onClick={()=>{  getAlbums(item.item.id)}} > {item.item.name} </h1>
      
      { Object.keys(albums).length>0 &&
      
        <Albums alb={albums}></Albums>
        }
       
    </li>
  );
}
//need to change on change research
const Albums = (albums :  any) => {


   //console.log(albums)

 return(
      <div>{albums.alb.response.map((item:any,index:any) =>{


       return  <Album item={item}>{item}</Album>

   })}</div> 
  
  )

}

const Album = (album : any) => {

  const[songs,setSongs] =  useState(Object);

  const getSongs = async (albumid : string) =>{
   // alert('ciao');
   //  console.log(await DataServiceMB.getTracks(albumid).then( response=>{ return response}).catch());
    setSongs( await DataServiceMB.getTracks(albumid).then( response=>{ return response }).catch());
   // console.log(songs);
  }
console.log(album)
 return(
    <div>
  <h3 onClick={()=>{  getSongs(album.item.id)}}>{album.item.title} - {album.item.date}</h3>

      < div>{ 
       Object.keys(songs).length>0 &&
       songs.media[0].tracks.map((item:any,index:any) =>{


            return  <Track item={item} index={index}> </Track>

        }) 
      
        }
        </div> 
    </div>
  )

}

const Track = (track : any) =>{

  const[lyric,setLyric] = useState(Object);


 const getLyrics = async(title:string,artist:string)=>{
 
   setLyric (await DataServiceLyrics.getLyrics(artist,title).then(response =>{return response}).catch(()=>{"No lyrics found"}))
 }
 
  console.log(track.item['artist-credit']);
  return(

    <div onClick={()=>{ getLyrics(track.item.title,track.item['artist-credit'][0].artist.name) }}>
    <span>{track.index}:<b> {track.item.title} </b> {Math.floor(Number(track.item.length) / 60000)}:{Number(track.item.length) % 60} minute</span> 
    
    <Lyric lyric={lyric} ></Lyric>
  
  </div>
   
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

   console.log(item);
  return(
    <p>
      { item.lyric && Object.keys(item.lyric).length>0  && ( 
        <div className="lyric">
           <h4 className='lyrics_title' >----Lyrics----</h4>  
           <p className='lyrics_text'> { replacejsr(item.lyric.lyrics)}</p>
       </div>
        )
       }
    </p>
  )
 

}

export default App;
