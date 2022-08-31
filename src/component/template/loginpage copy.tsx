import React from "react";
import { Header  } from './header'
import { Grid, GridItem ,
Center,FormLabel,Button,Input,
FormControl,Text,
Container} from '@chakra-ui/react'
import { Loginlayout } from "./layout/loginLy";
import { Formik, Field, Form } from 'formik';
import AuthService from  '../../services/auth.service'
import { useNavigate} from 'react-router-dom';
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react'

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

  
return(
    <ScaleFade in={true} initialScale={0}>
  <Center h='90vh' >
  <Container  bg="tomato" centerContent maxW='sm' borderWidth='1px' borderRadius='lg' p='10'>
  <Text fontSize='3xl' color='white'>
    Let's start with us!
  </Text>
  <Formik
      initialValues={{
        username: '',
        password: '',
         
      }}
      onSubmit={async (values,actions) => {
       await AuthService.login(values.username, values.password).then(()=>{
         // alert(JSON.stringify(values, null, 2));
       //  console.log({ values, actions });
      //    navigate( '/search',{ replace: true }); //this doensn works!!
         actions.setSubmitting(true);
       window.location.reload();
        })
       
      }}
    >
      <Form >
          {/*
            <FormLabel htmlFor="firstName">username</FormLabel>
            <Field id="username" name="username" placeholder="username" />
           
          
            <FormLabel htmlFor="lastName">password</FormLabel>
            <Field id="password" name="password" type="password" placeholder="password" />

    */}

    

            <Button  mt={4} colorScheme='teal'  type="submit">Submit</Button>
      </Form>
    </Formik>
 
  </Container> </Center></ScaleFade>
)
}