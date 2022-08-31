import React from "react";
import './../static/spinner.css';
import {Album} from './album';

export const  Albums : any =  (albums :  any) => {
  return(
    
   <>
       <ul>{albums.albms.map((item:any) =>{
      // console.log(item.id+"******************")
          return  item.id && item.show && <Album item={item} getSongs={albums.getSongs} songs={albums.songs}/>
 
           })
         }
       </ul> 
        <h1>Single & More</h1>
        <ul>{albums.albms.map((item:any)=>{
 
         return  !item.id && item.show && <Album item={item} getSongs={albums.getSongs} songs={albums.songs}/>
 
          })
        }
      </ul> 
   </>
   )
 
 }