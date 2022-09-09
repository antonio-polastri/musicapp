import React from "react";
import './../static/spinner.css';
import amazon from './../static/a_tra.png' 
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'

export const  MapInner : any =  (coordinate : any) =>  {
  
  
 return(
   
   <Map
         provider={stamenTerrain}
         dprs={[1, 2]} // this provider supports HiDPI tiles
         height={300}
        
         defaultCenter={[ coordinate.lat, coordinate.lon]}
         defaultZoom={11}
      >
         <Marker  width={50}  anchor={[ coordinate.lat , coordinate.lon]} 
     // color= "#fff"
      onClick={() => {
         let url = "https://www.google.com/maps/search/?api=1&query="+ coordinate.lon+"%2C"+ coordinate.lat;
         window.open(url, "_blank");
      }} 
      /> 
      <ZoomControl />
</Map> 
 )
} 
   