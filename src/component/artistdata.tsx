import React, { useState } from "react";
import './../static/spinner.css';
import blank from './../static/blank.jpg'  
import { Avatar, Button } from "@chakra-ui/react";

export const ArtistData = (item:any) =>{

 // const [open,setOpen] = useState(0);


   //   console.log(item);
    return(
      item.item.show && (
        
             /*<><Flex>
         {item.item.image ? (<Avatar src={item.item.image} />):(<Avatar src={blank} />)}
          <Box ml='3'  onClick={() => { item.getAlbums(item.item.id, item.item.origin); item.setTitles({ artistname: item.item.name, artistId: item.item.id });  } }> 
            <Text fontWeight='bold'>
            {item.item.name} 
              <Badge ml='1' className={`stamp-${item.item.origin} stamp`} >
              {item.item.origin}
              </Badge>
            </Text>
            <Text fontSize='sm'> </Text>
          </Box>
        </Flex>
      </>*/
    
          <li key={item.item.id} id={item.item.id} className="artist_cont" >
              
            { item.item.image ?(<Avatar src={item.item.image} size='lg' name={item.item.name} onClick={()=> {item.getBio(item.item.name); item.setBiodraw(true)}} />)
             
            :(<Avatar src={blank} size='lg' onClick={()=> {item.getBio(item.item.name); item.setBiodraw(true)}} />)
            }
            <div>
              
              <div className="artist_name">
            
                <h1 title={item.item.name}  onClick={()=>{item.getBio(item.item.name); item.getAlbums(item.item.id,item.item.origin) ;item.setTitles({artistname :item.item.name,artistId:item.item.id});}} > {item.item.name} </h1>
              
              <div className='subname_elements'  >

                <span className={`stamp-${item.item.origin} stamp`}>{item.item.origin}</span>
               
                <Button className='bio_button'size='xs' colorScheme='teal'   onClick={()=> {item.getBio(item.item.name); item.setBiodraw(true)}}>Bio</Button>
               
                <Button className='bio_button'size='xs' colorScheme='linkedin'   onClick={()=> {item.getEvent(item.item.name); }}>Events!</Button>
             
                </div>

              </div> 

           
            </div>
          </li>
          ) 
    );
  }
 