import React from "react";
 
export const Search = (par: any)=>{

   const[searchValue,setSearchValue]= React.useState("");
    
   const handleSubmit = async (e:any) => {
     e.preventDefault();
    
     if (!searchValue) return;
     
         par.getArtist(searchValue);
       
     };
  
   return(
 
     <form onSubmit={handleSubmit}>
     <input placeholder='Cerca artista MB' type="text"
         className="input"
         onChange={e => setSearchValue(e.target.value)}/>
     <div>
       <input type="radio" name="searchtype" value="artist" onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "artist"}/> Artist  
       <input type="radio" name="searchtype" value="song"  onChange={e=>par.setResearchType(e.target.value)} checked={par.researchType === "song"} />Song   
     </div>
    {/* <div>
       <input type="radio" name="rest" value="deezen" onChange={e=>par.setResearchMType(e.target.value)} checked={par.researchType === "deezen"}/> deezen  
       <input type="radio" name="rest" value="discogs"  onChange={e=>par.setResearchMType(e.target.value)} checked={par.researchType === "discogs"} />discogs   
     </div> */}
     </form>
     
   );
 
 
 }
   