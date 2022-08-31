import React from "react";
import './../static/spinner.css';
import amazon from './../static/a_tra.png' 

export const  Album : any =  (album : any) =>  {
  
  
 return(
   
    <li key={album.item.id}><>
      <div> <h5   onClick={()=>{   album.item.id && (album.getSongs(album.item.id,album.item.name,album.item.origin))}}>  {album.item.name} - {album.item.date} {album.item.format &&   album.item.format} </h5>
      <a href={`https://www.amazon.it/gp/search?ie=UTF8&tag=musicapp-21&linkCode=ur2&linkId=3b5151e345b84d6ebf4c1d5cfca3b651&camp=3414&creative=21718&index=music&keywords=${album.item.name} `} target="_blank" rel="noreferrer">
         <img className="amalogo" src={amazon}></img>
         </a>
      </div>
       { album.item.image &&  <img className='thumb' src={album.item.image} alt={album.item.name} />  }
      
       </>
   </li>
  
  )

}