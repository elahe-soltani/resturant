import * as React from 'react';
import {Link} from 'react-router-dom'
import {Dialog , DialogActions ,AppBar ,Box , Toolbar , IconButton , Typography ,Menu , Container , Avatar , Tooltip , MenuItem ,  } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonIcon from '@mui/icons-material/Person';
import Login from './Login';
import Signup from './Signup';
import styles from "./Header.module.css"
import { useNavigate } from 'react-router-dom';
const settings = ['Profile', 'Account', 'Logout'];

const ResponsiveAppBar = ({user}) => {
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
        const handleClickOpen = () => {
          handleClose2();
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
  const [open2, setOpen2] = React.useState(false);
        const handleClickOpen2 = () => {
          handleClose();
          setOpen2(true);
        };
      
        const handleClose2 = () => {
          setOpen2(false);
        };      
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu =() => {
    setAnchorElUser(null);
  };
  const menuHandeler = event =>{
    if(event.target.id=="Logout"){
      navigate('/')
    }
  }
  return ( 
    <>
    <AppBar position="static" >
      <Container maxWidth="xl" className={styles.container}>
        <Toolbar disableGutters>
            <Link to="/" className={styles.link}> Resturant</Link>
          {user==0 ?
          <Box sx={{ flexGrow: 0 }}>
            <button  className={styles.login} onClick={handleClickOpen}>
             <PersonIcon className={styles.icon} /> ورود / عضویت 
               </button>
          </Box>:
          <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp"  />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center" id={setting} onClick={menuHandeler}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
           } 
        </Toolbar>
      </Container>
    </AppBar>
    <div >
    <Dialog open={open} onClose={handleClose}  >
        <Login  />
        <DialogActions sx={{display:"flex" , alignItems:"center" , margin:"0px" , padding:"0px"}} >
        <a onClick={handleClickOpen2} className={styles.btn}>ثبت نام</a>
        <p className={styles.text}>ثبت نام نکرده اید؟</p>
        </DialogActions>
          
      </Dialog>
    </div>
   
      <Dialog open={open2} onClose={handleClose2}>
       <Signup />
        <DialogActions sx={{display:"flex" , alignItems:"center" ,justifyContent:'space-around'  , marginBottom:"5px"}}>
           <a onClick={handleClickOpen} className={styles.btn} >ورود</a>
           <a onClick={handleClose2} className={styles.btn} >بستن</a>
        </DialogActions>
          
      </Dialog>
    </>
  );
};
export default ResponsiveAppBar;