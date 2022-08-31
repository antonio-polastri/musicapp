import React from "react";
import { Grid, GridItem } from '@chakra-ui/react' 
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
export const  Header = (value : any)=> {


  const logout = ()=>{
    const us = authService.getCurrentUser();
    if(us) authService.logout();
    window.location.reload();
  }

  
  return(
    <>
        <Flex>
          <Box>
              <Menu>
              
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
              />
                <MenuList>
                  <MenuItem>Chi siamo</MenuItem>
               {!value.status &&  
               ( <MenuItem><Link to="/logout" onClick={logout}>Logout</Link></MenuItem>)
                }
                </MenuList>
              
              </Menu>
        </Box>
        <Spacer />
        <Box p='0' >
            <Image  htmlWidth="180px"  src={logo}   />
        </Box>
      </Flex>
    </>
       
      

  ); 

}