import NavBar from "./NavBar";
import { Box, Typography, CssBaseline, Grid, Button } from "@mui/joy";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoginForm from "./fragment/LoginForm";
import { Divider } from "@mui/joy";
export default function HomePage(){
    return(
        <main>
            <NavBar />
            <Box sx={{mx:20, my:10}}>
            <Grid container direction='row'>
            <Grid xs={6}>
            <Grid container direction = 'column' spacing={5} sx={{ flexGrow: 1, mx:5 }}>
                <Grid xs={4} >
                    <h1>
                        <Typography level="h1">
                            Actually helping beginners to start a career
                        </Typography>
                    </h1>

                    <Typography level="body-md">
                    CareerSync is an innovative platform designed to streamline your job search by aligning your skills and 
                    aspirations with the best opportunities available. By analyzing your CV and personal description, 
                    CareerSync connects you with tailored job listings from LinkedIn, ensuring a perfect fit for your career growth. 
                    Discover your potential and achieve professional success with CareerSync – where your career and opportunities meet.
                    </Typography>
                </Grid>
                <Grid>
                    <Button variant="plain" size="lg" endDecorator={<ArrowForwardIcon/>} >
                        Get started for free
                    </Button>
                    <Button variant="outlined" size="lg" sx={{mx:5}}>
                        See how it works
                    </Button>
                </Grid>
            </Grid>
            </Grid>
            <Divider orientation="vertical"/>
            <Grid xs={4} sx={{mx:10}}>
                <LoginForm />
            </Grid>
            </Grid>
            
            </Box>
            <CssBaseline />
        </main>

    )
}