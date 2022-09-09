import React ,{useState,useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import './App.css';
/* SERVICE */
//import   {Album} from './component/album';
import ReactDOM from 'react-dom';
import AuthService from "./services/auth.service";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './index.css';
import App from './App';
import { Login } from './component/template/loginpage';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react' 
import { Header } from './component/template/header';
import { Footer } from './component/template/footer';
import { Innerpage } from './component/template/innerpage';
import { Signup } from './component/template/signupPage';
 
const Appcontainer = () => {
     
  const [logged,setLogged] = useState(false);
/*
  useEffect(() => {
    
    setLogged(!AuthService.getCurrentUser());

    console.log("logged "+logged);

  });
 */
 
  
return (
  <ChakraProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
        <> 
             
                <Route path="/" element={<RedirectIfLogin><Login header={<Header status={logged}></Header>} footer={<Footer></Footer>}/></RedirectIfLogin>} />  
                <Route path="/signup" element={<Signup header={<Header status={logged}></Header>} footer={<Footer></Footer>} />} />   
                <Route path="*" element={<Navigate to="/" replace />} />
              
                <Route path="search" element={<RequireAuth><Innerpage body={<App />}  header={<Header></Header>} /></RequireAuth> } />
                <Route path="invoices" element={<RequireAuth><App /></RequireAuth>} />
                <Route path="admin" element={<RequireAdminAuth><App /></RequireAdminAuth>} />
                
           </>   
        
        </Routes>
      </React.StrictMode> 
    </BrowserRouter>
    </ChakraProvider>
)
}
 

export default Appcontainer;



const RequireAuth = ({ children }: { children: JSX.Element })=>{
   
  let location = useLocation();

  if (!AuthService.getCurrentUser()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  } 

  return children;
}


const RequireAdminAuth = ({ children }: { children: JSX.Element }) => {
   
  let location = useLocation();

  if (!AuthService.getCurrentUser()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  } 

  return children;
}
const RedirectIfLogin= ({ children }: { children: JSX.Element })=>{
   
  let location = useLocation();

  if (AuthService.getCurrentUser()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/search" state={{ from: location }} replace />;
  } 

  return children;
}