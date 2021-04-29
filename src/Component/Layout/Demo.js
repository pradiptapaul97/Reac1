

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar ,
  Toolbar ,
  IconButton ,
  Typography ,
  Badge ,
  MenuItem ,
  Menu ,
  Container ,
  Button }from '@material-ui/core';

  
  import Demo from './Demo'
  
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logout} from '../../Action/auth.action'
import Drawer from './Drawer'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      // backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  accbutt: {
      color: "white",
      backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: 'transparent',
      },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  link: {
        textDecoration: 'none',
        color: "white",
        '&:hover': {
        textDecoration: 'none',
        color: "white",
        },
    },
    linki: {
        textDecoration: 'none',
        color: "black",
        '&:hover': {
        textDecoration: 'none',
        color: "black",
        },
    },
    nvlink: {
    padding: "20px",
    },
    nvlinki: {
        padding: "10px",
        },
}));

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const isAuthenticated=sessionStorage.getItem('token');
  const dispatch = useDispatch();
  const history = useHistory();

  const lout = () =>
  {
      dispatch(logout());
      history.push('/');
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    { (isAuthenticated !== null) ? (<>
      <Typography variant="h6" className={classes.nvlinki} >
          <Link className={classes.linki}>{sessionStorage.getItem("name")}</Link>
      </Typography>
        <Typography variant="h6" className={classes.nvlinki} >
            <Link className={classes.linki} onClick={lout}>Logout</Link>
        </Typography>
        </>
        ) : (<>
        <Typography variant="h6" className={classes.nvlinki} >
            <Link className={classes.linki} to="/register">Register</Link>
        </Typography>
        <Typography variant="h6" className={classes.nvlinki} >
            <Link className={classes.linki} to="/login">Login</Link>
        </Typography>
        </>
        )}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link className={classes.linki} to="/products">
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
          Store<StorefrontIcon/>
          </Badge>
        </IconButton>
        {/* <p>Store</p> */}
      </MenuItem>
      </Link>

      <Link className={classes.linki} to="/data">
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
          Data<FeaturedPlayListIcon/>
          </Badge>
        </IconButton>
        {/* <p>Data</p> */}
      </MenuItem>
      </Link>

      <Link className={classes.linki} to="/cart">
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
          Cart<ShoppingCartIcon/>
          </Badge>
        </IconButton>
        {/* <p>Cart</p> */}
      </MenuItem>
      </Link>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
        <Badge color="secondary">
            Profile<AccountCircle />
          </Badge>
        </IconButton>
        {/* <p>Profile</p> */}
      </MenuItem>
    </Menu>
  );

  return (
    <>
    <div className={classes.grow}>
      <AppBar position="static">
        <Container>
        <Toolbar>
          <Drawer className={classes.menuButton}/>
          <div className={classes.search}>
            <Link to="/" className={classes.link}>
                <h5 style={{marginTop: "7px"}}>DIPTA</h5>
            </Link>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography variant="h6" className={classes.nvlink} >
                <Link className={classes.link} to="/products">
                <Badge color="secondary">
                      Store
                      <StorefrontIcon/>
                    </Badge>
                </Link>
            </Typography>

            <Typography variant="h6" className={classes.nvlink} >
                <Link className={classes.link} to="/data">
                <Badge color="secondary">
                      Data
                      <FeaturedPlayListIcon/>
                    </Badge>
                </Link>
            </Typography>

            <Typography variant="h6" className={classes.nvlink} >
                <Link className={classes.link} to="/cart">
                    <Badge badgeContent={11} color="secondary">
                      Cart
                    <ShoppingCartIcon/>
                    </Badge>
                </Link>
            </Typography>
            
            <Button className={classes.accbutt}
              onClick={handleProfileMenuOpen}>
              <AccountCircle />
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              {/* <MoreIcon /> */}
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    <Demo/>
    </>
  );
}
