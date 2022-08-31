import React from "react";
import './../static/spinner.css';
 

export   const TrackDetails = (par:any)=>{

   return(
     <>
     {
      par.item.name &&(
         <><h1>{par.item.name} - {par.item.released}</h1>
         <br></br></>
      )
     }
     {
     par.item.preview &&(
       <div id="audiocontainer">
         <audio controls>
         <source src={par.item.preview} type="audio/mp3" />
         Il browser non supporta il tag audio
         </audio>
         </div>  )
       }
     
     </>
   );
 }