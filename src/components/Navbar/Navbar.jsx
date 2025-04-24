import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../assets/superbuzz-logo.webp';

const services = [
  'Website Development',
  'PPC Services',
  'Meta Ad Services',
  'SEO Services',
  'Social Media Management',
  'Graphic Designing',
];

const navLinks = ['Home', 'Our Services', 'About', 'Blog', 'Contact Us'];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState('Home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (link) => {
    setActiveTab(link);
    handleMenuClose();
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position='fixed'
      sx={{
        background: 'rgb(252, 252, 252)',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        zIndex: 1000,
      }}
    >
      <Container maxWidth='lg'>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            data-aos='fade-right'
          >
            <img
              src={Logo}
              alt='SuperBuzz Logo'
              style={{ height: 40, marginRight: 10 }}
            />
          </Box>

          {!isMobile && (
            <Box
              sx={{ display: 'flex', alignItems: 'center', gap: 4 }}
              data-aos='fade-down'
            >
              {navLinks.map((link) =>
                link === 'Our Services' ? (
                  <Box key={link}>
                    <Button
                      onClick={handleMenuOpen}
                      endIcon={<ExpandMoreIcon />}
                      sx={{
                        color: activeTab === link ? '#28a745' : '#000',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: activeTab === link ? '100%' : '0',
                          height: '2px',
                          bottom: 0,
                          left: 0,
                          backgroundColor: '#28a745',
                          transition: 'all 0.3s ease-in-out',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {link}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      MenuListProps={{ sx: { px: 2 } }}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    >
                      {services.map((service) => (
                        <MenuItem
                          key={service}
                          onClick={() => handleNavClick('Our Services')}
                          sx={{
                            '&:hover': {
                              backgroundColor: '#28a745',
                              color: '#fff',
                            },
                          }}
                        >
                          {service}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={link}
                    onClick={() => handleNavClick(link)}
                    sx={{
                      color: activeTab === link ? '#28a745' : '#000',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: activeTab === link ? '100%' : '0',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: '#28a745',
                        transition: 'all 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {link}
                  </Button>
                )
              )}

              {/* CONSULT US for desktop */}
              <Button
                variant='contained'
                sx={{
                  backgroundColor: '#28a745',
                  borderRadius: '9999px',
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#218838',
                  },
                }}
              >
                CONSULT US
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: '#28a745' }} />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Drawer for mobile/tablet */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { background: 'rgba(255, 255, 255, 0.95)', width: 280 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) =>
            link === 'Our Services' ? (
              <Box key={link}>
                <ListItem
                  button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <ListItemText primary={link} />
                  {mobileServicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={mobileServicesOpen} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {services.map((service) => (
                      <ListItem
                        key={service}
                        button
                        onClick={() => handleNavClick('Our Services')}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary={service} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              <ListItem
                button
                key={link}
                onClick={() => handleNavClick(link)}
                sx={{ textAlign: 'center' }}
              >
                <ListItemText primary={link} />
              </ListItem>
            )
          )}

          <Divider sx={{ my: 2 }} />

          {/* CONSULT US for mobile/tablet */}
          <Box sx={{ px: 2 }}>
            <Button
              fullWidth
              variant='contained'
              sx={{
                backgroundColor: '#28a745',
                borderRadius: '9999px',
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#218838',
                },
              }}
            >
              CONSULT US
            </Button>
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
