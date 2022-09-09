import React from "react";
import './../static/spinner.css';
import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { stamenTerrain } from 'pigeon-maps/providers'

export const  MapInnerMulti : any =  ( coordinate :any) =>  {
  
   console.log("Object  "+coordinate.hotelEvent.hotels)
   //CI SONO DI ERRORI
 return(
   
   <Map
         provider={stamenTerrain}
         dprs={[1, 2]} // this provider supports HiDPI tiles
         height={300}
        
         defaultCenter={[ coordinate.hotelEvent.coordinates.lat, coordinate.hotelEvent.coordinates.lon]}
         defaultZoom={11}
      >
         {coordinate.hotelEvent.hotels.hotels.map((coord:any,i:number)=>{
            console.log("cycling coords"+coord.name)
            return <>
            <Marker  width={50}  anchor={[ coord.latitude , coord.longitude]}  onClick={() => {
                  let url = "https://www.google.com/maps/search/?api=1&query="+ coord.longitude+"%2C"+ coord.latitude;
                  window.open(url, "_blank");
               }} 
               /> 
            </>  
         }
      )}
         
      <ZoomControl />
</Map> 
 )
} 
   