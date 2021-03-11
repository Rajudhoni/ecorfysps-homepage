import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../images/1.png";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from "@material-ui/core/styles";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon  from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { findByLabelText } from "@testing-library/react";



function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]:{
      marginBottom: "2em"
    }, 
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
  
    height: "4em",
    [theme.breakpoints.down("md")]:{
      height: "4em" 
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em"
    }
  },
  logoContainer: {
    marginRight: "25px",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
    position: "static",
    left: 0,
    top: 0,
    right: "auto",
    bottom: 0,
    
  },
  tabsContainer: {
    // marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: "10px",
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    minHeight: "35px",
    minWidth: "140px",
    marginTop: 0,
    marginLeft:"10px",
    paddingTop: "14px",
    paddingRight: "14px",
    paddingBottom: "14px",
    paddingLeft: "14px",
    flexDirection: "row",
    justifyContent:"center",
    alignItems: 'center',
    color: "#fff",
    fontSize: "12px",
    lineHeight: "17px",
    [theme.breakpoints.down("xs")]: {
      lineHeight:  "9px"
    },
    fontWeight: "600",
    letterSpacing: "1px",
    textTransform: "upppercase",
    cursor: "pointer",
    boxShadow: 'none'


  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    marginTop: "20px",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
    ...theme.typography.tab,
  },
  drawerIconContainer: {
    marginLeft: "auto", 
    "&:hover": {
      backgroundColor: "transparent"
    }
  }, 
  navRightbtn: {
    position:"absolute",
    left: "38rem",
    [theme.breakpoints.down("md")]: {
      left: "50rem",
    },
    [theme.breakpoints.down("xs")]: {
        left:  "10rem"
    }

  }, 
  drawerIcon: {
    width: "50px", 
    height: "50px"
  }, 
  drawer: {
    backgroundColor: theme.palette.common.arcBlue,
    top: "100px",
    zIndex: 1300 
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white"
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.arcOrange
  }, 
  drawerItemSelected: {
    opacity: 1
  }, 
  appbar: {
    
    backgroundColor: theme.palette.common.white,
    zIndex:  1301,
    boxShadow: "14px 14px 40px 0 rgb(118 126 173 / 8%)"
  },
  toolbar: {
    display: "flex",
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: "15px",
    paddingBottom:"15px",
    height: "100%",
    width: "100%",
    maxWidth: "1150px",
    // justifyContent: "center",
    // alignItems: "center",
  }, 
  navright: {
    
    marginLeft: "auto",
  
    // WebkitBoxPack: "center",
    // WebkitBoxAlign: "center"
  },
  headersignin: {
   color: "#201b3d",
   fontSize: "14px",
   fontWeight: "700",
   textDecoration: "none"
  },
  customTabRoot: {
    color: theme.palette.secondary,
   
    
},
  customTabIndicator: {
    display: "none",
  }
}));

