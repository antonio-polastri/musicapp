import React from "react";
import { Header  } from '../header'
import { Grid, GridItem } from '@chakra-ui/react'
 

export const Innerlayout = (item:any)=>{

  return(
   
    <>
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h='100'
      gap='1'
      color='blackAlpha.700'
      fontWeight='bold'
    >
         <GridItem p='2'  area={'header'}>
         <div>{item.header}</div>
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
        <div>{item.nav}</div>
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
        <div>{item.body}</div>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
        <div>{item.footer}</div>
    </GridItem>
  </Grid>
    
     
    </>
    
  );
}