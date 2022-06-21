import React from "react";
import './../static/spinner.css';
 

export const TrackItem = (track : any) =>{
 //  console.log(track);
   
  return(

    <li onClick={()=>{ track.getLyrics(track.item.name.split("(")[0],track.item.artist,track.item,track.item.id); }}>
       <h5><span>{track.item.position}:<b> {track.item.name} </b> {track.item.duration} </span> </h5>
       
    </li>
   
  )

}