import React from "react";
import './../static/spinner.css';
 

export const ArtistData = (item:any) =>{
   //   console.log(item);
    return(
  
      <li id={item.item.id} className="artist_cont" >
          
         { item.item.image ? (<img className='thumb' src={item.item.image} alt={item.item.name} /> )
         :
          (<img className='thumb' src='https://dummyimage.com/340x120/c24646/ffffff.png&text=NO+IMG' alt={item.item.name} /> )
        }
        <div className="artist_name">
         <h1 title={item.item.name}  onClick={()=>{ item.getAlbums(item.item.id,item.item.origin) ;item.setTitles({artistname :item.item.name,artistId:item.item.id}); item.getWiki(item.item.id) }} > {item.item.name} </h1>
         <span className={`stamp-${item.item.origin} stamp`}>{item.item.origin}</span>
        </div> 
      
      </li>
    );
  }
 