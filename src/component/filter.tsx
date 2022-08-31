import { Input } from "@chakra-ui/react";
import React from "react";
 
export const Filter = (par: any)=>{
   
   const handleSubmit = async (searchValue:string) => {

  //console.log(searchValue+'******************SEARHC VALUE')
    
     if (searchValue.length === 0){
      
      par.setListFiltered(
     
        par.list.map((e:any) =>{ 
          
             e.show =true 

          return e;
        }
        )
      )
         
     }  else{

      par.setListFiltered(
       //complete list
       par.list.map((e:any) =>{ 
       
        let name : string = e.name; 
        
        if ( ((name).toLowerCase()).includes( (searchValue).toLowerCase() ) )
        { e.show =true} else {e.show =false} 
        return e;
       }
       )
     )
        
    }  
       
     };
  
   return(
 
      <>
      <Input placeholder='Filtra' type="text" 
          className="artist"
          onChange={e => { 
            
            handleSubmit(e.target.value)}}/>
       
     </>
      
     
   );
 
 
 }
   