import React from "react";
import './../static/spinner.css';
 
 

export const Artist = (item:any)=>{

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