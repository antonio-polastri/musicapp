import React from "react";
  
import { Innerlayout } from "./layout/innerLy";


export const Innerpage = (item:any)=>{

  return(
   
    <>
      <Innerlayout 
      body={item.body}
      header={item.header}
      >
      </Innerlayout>     
     </>
    
  );
}
 