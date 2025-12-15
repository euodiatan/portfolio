import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import RoseImageGrey from '../assets/rose-image.png';
import RoseImageOrange from '../assets/rose-orange-image.png';
import MenuIcon from '@mui/icons-material/Menu';
import { List, ListItem } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';
import Link from '@mui/material/Link';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorScheme, useTheme } from "@mui/material/styles";
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function SideBar(){
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();
    if (!mode) {
      return null;
    }

    const location = useLocation();
    const backButtonVisible = location.pathname.includes("/post");
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const drawerWidth = 300;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const handleDrawerClose = () => {
      setIsClosing(true);
      setMobileOpen(false);
      };

      const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
      };

      const handleDrawerToggle = () => {
        if (!isClosing) {
          setMobileOpen(!mobileOpen);
          setMenuOpen(true)
        }
      };

    const [menuOpen, setMenuOpen] = useState(()=> {
      const saved = sessionStorage.getItem("menuOpen");
      return saved === "true";
    });

    const [sidebarImage, setSidebarImage] = useState(RoseImageGrey);

    function hoverImageIn(){
      setSidebarImage(RoseImageOrange);
    }

    function hoverImageOut(){
      setSidebarImage(RoseImageGrey);
    }

    function toggleMenu(){
      setMenuOpen((prevState =>{
        const newState = !prevState;
        sessionStorage.setItem("menuOpen", newState);
        return newState;
      }));
    }


    const drawer = (
      <>
      <Box component="description" sx={{textAlign:'center', width:120}}>
        {menuOpen ? <CloseIcon onClick={toggleMenu} className="menu-icon" sx={{color: theme.palette.link.default, "&:hover":{color: theme.palette.link.hover}}}/> : <MenuIcon onClick={toggleMenu} className="menu-icon" sx={{color: theme.palette.link.default, "&:hover":{color: theme.palette.link.hover}}} /> }
        <AnimatePresence mode="popLayout">
          <motion.img key={sidebarImage} initial={false} animate={{opacity:1}} exit={{opacity:0}} transition={{duration: 0.4, ease: "easeInOut"}} onMouseOver={hoverImageIn} onMouseOut={hoverImageOut} src={sidebarImage} width="120" alt="rose-image"></motion.img>
        </AnimatePresence>
        <h3 className="cousine-bold">euodia</h3>
        <p className="cousine-regular">Greek Εὐοδία, meaning `prosperous journey` </p>
       
      </Box>
      <AnimatePresence initial={false} mode="wait">
        {menuOpen ? 
        <motion.div  
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        key="box">
        <Box component="nav-links" sx={{textAlign:'center', width:"40%"}}>
        <List>
            <ListItem sx={{border:'solid 1px #d9d9d9', backgroundColor:'black', mb:2, display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                 <NavLink className="cousine-bold-nav" to="/">home</NavLink>
            </ListItem>
            <ListItem sx={{border:'solid 1px #d9d9d9', backgroundColor:'black', mb:2, display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                <NavLink className="cousine-bold-nav" to="/about">about</NavLink>
            </ListItem>
            <ListItem sx={{border:'solid 1px #d9d9d9', backgroundColor:'black', mb:2, display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                <NavLink className="cousine-bold-nav" to="/projects">projects</NavLink>
            </ListItem>
            {backButtonVisible ? <Link sx={{ color: theme.palette.link.default, "&:hover":{color: theme.palette.link.hover}, fontFamily: 'Cousine', fontWeight: 'bold', textDecoration: 'none', fontSize: 20}} href="/projects">↢</Link> : null}
        </List>
      </Box> </motion.div> : <motion.div  
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ duration: 0.4, ease: "easeInOut" }}> {mode === 'light' ? <NightsStayIcon className="mode-toggle" onClick={()=>setMode('dark')} /> : <LightModeIcon className="mode-toggle" onClick={()=>setMode('light')} />} </motion.div> }
        </AnimatePresence>
      </>
    );

    return (
      <>
       {!isDesktop && (
      <AppBar position="fixed" elevation={0} sx={{backgroundColor:"transparent"}}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )}
        {isDesktop ? (<Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
          },
        }}
        open
        variant="permanent"
        anchor="left"
      >
        {drawer}
      </Drawer> ) : ( <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            
          },
        }}
          slotProps={{
            root: {
              keepMounted: true, 
            },
          }}
        >
          {drawer}
        </Drawer>)}

      </>
    );
}

export default SideBar;