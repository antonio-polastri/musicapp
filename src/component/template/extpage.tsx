import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Extlayout } from "./layout/extLy";
 


export const Extpage = (item:any)=>{

  return(
   
    <>
      <Extlayout 
      body={item.body}
      header={<Header/>}
      footer={<Footer/>}>
      </Extlayout>     
     </>
    
  );
    
  
}
 