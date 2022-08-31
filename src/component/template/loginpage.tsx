import React, { useState } from "react";
import { Header  } from './header'
import { Grid, GridItem ,
Center,FormLabel,Button,Input,
FormControl,Text,
Container} from '@chakra-ui/react'
import { Loginlayout } from "./layout/loginLy";

import AuthService from  '../../services/auth.service'
import { useLocation, useNavigate} from 'react-router-dom';
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const Login = (item:any)=>{

  return(
   
    <>
      <Loginlayout 
      body={<Loginform></Loginform>}
      header={item.header}
      footer={item.footer}>
      </Loginlayout>     
     </>
    
  );
}

const Loginform = (item:any)=>{

  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [psw, setPws] = useState('');
  
  let location : any = useLocation();
  
  const  onSubmit = async (e:any) => {

    e.preventDefault();


    let from = location.state?.from?.pathname || "/search";

    await AuthService.login( user, psw).then(()=>{
      
    navigate( from,{ replace: true });  
  
     })
    
   }
  
return(
    <ScaleFade in={true} initialScale={0}>
      <Center h='90vh' >
      <Container  bg="tomato" centerContent maxW='sm' borderWidth='1px' borderRadius='lg' p='10'>
      <Text fontSize='3xl' color='white'>
        Let's start with us!
      </Text>
    
      <form onSubmit={onSubmit} >
          <FormControl >
  
            <FormLabel htmlFor="username" >username</FormLabel>
            <Input onChange={e=>setUser(e.target.value)} id="username" name="username" placeholder="username" />
            
          </FormControl>     
          <FormControl>

            <FormLabel htmlFor="password">password</FormLabel>
            <Input id="password" onChange={e=>setPws(e.target.value)} name="password" type="password" placeholder="password" />

          </FormControl> 
          <Button rightIcon={<ArrowForwardIcon />}   mt={4}  type="submit" colorScheme='black' variant='outline'>
            Login
          </Button>
           
      </form>
    
 
  </Container>
   </Center>
</ScaleFade>
)
}