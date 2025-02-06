import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

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
      <footer className="footer">
        <Typography variant="body2">&copy; 2025 Jobbershub Marketing India LLP. All rights reserved.</Typography>
      </footer>
    </>
  )
}

export default Layout
