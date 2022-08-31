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
import logo from './../../static/logo.png'  
import { HamburgerIcon } from '@chakra-ui/icons'
import authService from "../../services/auth.service";
import { Link } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react'
export const  Header = (value : any)=> {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const logout = ()=>{
    const us = authService.getCurrentUser();
    if(us) authService.logout();
    window.location.reload();
  }

  
  return(
    <>
        <Flex>
          <Box>
          <>
              <Button as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'  colorScheme='teal' onClick={onOpen}>
                
              </Button>

              <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                size='md'
              
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Music Aggregator Menu</DrawerHeader>

                  <DrawerBody>
                
               
                    <List spacing={3}>
                          <ListItem>
                            
                            <Link to="/chisiamo" >Who Are?</Link> 
                          </ListItem>
                          <ListItem>
                            
                            <Link to="/howwork" >How does it works?</Link> 
                          </ListItem> 
                        
                          {value.status && 
                          <>
                               <ListItem>
                              <Link to="/login" >Login</Link> <br></br>
                              </ListItem>
                              <ListItem>
                              <Link to="/signup" >Signup</Link> 
                              </ListItem>
                              </>    
                            }  
                             {!value.status &&  
                               (  <ListItem>
                              <Link to="/" onClick={logout}>Logout</Link>
                              </ListItem>
                                ) }
                          
                           
                        </List>
                  </DrawerBody>

                  <DrawerFooter>
                  
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
        </Box>
        <Spacer />
        <Box p='0' >
            <Image  htmlWidth="180px"  src={logo}   />
        </Box>
      </Flex>
    </>
       
      

  ); 

}