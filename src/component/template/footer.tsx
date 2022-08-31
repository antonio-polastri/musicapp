import React from "react";
import { Grid, GridItem } from '@chakra-ui/react' 
 
import { Text,Stack } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


export const  Footer = (value : any)=> {

  
  return(
      <>
      <Stack spacing={3}>
        <Text fontSize='md' as ="del" color='tomato'>Made with love Music App</Text>
      </Stack>
      </>
       
      

  ); 

}