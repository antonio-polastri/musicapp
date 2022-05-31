import React from "react";
import './../static/spinner.css';
 

export const  Album : any =  (album : any) =>  {
  
  
 return(
   
    <li><>
       <h5 onClick={()=>{  album.getSongs(album.item._id,album.item.name,album.item.origin)}}>{album.item.name} - {album.item.date} {album.item.format &&   album.item.format} </h5>
       { album.item.image &&  <img className='thumb' src={album.item.image} alt={album.item.name} />  }
       </>
   </li>
  
  )

}