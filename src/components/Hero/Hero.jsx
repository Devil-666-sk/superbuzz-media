import React from 'react';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import heroImage from '../../assets/Hero/hero.webp';

const items = [
  'Managed $6+ Million in Ad Spend',
  '400+ Clients Served Successfully',
  '550+ Projects Completed',
  '19+ Years in Digital Marketing',
];

const Hero = () => {
  return (
    <Box sx={{ background: '#7DAF32', py: 4,  height: '110vh' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row-reverse' },
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
          gap: 4,
        }}
      >
        {/* Image */}
        <Box
          component='img'
          src={heroImage}
          alt='Hero'
          data-aos='fade-left'
          sx={{
            width: '80%',
            maxWidth: '800px',
            height: 'auto',
          }}
        />

        {/* Text Content */}
        <Box sx={{ maxWidth: '600px' }} data-aos='fade-right'>
          <Typography
            variant='h1'
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              fontWeight: 'bold',
              color: '#140040',
              mb: 2,
              lineHeight: 1,
            }}
          >
            Digital Marketing <br />
            Services in <br />
            Mohali
          </Typography>

          {/* Compact List with Icons */}
          <List
            sx={{
              color: '#140040',
              py: 0,
              '& .MuiListItem-root': {
                py: 0.1,
              },
            }}
            dense
          >
            {items.map((item, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: '32px', color: '#FFC702' }}>
                  <CheckCircleIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: { xs: '0.9rem', sm: '1.5rem', md: '1.2rem' },
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Button
            variant='contained'
            sx={{
              backgroundColor: '#FFC702',
              color: '#000',
              fontSize: { xs: '0.9rem', sm: '1.5rem', md: '1.2rem' },
              padding: '10px 20px',
              borderRadius: '8px',
              mt: 2,
              '&:hover': {
                backgroundColor: '#140040',
                color: '#fff',
              },
            }}
          >
            Call For More Info At 9115133454
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
