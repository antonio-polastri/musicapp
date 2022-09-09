import React from "react";
import { Header  } from '../header'
import { Grid, GridItem } from '@chakra-ui/react'
import { Footer } from "../footer";
 

export const Innerlayout = (item:any)=>{

  return(
   
    <>
    <Grid
      templateAreas={`"header"
                      "main"
                      "footer"`}
      gridTemplateRows={'50px '}
      gridTemplateColumns={' 100%'}
      h='100'
      gap='1'
      fontWeight='bold'
    >
         <GridItem p='2'  area={'header'}>
         <div>{item.header}</div>
        </GridItem>
        
        <GridItem p='2'   area={'main'}>
        <div>{item.body}</div>
        </GridItem>
        <GridItem p='2'  area={'footer'}>
        <div><Footer></Footer></div>
    </GridItem>
  </Grid>
    
     
    </>
    
  );
}