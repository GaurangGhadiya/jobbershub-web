import React from 'react';
import { Grid, TextField, Button, Typography, Box, Paper, Container } from '@mui/material';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import toast from 'react-hot-toast';
import Layout from './component/layout';

const ContactUs = () => {
    return (
        <Layout>
            <Box backgroundColor="#f7f7f7"  >
                <Container maxWidth="lg">
                    <Box sx={{ padding: 8 }}>
                        <Grid container spacing={4} justifyContent="center">
                            {/* Left Section (Text and Icons) */}
                            <Grid item xs={12} sm={6} md={6}>
                                <Paper sx={{ padding: 4, backgroundColor: '#ffffff', boxShadow: 3 }}>
                                    <Typography variant="h4" sx={{ marginBottom: 2 }}>
                                        Contact Us
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 3 }}>
                                        Feel free to reach out! We are here to help.
                                    </Typography>
                                    <Box sx={{ marginBottom: 2 }} mt={1}>
                                        <Typography variant="h6" mb={1}>Our Office</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <LocationOn sx={{ marginRight: 1, color: '#FF7409' }} />
                                            <Typography variant="body1">Office no 7 Third Floor Jobbershub, Yashomandir Avenue, College Rd, Patil Colony, Canada Corner, Nashik, Maharashtra 422005</Typography>
                                        </Box>
                                    </Box>
                                    <Box  my={4}>
                                        <Typography variant="h6" mb={1}>Phone</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Phone sx={{ marginRight: 1, color : '#FF7409' }} />
                                            <Typography variant="body1">+91 85308 27878</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ marginBottom: 0 }}>
                                        <Typography variant="h6" mb={1}>Email</Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Email sx={{ marginRight: 1, color : '#FF7409' }} />
                                            <Typography variant="body1">support@jobbershub.in</Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>

                            {/* Right Section (Form) */}
                            <Grid item xs={12} sm={6} md={6}>
                                <Paper sx={{ padding: 4, backgroundColor: '#ffffff', boxShadow: 3 }}>
                                    <Typography variant="h4" sx={{ marginBottom: 3 }}>
                                        Get In Touch
                                    </Typography>
                                    <form>
                                        <TextField
                                            label="Your Name"
                                            fullWidth
                                            required
                                            variant="outlined"
                                            sx={{ marginBottom: 2 }}
                                        />
                                        <TextField
                                            label="Your Email"
                                            fullWidth
                                            required
                                            variant="outlined"
                                            sx={{ marginBottom: 2 }}
                                        />
                                        <TextField
                                            label="Message"
                                            fullWidth
                                            required
                                            variant="outlined"
                                            multiline
                                            rows={4}
                                            sx={{ marginBottom: 3 }}
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            // type="submit"
                                            sx={{ padding: 1.5 }}
                                            onClick={(e) => toast.success("Message sent successfully!")}
                                        >
                                            <Typography color="white">Submit</Typography>
                                        </Button>
                                    </form>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Layout>
    );
};

export default ContactUs;
