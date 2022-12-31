import React , {useState , useEffect} from 'react';
import { TextField ,  Grid, DialogContent , DialogTitle} from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_LOGIN_INFO } from '../graphql/queries';
import { validate } from './validate';
import {useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//rtl
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
const rtlTheme = createTheme({ direction: "rtl" });


const Login = () => {
  const [input , setInput] = useState({
    email :"" ,
    password :""
  })
    const [open, setOpen] = useState(false);
    const [error , setError] = useState({});
    const [touched , setTouched] =useState({});
    const {loading , data } =useQuery(GET_LOGIN_INFO);
    
    useEffect(()=>{
      setError(validate(input , "login"))
      },[input]);
      
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    const changeHandeler = event =>{
       setInput({...input, [event.target.name]:event.target.value})
    }
    const focusHandler= event => {
      setTouched({...touched , [event.target.name]:true})
  }
  const navigate=useNavigate();
    const clickHandeler = () =>{
           if(loading) return console.log("Loading")
           const find = data.logins.find(data => data.email===input.email && data.password==input.password)
          if(find){
            navigate('/home/'+find.id)
          }
          else if(!input.password && !input.email) {
            toast.warn("تمام فیلد ها را پر کنید!" ,{
              position : "top-center"
          })
        }
        else{
          toast.error("ایمیل یا پسورد اشتباه می باشد" ,{
            position : "top-center"
        })
        }
           }
       
    return (
<div >
  <CacheProvider value={cacheRtl}>
   <ThemeProvider theme={rtlTheme}>
          <CssBaseline />
         <DialogTitle textAlign="center">ورود</DialogTitle>
        <DialogContent >
        <Grid container className={styles.container}>
        <Grid item xs={12} sx={{pt:"8px"}} >
        
        <TextField
                sx={{width:{xs:'90%' , sm:'50%'}}}
                label="ایمیل"
                variant='filled'
                name="email"
                value={input.email}
                onChange={changeHandeler}
                onFocus={focusHandler}
                error={error.email && touched.email}
                helperText={error.email && touched.email && error.email}
                 />
        </Grid>
        <Grid item xs={12} sx={{pt:"10px"}} >    
        <TextField 
              sx={{width:{xs:'90%' ,  sm:'50%'}}}
              id="filled-password-input"
              label="پسورد"
              onFocus={focusHandler}
              error={error.password && touched.password}
              helperText={error.password && touched.password && error.password}
              type="password" name="password" value={input.password} onChange={changeHandeler}
              autoComplete="current-password"
              variant="filled"
        />
        </Grid>
        <Grid item xs={12} sx={{pt:"8px"}}>
          <button onClick={clickHandeler} variant="outlined" className={styles.btn}>
            <ArrowBackIosNewIcon />
            ورود
            </button>    
        </Grid>
         
        </Grid> 
        <ToastContainer />      
        </DialogContent>
       
        </ThemeProvider>
       </CacheProvider>
</div>   
    );
};
export default Login;