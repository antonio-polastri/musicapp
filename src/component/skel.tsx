import React from "react";
import './../static/spinner.css';
import amazon from './../static/a_tra.png' 
import { Stack, Skeleton } from "@chakra-ui/react";
import { Box } from "framer-motion";

export const  SkeletonLoader : any =  (value : any) =>  {
  
  
 return(
   
   <>
  <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</Stack>
   </>
   
   )

   }