const Header = () => {
  const [Value, setValue] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    console.log(e.currentTarget);
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  const routes = [{name: "Home", link: "/"}, {name: "The Revolution", link: "/revolution"},
                  {name: "About Us", link: "/about"}, {name: "Services", link: "/services"},
                  {name: "Contact Us", link: "/contact"}
                  ]

  useEffect(() => {
    // if (window.location.pathname === "/" && Value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/revolution" && Value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/about" && Value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === "/services" && Value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === "/contact" && Value !== 4) {
    //   setValue(4);
    // } else if (window.location.pathname === "/estimate" && Value !== 5) {
    //   setValue(5);
    // }

    switch (window.location.pathname) {
      case "/":
        if (Value !== 0) {
          setValue(0);
        }
        break;
      case "/revolution":
        if (Value !== 1) {
          setValue(1);
        }
        break;
      case "/about":
        if (Value !== 2) {
          setValue(2);
        }
        break;
      case "/services":
        if (Value !== 3) {
          setValue(3);
          setSelectedIndex(0);
        }
        break;
      case "/customsoftware":
        if (Value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case "/mobileapps":
        if (Value !== 2) {
          setValue(2);
          setSelectedIndex(2);
        }
        break;
      case "/websites":
        if (Value !== 3) {
          setValue(3);
          setSelectedIndex(3);
        }
        break;
      case "/contact":
        if (Value !== 4) {
          setValue(4);
        }
        break;
      default:
        break;
    }
  });

  const tabs = (
    <React.Fragment>
                  <Tabs
               value={Value}
               className={classes.tabsContainer}
               onChange={handleChange}
               classes={{
                root: classes.customTabRoot,
                indicator: classes.customTabIndicator
            }}
            >
              <Tab
                className={classes.tab}
                label="Features"
                component={Link}
                to="/"
              />
              <Tab
                className={classes.tab}
                label="Pricing"
                component={Link}
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                label="Solutions"
                component={Link}
                to="/about"
              />
              <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={(event) => handleClick(event)}
                className={classes.tab}
                label="Services"
                component={Link}
                to="/services"
              />
              <Tab
                className={classes.tab}
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
            <div className={classes.navright}>
              
            <a href="#" className={classes.headersignin} >Sign in</a>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              component={Link}
              to="/estimate"
              onClick={() => setValue(5)}
            >
              START NOW
            </Button>
           
            </div>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  component={Link}
                  key={option}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(event) => {
                    handleMenuItemClick(event, i);
                    setValue(3);
                    handleClose();
                  }}
                  selected={i === selectedIndex}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
    </React.Fragment>
  );
   const drawer = (
     <React.Fragment>
       <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                    open={openDrawer} onClose={()=> setOpenDrawer(false)} 
                    onOpen={() => setOpenDrawer(true)} 
                    classes={{paper: classes.drawer}}
                    anchor="top"
        >
            
                        <List disablePadding>
                        <ListItem divider component={Link} to="/" 
                                  onClick={()=> {setOpenDrawer(false); setValue(0)}}
                                  selected={Value === 0 }
                        >
                              <ListItemText className={Value === 0 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Features</ListItemText>
                        </ListItem>
                        <ListItem divider component={Link} to="/revolution" 
                                onClick={()=> {setOpenDrawer(false); setValue(1)}}
                                selected={Value === 1 }
                          >
                              <ListItemText className={Value === 1 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} divider disableTypography>Pricing</ListItemText>
                            </ListItem>
                            <ListItem divider component={Link} to="/about" 
                                      onClick={()=> {setOpenDrawer(false); setValue(2)}}
                                      selected={Value === 2} 
                            >
                              <ListItemText className={Value === 2 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Solutions</ListItemText>
                            </ListItem>
                            <ListItem divider component={Link} to="/services"
                                     onClick={()=> {setOpenDrawer(false); setValue(3)}}
                                     selected= {Value === 3}
                                     
                            >
                              <ListItemText className={Value === 3 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Services</ListItemText>
                            </ListItem>  
                            <ListItem divider component={Link} to="/contact" 
                                      onClick={()=> {setOpenDrawer(false); setValue(4)}}
                                      selected= {Value === 4}
                            >
                              <ListItemText className={Value === 4 ? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>Contact Us</ListItemText>
                            </ListItem>   
                            <ListItem className={classes.drawerItemEstimate} divider 
                                      component={Link} to="/estimate" 
                                      onClick={()=> {setOpenDrawer(false); setValue(5)}}
                                      selected={Value === 5} 
                            > 
                              <ListItemText className={Value === 5? [classes.drawerItemSelected, classes.drawerItem] : classes.drawerItem} disableTypography>START NOW</ListItemText>
                            </ListItem>   
                        </List>
                    </SwipeableDrawer>
                    <div className={classes.navRightbtn}>
              
                      <a href="#" className={classes.headersignin} >Sign in</a>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        component={Link}
                        to="/estimate"
                        onClick={() => setValue(5)}
                      >
                        START NOW
                      </Button>
                    
                      </div>
                    <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                      <MenuIcon className={classes.drawerIcon}/>
                    </IconButton>
     </React.Fragment>
   )
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar  position="fixed"  className={classes.appbar}>
          <Toolbar disableGutters classes={{root: classes.toolbar}} >
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)}
              disableRipple
            >
              <img alt="logo" src={logo} className={classes.logo}  />
            </Button>
            {matches ? drawer : tabs}
            
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
