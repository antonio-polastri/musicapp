import React ,{useState,useEffect} from 'react';
import './App.css';
//import * as Call from './api';
import   DataService from './services/data.serviceItues';  
import   DataServiceMB from './services/data.serviceMusicbrainz';  


const App = () => {
   
  const [list, setList] = useState("");
  const [listMB, setListMB] = useState("");

   

  return (
    <div className="App">
      <SearchMB setListMB={setListMB}></SearchMB>
      {list  &&
         <ListAlbumMB list={listMB}></ListAlbumMB>
      }
    </div>
  );
}


//function to search by api artist and 
const Search = (par: any)=>{

  const[searchValue,setSearchValue]= React.useState("");
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
     
    if (!searchValue) return;
    par.setList( await DataService.getAlbums(searchValue).then(response=>{ return {ct : response.resultCount,response : response.results} }).catch());
    //check error
    //par.setList({count : r.resultCount,response : r.results});
   // par.setList(result);
   // console.log(result);
     
  };


  return(
    <form onSubmit={handleSubmit}>
    <input placeholder='Cerca artista' type="text"
        className="input"
        onChange={e => setSearchValue(e.target.value)}/>
    </form>
    
  );


}

//function to search by api artist and 
const SearchMB = (par: any)=>{

  const[searchValue,setSearchValue]= React.useState("");
 


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    console.log(searchValue)
    if (!searchValue) return;
   // console.log(await DataServiceMB.getArtist(searchValue).then(response=>{ return {ct : response.count,response : response.artists,offset : response.offset} }).catch())
    
    par.setListMB( await DataServiceMB.getArtist(searchValue).then(response=>{ return {ct : response.resultCount,response : response.results} }).catch());
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



const ListAlbum = (value : any)=> {


  return(

     
    <div>
      <h1>{value.list.ct}</h1>
      <ul>{value.list.response.map((item:any,i:any)=>{

        return <ArtistData item={item}></ArtistData>
        
        
        }) }</ul>
     </div>
       
      
      
     


  ); 

}



const ListAlbumMB = (value : any)=> {

  console.log(value)
  return(

    
    <div>
      <h1>{value.ct}</h1>
      <ul>{value.list.response.map((item:any,i:any)=>{

        return <ArtistData item={item}></ArtistData>
        
        
        }) }</ul>
     </div>
       
      
      
     


  ); 

}
const ArtistData = (item:any) =>{

  console.log(item);
  return(
    <li id={item.item.trackId}>
      <h1></h1>
      <p><a href={item.item.trackViewUrl}><span>{item.item.artistName}</span>-<span>{item.item.trackName}</span></a></p>
      <p></p>
    </li>
  );
}


export default App;
