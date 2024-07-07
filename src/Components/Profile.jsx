import * as React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import CssBaseline from '@mui/joy/CssBaseline';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Input from '@mui/joy/Input';
import { LinearProgress, Stack } from '@mui/joy';
import Person from '@mui/icons-material/Person';

export default function Profile() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const [skills, setSkills] = useState('');
    const [cv, setCv] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = (event) => {
        event.preventDefault();
        setOpen(false);
    };

    const minLength = 12;

    return (
        <main>
            <NavBar />
            <CssBaseline />
            <Box sx={{ mx: 'auto', my: 5, maxWidth: 800 }}>
                <Typography level="h1" component="h1" sx={{ textAlign: 'center', mb: 3 }}>
                    Profile
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                    <Avatar sx={{ width: 100, height: 100 }}>
                        {image ? (
                            <img src={image} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                        ) : (
                            <Person fontSize="xl4" />
                        )}
                    </Avatar>
                </Box>
                <Card variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography level="h6">Name:</Typography>
                            <Typography>{name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography level="h6">Last name:</Typography>
                            <Typography>{lastName}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography level="h6">Email:</Typography>
                            <Typography>{email}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography level="h6">Password:</Typography>
                            <Typography>{password}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography level="h6">Bio:</Typography>
                            <Typography>{bio}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography level="h6">Skills:</Typography>
                            <Typography>{skills}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography level="h6">CV:</Typography>
                            <Typography>{cv}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography level="h6">Date of birth:</Typography>
                            <Typography>{dateOfBirth}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Button variant="solid" color="primary" onClick={handleOpen}>Edit Profile</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Box>

            <Modal open={open} onClose={handleClose}>
                <ModalDialog variant="outlined" sx={{ maxWidth: 500, mx: 'auto' }}>
                    <ModalClose />
                    <Typography level="h5" component="h2" sx={{ mb: 2 }}>
                        Edit Profile
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }} onSubmit={handleSave}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Input 
                                    placeholder="Name" 
                                    fullWidth 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                    placeholder="Last Name" 
                                    fullWidth 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                    placeholder="Email" 
                                    fullWidth 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack
                                    spacing={0.5}
                                    sx={{
                                        '--hue': Math.min(password.length * 10, 120),
                                    }}
                                >
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <LinearProgress
                                        determinate
                                        size="sm"
                                        value={Math.min((password.length * 100) / minLength, 100)}
                                        sx={{
                                            bgcolor: 'background.level3',
                                            color: 'hsl(var(--hue) 80% 40%)',
                                        }}
                                    />
                                    <Typography
                                        level="body-xs"
                                        sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
                                    >
                                        {password.length < 3 && 'Very weak'}
                                        {password.length >= 3 && password.length < 6 && 'Weak'}
                                        {password.length >= 6 && password.length < 10 && 'Strong'}
                                        {password.length >= 10 && 'Very strong'}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                    placeholder="Bio" 
                                    fullWidth 
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                    placeholder="Skills" 
                                    fullWidth 
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                    placeholder="CV" 
                                    fullWidth 
                                    value={cv}
                                    onChange={(e) => setCv(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input 
                                    placeholder="Date of Birth" 
                                    fullWidth 
                                    value={dateOfBirth}
                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                                <Button variant="solid" color="primary" type="submit">
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </ModalDialog>
            </Modal>
        </main>
    );
}
