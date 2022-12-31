import React ,{useState , useEffect} from 'react';
import { DialogContent, DialogTitle , Grid , TextField } from '@mui/material';
import { useMutation } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Signup.module.css';
import { validate } from './validate';
import { SEND_DATA } from '../graphql/mutation';
//rtl
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//rtl
const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
const rtlTheme = createTheme({ direction: "rtl" });

const Signup = () => {
    const [input , setInput] = useState({
        name:"",
        email :"" ,
        password :"",
        phone:""
    })
    const [error , setError] = useState({});
    
    const [touched , setTouched] =useState({});

    const [pressed , setPressed] =useState(false);

    const [sendData ,{ data }]= useMutation(SEND_DATA,{
        variables:{name : input.name , email : input.email , password :input.password, phone: input.phone},
    });
    useEffect(()=>{
        setError(validate(input , "signUp"))
        },[input]);

    const focusHandler= event => {
            setTouched({...touched , [event.target.name]:true})
        }  

    const changeHandeler = event =>{
       setInput({...input, [event.target.name]:event.target.value})
    }
    const clickHandeler = () =>{
        if(input.name && input.email && input.password && input.phone){
            sendData();
            setPressed(true);
        }else {
            toast.warn("تمام فیلد ها را پر کنید!" ,{
                position : "top-center"
            }
            )
        } 
    }
    if(data && pressed){
        toast.success("ثبت نام انجام شد و منتظر تایید می باشد",{
            position : "top-center" ,
        });
        setPressed(false);
    }
    return (
        <div >
        
        <DialogTitle textAlign="center">ثبت نام</DialogTitle>
        <DialogContent>
        <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={rtlTheme}>
        <CssBaseline />  
        <Grid container className={styles.container}>
        <Grid item xs={12} sx={{pt:"9px"}}>
        <TextField
              sx={{width:{xs:'90%' ,  sm:'50%' }}}
              label="نام"
              type="text" name="name" value={input.name} onChange={changeHandeler}
              variant="outlined"
              onFocus={focusHandler}
              error={error.name && touched.name}
              helperText={error.name && touched.name && error.name}
             
        />
        </Grid>
        <Grid item xs={12} sx={{pt:"9px"}}>
        <TextField
              sx={{width:{xs:'90%' ,  sm:'50%'}}}
              id="filled-email-input"
              label="ایمیل"
              type="email" name="email" value={input.email} onChange={changeHandeler}
              autoComplete="current-email"
              variant="outlined"
              onFocus={focusHandler}
              error={error.email && touched.email}
              helperText={error.email && touched.email && error.email}
        />
        </Grid>
        <Grid item xs={12} sx={{pt:"9px"}}>
            
        <TextField
               sx={{width:{xs:'90%' ,  sm:'50%'}}}
              label="شماره موبایل"
              type="tel" name="phone" value={input.phone} onChange={changeHandeler}
              autoComplete="current-password"
              variant="outlined"
              onFocus={focusHandler}
              error={error.phone && touched.phone}
              helperText={error.phone && touched.phone && error.phone}
             
        />
         </Grid>
        <Grid item xs={12} sx={{pt:"9px" , }}>
            
        <TextField
              sx={{width:{xs:'90%' ,  sm:'50%'}}}
              id="filled-password-input"
              label="پسورد"
              type="password" name="password" value={input.password} onChange={changeHandeler}
              autoComplete="current-password"
              variant="outlined"
              onFocus={focusHandler}
              error={error.password && touched.password}
              helperText={error.password && touched.password && error.password}
             
        />
        </Grid>
        <Grid item xs={12}sx={{pt:"9px"}}>
              <button  variant="outlined" className={styles.btn} onClick={clickHandeler}>ثبت اطلاعات</button>    
        </Grid>
       
        </Grid> 
        <ToastContainer />
        </ThemeProvider>
       </CacheProvider>
        </DialogContent>
      
        </div>
        
    );
};

export default Signup;