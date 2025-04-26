import React, { useEffect } from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

import Ads from '../../assets/Services/Ads.webp';
import Website from '../../assets/Services/Website.webp';
import Seo from '../../assets/Services/Seo.webp';
import Meta from '../../assets/Services/Meta.webp';

const AnimatedCard = motion(Card);

const ImageContainer = styled('div')(({ theme }) => ({
  width: '40%',
  height: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '200px',
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  width: '60%',
  padding: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const CardGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: 0,
  },
  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
});

const StyledCard = styled(AnimatedCard)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '16px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const CardComponent = ({ image, title, description, delay }) => {
  return (
    <StyledCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.3 }}
      data-aos='fade-up'
      data-aos-delay={delay * 200}
    >
      <ImageContainer>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </ImageContainer>
      <ContentContainer>
        <CardContent>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay * 0.3 }}
          >
            <Typography
              variant='h6'
              gutterBottom
              sx={{
                fontWeight: 'bold',
                color: '#140040',
              }}
            >
              {title}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay * 0.4 }}
          >
            <Typography variant='body2' color='text.secondary'>
              {description}
            </Typography>
          </motion.div>
        </CardContent>
      </ContentContainer>
    </StyledCard>
  );
};

const Services = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const cardData = [
    {
      image: Ads,
      title: 'Google Ads (PPC) Services',
      description:
        'We`ve created impressive ROI, CRO, and ROAS for our worldwide 300+ clients',
    },
    {
      image: Website,
      title: 'Website Developments',
      description: 'Boost Your Sales with a High-Converting eCommerce Website',
    },
    {
      image: Seo,
      title: 'SEO Services',
      description: 'Enhance online presence with advanced techniques in SEO.',
    },
    {
      image: Meta,
      title: 'Meta Ads',
      description:
        'Drive Sales, Not Just Clicks. We`ve managed over $6 Million in Total ad spend.',
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: theme.spacing(4),
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <TypeAnimation
          sequence={[
            'What We Do​',
            1000,
            'Our Expertise​',
            1000,
            'Digital Solutions',
            1000,
          ]}
          wrapper='h2'
          speed={50}
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#140040',
          }}
          repeat={Infinity}
        />
        <Typography variant='h5' sx={{ mt: 2 }}>
          Our professional and dedicated team of experts will assist you in
          digital marketing services in Mohali.
        </Typography>
      </Box>

      <CardGrid>
        {cardData.slice(0, 2).map((card, index) => (
          <CardComponent
            key={`top-${index}`}
            image={card.image}
            title={card.title}
            description={card.description}
            delay={index}
          />
        ))}
      </CardGrid>
      <CardGrid>
        {cardData.slice(2, 4).map((card, index) => (
          <CardComponent
            key={`bottom-${index}`}
            image={card.image}
            title={card.title}
            description={card.description}
            delay={index + 2}
          />
        ))}
      </CardGrid>
    </Box>
  );
};

export default Services;
