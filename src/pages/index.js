import { Button, Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import Image from 'next/image';
import Layout from './component/layout';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <Layout>
     

      {/* Hero Section */}
      <Box className="hero" sx={{
        backgroundImage: "url('/bg.png')",
      }}>
        <Container maxWidth="lg" >
          <Grid container spacing={4} alignItems="center" mb={-5}

          >
            <Grid item xs={12} md={6}>
              <Typography color='#FF7509' fontSize={16} fontWeight={600}>Download Now</Typography>
              <Box display={"flex"} alignItems={"center"} justifyContent={"start"} my={0.5} ml={-1}>
                <Image src="/google-play.png" alt="Google Play" width={150} height={50} />
                <Image src="/app-store.png" alt="App Store" width={150} height={50} />
              </Box>
              <Typography color='#12161F' fontWeight={700} fontSize={45} lineHeight={1.3} mt={2}>
                Jobbershub Affiliate Bussiness Is Unique Affiliate Marketing Platform
              </Typography>
              <Typography textTransform={"capitalize"} color='#000000' fontWeight={400} fontSize={18} my={2}>
                Our Platform is rapidly emerging as a leader in the field of affiliate marketing in India, empowering numerous individuals to realize significant earnings through our system.
              </Typography>
              <Box style={{ background: 'linear-gradient(90deg, #FF7309 0%, #FE9D02 100%)' }} width={115} borderRadius={"4px"} px={2} py={1} mt={1} className='cp'>
                <Typography color='white'>Learn More</Typography>
              </Box>

            </Grid>
            <Grid item xs={12} md={6}>
              <Image src="/main.png" alt="Mobile App Preview" width={350} height={520} style={{height : "520px", width : "450px"}} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box backgroundColor="white" py={6}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Image src="/side.png" alt="" width={400} height={600} style={{width : "100%", height : "auto", maxHeight  : "530px"}} />
            </Grid>
            <Grid item xs={12} md={6} pl={4}>
              <Typography color='#FF7409' fontSize={20} fontWeight={600} mb={2}>ABOUT OUR COMPANY</Typography>
              <Typography color='#12161F' fontSize={46} fontWeight={500} lineHeight={1.1}>We Provide A Few Awesome Services</Typography>
              <Typography color='#12161F' fontSize={16} textTransform={"capitalize"} fontWeight={300} my={2} lineHeight={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived </Typography>

              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} md={5}>
                  <Box border={"1px solid #FF7509"} borderRadius={"50%"} height={180} width={180} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                    <Typography color='#12161F' fontSize={14} fontWeight={700}>Discover More </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography color='#4D5057' fontWeight={500} fontSize={18} letterSpacing={1}>Websites Development</Typography>
                  <hr />
                  <Typography color='#4D5057' fontWeight={500} fontSize={18} letterSpacing={1}>Applications Services</Typography>
                  <hr />
                  <Typography color='#4D5057' fontWeight={500} fontSize={18} letterSpacing={1}>Mobile Solutions </Typography>
                  <hr />
                  <Typography color='#4D5057' fontWeight={500} fontSize={18} letterSpacing={1}>Digital Media</Typography>
                  <hr />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box className="features" backgroundColor="#F7F7F7">
        <Container maxWidth="lg">
          <Typography color='#FF7509' fontSize={20} fontWeight={600} textAlign={"center"}>OUR SERVICES</Typography>
          <Typography color='#12161F' fontSize={46} fontWeight={700} textAlign={"center"} mb={-3}>Our Features And Services</Typography>

          <Grid container spacing={4} className="features-grid" >
            {[
              { title: 'Membership', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', img: '/feature-1.png' },
              { title: 'Our Mission', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: '/feature-2.png' },
              { title: 'Marketing', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: '/feature-3.png' },
              { title: 'Get Benefits', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', img: '/feature-4.png' },
            ].map((feature, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Card className="feature-card" style={{ position: "relative" }} borderRadius={20}>
                  <CardContent textAlign="center">
                    <Box textAlign={"center"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                      <Box style={{ background: 'linear-gradient(90deg, #FF7309 0%, #FE9D02 100%)' }} borderRadius={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"} width={100} height={100} >

                        <Image src={feature.img} alt={feature.title} width={50} height={50} />
                      </Box>
                    </Box>
                    <Typography color="#151922" fontSize={24} fontWeight={600} mt={2}>{feature.title}</Typography>
                    <Typography color="#202D36" fontSize={14} fontWeight={400} mt={1}>{feature.text}</Typography>
                    <Typography color='#ED6A0F' fontSize={16} fontWeight={600} mt={3}>READ MORE</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    
    </Layout>
  );
}
