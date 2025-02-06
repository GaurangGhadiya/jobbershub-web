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
      <Box sx={{ backgroundColor: "#212736", color: "#FFFFFF", p: 4 }}>
      <Container maxWidth="lg" className="navbar-container">

      <Grid container spacing={4}>
        {/* Logo and Info */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" sx={{ color: "#36c1a4", fontWeight: "bold" }}>
            Jobbershub
          </Typography>
          <Typography fontSize={18} sx={{ mt: 2 }} width={"90%"}>
            Sell financial products & earn ₹1 Lakh/month
          </Typography>
          <Box display={"flex"} alignItems={"center"} justifyContent={"start"} width={"100%"} ml={-1} my={2}>
                      <Image src="/google-play.png" alt="Google Play" width={150} height={50} />
          
                    </Box>
          <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
            <IconButton color="inherit" style={{padding : "5px", backgroundColor : "#4F5261", height : "40px", width : "40px", marginRight : "7px"}}><LinkedIn /></IconButton>
            <IconButton color="inherit" style={{padding : "5px", backgroundColor : "#4F5261", height : "40px", width : "40px", marginRight : "7px"}}><YouTube /></IconButton>
            <IconButton color="inherit" style={{padding : "5px", backgroundColor : "#4F5261", height : "40px", width : "40px", marginRight : "7px"}}><Facebook /></IconButton>
            <IconButton color="inherit" style={{padding : "5px", backgroundColor : "#4F5261", height : "40px", width : "40px", marginRight : "7px"}}><WhatsApp /></IconButton>
            <IconButton color="inherit" style={{padding : "5px", backgroundColor : "#4F5261", height : "40px", width : "40px", marginRight : "7px"}}><Instagram /></IconButton>
            <IconButton color="inherit" style={{padding : "5px", backgroundColor : "#4F5261", height : "40px", width : "40px", marginRight : "7px"}}><Telegram /></IconButton>
          </Box>
        </Grid>

        {/* Products */}
        <Grid item xs={12} md={2.5}>
          <Typography variant="h6" mb={2} sx={{ color : "#9EA2AE", fontSize : "1rem"}}>Products</Typography>
          {[
            "Credit Card",
            "Savings Account",
            "Demat Account",
            "Loan",
            "Line of Credit",
            "Investment",
            "Sell Insurance",
          ].map((item) => (
            <Typography key={item} variant="body2" sx={{ mt: 1, fontSize : "15px" }}>
              <Link href="#" color="inherit" underline="hover">
                {item}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Company */}
        <Grid item xs={12} md={2.5}>
          <Typography variant="h6" mb={2} sx={{ color : "#9EA2AE", fontSize : "1rem"}}>Company</Typography>
          {[
            "Academy",
            "Partner with us",
            "Blog",
            "About us",
            "Careers",
          ].map((item, index) => (
            <Typography key={item} variant="body2" sx={{ mt: 1,fontSize : "15px" }}>
              <Link href="#" color="inherit" underline="hover">
                {item} 
                {/* {item === "Careers" && <Button sx={{ ml: 1, p: 0, color: "#36c1a4", fontWeight: "bold" }}>Hiring!</Button>} */}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={2}>
          <Typography variant="h6" mb={2} sx={{ color : "#9EA2AE", fontSize : "1rem"}}>Contact Us</Typography>
          <Typography variant="body2" sx={{ mt: 1,fontSize : "15px" }}>+91 85308278278</Typography>
          <Typography variant="body2" sx={{ mt: 1 ,fontSize : "15px"}}>support@jobbershub.in</Typography>
        </Grid>
      </Grid>

      
      </Container>
      <Container maxWidth="lg" className="navbar-container">

      <Box sx={{ mt: 4, borderTop: "1px solid #444", pt: 2, textAlign: "center", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
       <Box>
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
       </Box>
        <Typography variant="body2" color='#9EA2AE' fontSize={"0.875rem"}>
          © 2025 Jobbershub. All rights reserved.
        </Typography>
      </Box>
      </Container>
    </Box>
      {/* <footer className="footer">
        <Typography variant="body2">&copy; 2025 Jobbershub Marketing India LLP. All rights reserved.</Typography>
      </footer> */}
    </>
  )
}

export default Layout
