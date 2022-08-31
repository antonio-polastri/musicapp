import React from "react";
 
import { Grid, GridItem } from '@chakra-ui/react'
 

export const Extlayout = (item:any)=>{

  return(
   
    <>
      <Grid
        templateAreas={`"header  "
                        "main"
                        "footer"`}
        gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={'100%'}
        h='100'
        gap='1'
        
        fontWeight='bold'
      >
        <GridItem p='2' area={'header'}> <div>{item.header}</div></GridItem>
        <GridItem area={'main'}> <div>{item.body}</div> </GridItem>
        <GridItem pl='2'  area={'footer'}> <div>{item.footer}</div> </GridItem>
      </Grid>
    </>
    
  );
}