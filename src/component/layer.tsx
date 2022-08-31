import React from "react";
import { Button, Drawer, DrawerBody, DrawerCloseButton,
  DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Grid, GridItem, List, ListIcon, ListItem } from '@chakra-ui/react' 
import {
  Menu,Image,
  MenuButton,
  MenuList,
  MenuItem,
  Box,Spacer,Flex,
  IconButton,
  
  
} from '@chakra-ui/react' 
 
import { HamburgerIcon } from '@chakra-ui/icons'
 
import { Link } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react'



export const  Layer = (value : any)=> {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
 
   

  return(
    
          <>
             

              <Drawer
                isOpen={value.open}
                placement={value.side}
                onClose={value.close}
                size={value.size ?  value.size : 'xl' }
                onOverlayClick={()=>{console.log("overlay");return false}  }
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>{value.context}</DrawerHeader>

                  <DrawerBody>
                
                    {value.children}
                    
                   
                  </DrawerBody>

                  <DrawerFooter>
                  
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
    
       
      

  ); 

}

function onOverlayClick() {
  throw new Error("Function not implemented.");
}
