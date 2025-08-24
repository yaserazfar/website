import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Box, 
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const drawerWidth = 280;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    //{ path: '/projects', label: 'PROJECTS' },
    //{ path: '/progress', label: 'PROGRESS' }
  ];

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Toolbar sx={{ 
        backgroundColor: 'rgba(0,0,0,0.7)', 
        color: 'white',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(8px)'
      }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        </Typography>
      </Toolbar>
      <List sx={{ backgroundColor: 'rgba(0,0,0,0.8)', height: '100%', backdropFilter: 'blur(8px)' }}>
        {navigationItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                color: 'white',
                borderLeft: location.pathname === item.path ? '4px solid #32CD32' : '4px solid transparent',
                backgroundColor: location.pathname === item.path ? 'rgba(50, 205, 50, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                transition: 'all 0.3s ease',
                padding: '16px 24px',
              }}
            >
              <ListItemText 
                primary={item.label} 
                sx={{ 
                  '& .MuiTypography-root': { 
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    fontSize: '1.1rem'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'transparent',
          zIndex: 1000,
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Hamburger Menu - Always visible */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation - Hidden on mobile */}
          {!isMobile && (
            <Box sx={{ 
              display: 'flex', 
              gap: 4,
              alignItems: 'center'
            }}>
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    textDecoration: 'none',
                    color: location.pathname === item.path ? '#32CD32' : 'white',
                    fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    fontSize: '1rem',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease',
                    border: location.pathname === item.path ? '1px solid #32CD32' : '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== item.path) {
                      e.target.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      {/* Spacer to prevent content from going under fixed header */}
      <Toolbar />
      
      {/* Mobile/Tablet drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            backgroundColor: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
          },
          zIndex: 1001
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;
