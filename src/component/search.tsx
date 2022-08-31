import { Button, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";
 
export const Search = (par: any)=>{

   const[searchValue,setSearchValue]= React.useState("");
    
   const handleSubmit = async (e:any) => {
     e.preventDefault();
     console.log(par.researchType);
     if (!searchValue) return;
     
     par.getSearch(searchValue,par.researchType)
         //par.getArtist(searchValue);
    //     par.getArtist(searchValue);
       //modifica alla pressione della ricerca in base alla ricerca popola le liste opportune


       
     };
  
   return(
    <>
     <form onSubmit={handleSubmit}>
      
     <Input placeholder='Cerca artista MB' type="text" variant={"filled"}
         className="input" 
         onChange={e => setSearchValue(e.target.value)}/>
     <div>

     <RadioGroup defaultValue='artist'>
      <Stack spacing={4} direction='row'>
        <Radio value="artist" onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "artist"} >
        Artist
        </Radio>
        <Radio  value="track" onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "track"} >
        Song
        </Radio>
        <Radio value="album" onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "album"} >
        Album
          </Radio>
      </Stack>
    </RadioGroup>
    </div> 
    
    {/* 
       <input type="radio" name="searchtype" value="artist" onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "artist"}/> Artist  
       <input type="radio" name="searchtype" value="track"  onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "track"} />Song   
       <input type="radio" name="searchtype" value="album"  onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "album"} />Album   
     </div>
   <div>
       <input type="radio" name="rest" value="deezen" onChange={e=>par.setResearchMType(e.target.value)} checked={par.researchType === "deezen"}/> deezen  
       <input type="radio" name="rest" value="discogs"  onChange={e=>par.setResearchMType(e.target.value)} checked={par.researchType === "discogs"} />discogs   
     </div> */}
     </form>
     </>
   );
 
 
 }
   