import { Box, Button, Container, Grid, IconButton, Link, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { LinkedIn, YouTube, Facebook, WhatsApp, Instagram, Telegram } from "@mui/icons-material";

const Layout = ({children}) => {
    const router = useRouter()

  return (
    <>
       <header className="navbar">
        <Container maxWidth="lg" className="navbar-container">
          <Image src="/logo.png" alt="Jobbershub Logo" width={130} height={45} />
          <Box display={"flex"} alignItems={"center"}>
            <Typography className='cp' onClick={() => router.push("/")} mr={2}>Home</Typography>
            <Typography className='cp' onClick={() => router.push("/about-as")}>About us</Typography>
            <Typography mx={2} className='cp' onClick={() => router.push("/privacy-policy")}>Privacy Policy</Typography>
            {/* <Typography mr={2} className='cp' onClick={() => router.push("/terms-condition")}>Terms & Condition</Typography> */}
            <Box style={{ background: 'linear-gradient(90deg, #FF7309 0%, #FE9D02 100%)' }} borderRadius={"4px"} px={2} py={1} className='cp' onClick={() => router.push("/contact-us")}>
              <Typography color='white'>Contact Us</Typography>
            </Box>
            {/* <Button variant="outlined" color="primary">Login</Button> */}
          </Box>
        </Container>
      </header>
      {children}
      <Box sx={{ backgroundColor: "#1E1E1E", color: "#FFFFFF", p: 4 }}>
      <Grid container spacing={4}>
        {/* Logo and Info */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: "#36c1a4", fontWeight: "bold" }}>
            GroMo
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Sell financial products & earn ₹1 Lakh/month
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#000", color: "#FFF", borderRadius: "8px" }}
          >
            Get it on Google Play
          </Button>
          <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
            <IconButton color="inherit"><LinkedIn /></IconButton>
            <IconButton color="inherit"><YouTube /></IconButton>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><WhatsApp /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
            <IconButton color="inherit"><Telegram /></IconButton>
          </Box>
        </Grid>

        {/* Products */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Products</Typography>
          {[
            "Credit Card",
            "Savings Account",
            "Demat Account",
            "Loan",
            "Line of Credit",
            "Investment",
            "Sell Insurance",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Company */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Company</Typography>
          {[
            "Academy",
            "Partner with us",
            "Blog",
            "About us",
            "Careers",
          ].map((item, index) => (
            <Typography key={item} variant="body2" sx={{ mt: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                {item} {item === "Careers" && <Button sx={{ ml: 1, p: 0, color: "#36c1a4", fontWeight: "bold" }}>Hiring!</Button>}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>Contact Us</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>+91 8062159334</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>contact@gromo.in</Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, borderTop: "1px solid #444", pt: 2, textAlign: "center" }}>
        <Grid container spacing={2} justifyContent="center">
          {[
            "Privacy policy",
            "Terms & Conditions",
            "Cancellation policy",
            "Data Storage Policy",
          ].map((item) => (
            <Grid item key={item}>
              <Typography variant="body2">
                <Link href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Typography variant="body2" sx={{ mt: 2 }}>
          © 2024 GroMo. All rights reserved.
        </Typography>
      </Box>
    </Box>
      {/* <footer className="footer">
        <Typography variant="body2">&copy; 2025 Jobbershub Marketing India LLP. All rights reserved.</Typography>
      </footer> */}
    </>
  )
}

export default Layout
