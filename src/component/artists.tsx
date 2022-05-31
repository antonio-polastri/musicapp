import React from "react";
import { Artist } from "../services/lib/core/musicObject";
import './../static/spinner.css';
 
import { ArtistData } from "./artistdata";
 

export const  ListArtist = (value : any)=> {

  
  return(
     <div className='artistlist'>
      
        <ul>
          { Array.isArray(value.listMB) &&  value.listMB.map((item: Artist,i:number)=> {
            
             return <ArtistData item={item} setAlbums={value.setAlbums} getAlbums={value.getAlbums} albums={value.albums} setTitles={value.setTitles} titles={value.titles} getWiki={value.getWiki} ></ArtistData>

            })
          }
        </ul>

     </div>
       
      

  ); 

}