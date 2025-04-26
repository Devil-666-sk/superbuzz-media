import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

// MUI icons
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import WorkIcon from '@mui/icons-material/Work';

const stats = [
  {
    number: 6,
    suffix: '+ million',
    label: 'Ads Spend',
    icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#7DAF32' }} />,
  },
  {
    number: 400,
    suffix: '+',
    label: 'Clients served worldwide',
    icon: <PeopleAltIcon sx={{ fontSize: 40, color: '#7DAF32' }} />,
  },
  {
    number: 19,
    suffix: '+ Years',
    label: 'Digital Marketing',
    icon: <TimelineIcon sx={{ fontSize: 40, color: '#7DAF32' }} />,
  },
  {
    number: 550,
    suffix: '+',
    label: 'Projects Delivered',
    icon: <WorkIcon sx={{ fontSize: 40, color: '#7DAF32' }} />,
  },
];

const HireUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h3'
          align='center'
          fontWeight='bold'
          sx={{ mb: 6, color: '#140040' }}
          data-aos='fade-up'
        >
          Why Hire Us?
        </Typography>

        <Grid container spacing={4} justifyContent='center'>
          {stats.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              data-aos='zoom-in'
              data-aos-delay={index * 200}
              sx={{
                display: 'flex',
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  flexGrow: 1,
                  border: '2px solid #e0e0e0',
                  borderRadius: '16px',
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  minHeight: '250px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: 6,
                    borderColor: '#7DAF32',
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>{item.icon}</Box>

                <Typography
                  variant='h4'
                  fontWeight='bold'
                  sx={{ color: '#140040' }}
                >
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={4}
                    suffix={item.suffix}
                    useEasing
                    enableScrollSpy
                  />
                </Typography>

                <Typography
                  variant='subtitle1'
                  sx={{ color: '#7DAF32', mt: 1 }}
                >
                  {item.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HireUs;
