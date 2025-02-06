import React from 'react'
import Layout from './component/layout'
import { Box, Container, Divider, Paper, Typography } from '@mui/material'

const AboutUs = () => {
    return (
        <Layout>
            <Box backgroundColor="#f7f7f7" py={5} >
                <Container maxWidth="lg">
                    <Paper sx={{ padding: 4 }}>
                        <Typography variant="h4" gutterBottom>
                            About Us
                        </Typography>
                        <Divider sx={{ marginBottom: 2 }} />


                        <Typography variant="body1" paragraph>
                            Jobbershub Affiliate Business is unique affiliate marketing Platform that offer a wide range of Products and services for Promotion and Sale. Our Platform Features a Unique “ Refer and Earn “ programme, enabling you to earn a substantial income from the comfort of your home. At Jobbershub Affiliate Business, we provide an exceptional opportunity for Individuals who aspire to achieve their financial goals and fulfill their dreams.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our Platform is rapidly emerging as a leader in the field of affiliate marketing in India, empowering numerous individuals to realize significant earnings through our system. At Jobbershub Affiliate Business, We aim to level-up each and every family in our country who is wishing to attain financial freedom.
                        </Typography>



                        <Typography variant="h6" gutterBottom fontWeight={600}>
                            Our Mission & Vision
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our mission is to finish Unemployment, and to prevent all the hazardous consequences (including depression, suicides, debt, etc.) occuring because of unemployment.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We help people to build a strong income source without any education criteria or any past experience.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            With Jobbershub Affiliate Business, in this pandemic, we provide everyone with a golden opportunity to become an affiliate partner of the company, contribute to the growth of the company as well as fulfill their dreams and achieve financial freedom.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Success, is always one step away. It's only upto you get started and make a change.

                        </Typography>
                        <Typography variant="body1" paragraph>
                            Come, let's unite and grow together. It's our pleasure to see you here.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Welcome, to Jobbershub Affiliate Business !
                        </Typography>



                        <Typography variant="h6" gutterBottom fontWeight={600}>
                            Our Commitment
                        </Typography>

                        <Typography variant="body1" paragraph>
                            At Jobbershub Affiliate Business, we are committed to provide a life of healthy living, financial independence and the freedom to live on your terms. We provide the tools, training and experience based knowledge to help you build a successful business.
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </Layout>
    )
}

export default AboutUs
