import React, { useState, useRef } from 'react';
import NavBar from "./NavBar";
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { CssBaseline, Stack } from "@mui/joy";
import Avatar from '@mui/joy/Avatar';
import { Person } from '@mui/icons-material';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import DialogActions from '@mui/joy/DialogActions';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import AddIcon from '@mui/icons-material/Add';
import Input from '@mui/joy/Input';

const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.background.level1 : '#fff',
    ...theme.typography['body-sm'],
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
}));

export default function CvMaker() {
    const [image, setImage] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);
    const [competenceOpen, setCompetenceOpen] = useState(false);
    const [experienceOpen, setExperienceOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [educationOpen, setEducationOpen] = useState(false);
    const [profileText, setProfileText] = useState('');
    const [competenceText, setCompetenceText] = useState('');
    const [experienceText, setExperienceText] = useState('');
    const [languageText, setLanguageText] = useState('');
    const [educationText, setEducationText] = useState('');
    const [tempProfileText, setTempProfileText] = useState('');
    const [tempCompetenceText, setTempCompetenceText] = useState('');
    const [tempExperienceText, setTempExperienceText] = useState('');
    const [tempLanguageText, setTempLanguageText] = useState('');
    const [tempEducationText, setTempEducationText] = useState('');
    const fileInputRef = useRef(null);

    const handleCardClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProfileSubmit = () => {
        setProfileText(tempProfileText);
        setProfileOpen(false);
    };

    const handleCompetenceSubmit = () => {
        setCompetenceText(tempCompetenceText);
        setCompetenceOpen(false);
    };

    const handleExperienceSubmit = () => {
        setExperienceText(tempExperienceText);
        setExperienceOpen(false);
    };

    const handleLanguageSubmit = () => {
        setLanguageText(tempLanguageText);
        setLanguageOpen(false);
    };

    const handleEducationSubmit = () => {
        setEducationText(tempEducationText);
        setEducationOpen(false);
    };

    return (
        <main>
            <NavBar />
            <Box sx={{ mx: 20, my: 5 }}>
                <Typography level="h1" component="h1">
                    Create your CV!
                </Typography>
                <Box sx={{ mx: 20, my: 10 }}>
                    <Grid container spacing={5} sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={4}>
                            <Card
                                sx={{
                                    height: 200,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    },
                                    cursor: 'pointer'
                                }}
                                onClick={handleCardClick}
                            >
                                <Typography level="title-lg">Photo</Typography>
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100%' }}>
                                    <Avatar sx={{ width: 100, height: 100 }}>
                                        {image ? (
                                            <img src={image} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                        ) : (
                                            <Person fontSize="xl4" />
                                        )}
                                    </Avatar>
                                </Box>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Card
                                sx={{
                                    height: 200,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    },
                                }}
                                onClick={() => setProfileOpen(true)}
                            >
                                <Typography level="title-lg">Profile</Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {profileText ? (
                                        <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {profileText}
                                        </Typography>
                                    ) : (
                                        <AddIcon sx={{ width: 100, height: 100 }} />
                                    )}
                                </Box>
                            </Card>
                            <Modal open={profileOpen} onClose={() => setProfileOpen(false)}>
                                <ModalDialog variant="outlined" role="alertdialog">
                                    <DialogTitle>
                                        Ajouter un profil
                                    </DialogTitle>
                                    <Divider />
                                    <DialogContent>
                                        <Input
                                            size="lg"
                                            placeholder="Large"
                                            value={tempProfileText}
                                            onChange={(e) => setTempProfileText(e.target.value)}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="solid" color="primary" onClick={handleProfileSubmit}>
                                            Ajouter
                                        </Button>
                                        <Button variant="plain" color="neutral" onClick={() => setProfileOpen(false)}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </ModalDialog>
                            </Modal>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card
                                sx={{
                                    height: 200,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    },
                                }}
                                onClick={() => setCompetenceOpen(true)}
                            >
                                <Typography level="title-lg">Competence</Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {competenceText ? (
                                        <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {competenceText}
                                        </Typography>
                                    ) : (
                                        <AddIcon sx={{ width: 100, height: 100 }} />
                                    )}
                                </Box>
                            </Card>
                            <Modal open={competenceOpen} onClose={() => setCompetenceOpen(false)}>
                                <ModalDialog variant="outlined" role="alertdialog">
                                    <DialogTitle>
                                        Add Competence
                                    </DialogTitle>
                                    <Divider />
                                    <DialogContent>
                                        <Stack spacing={1}>
                                            <Input
                                                placeholder="Enter your competence"
                                                required
                                                value={tempCompetenceText}
                                                onChange={(e) => setTempCompetenceText(e.target.value)}
                                            />
                                        </Stack>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="solid" color="primary" onClick={handleCompetenceSubmit}>
                                            Add
                                        </Button>
                                        <Button variant="plain" color="neutral" onClick={() => setCompetenceOpen(false)}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </ModalDialog>
                            </Modal>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Card
                                sx={{
                                    height: 200,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    },
                                }}
                                onClick={() => setExperienceOpen(true)}
                            >
                                <Typography level="title-lg">Experience</Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {experienceText ? (
                                        <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {experienceText}
                                        </Typography>
                                    ) : (
                                        <AddIcon sx={{ width: 100, height: 100 }} />
                                    )}
                                </Box>
                            </Card>
                            <Modal open={experienceOpen} onClose={() => setExperienceOpen(false)}>
                                <ModalDialog variant="outlined" role="alertdialog">
                                    <DialogTitle>
                                        Add Experience
                                    </DialogTitle>
                                    <Divider />
                                    <DialogContent>
                                        <Stack spacing={1}>
                                            <Input
                                                placeholder="Enter your experience"
                                                required
                                                value={tempExperienceText}
                                                onChange={(e) => setTempExperienceText(e.target.value)}
                                            />
                                        </Stack>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="solid" color="primary" onClick={handleExperienceSubmit}>
                                            Add
                                        </Button>
                                        <Button variant="plain" color="neutral" onClick={() => setExperienceOpen(false)}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </ModalDialog>
                            </Modal>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card
                                sx={{
                                    height: 200,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    },
                                }}
                                onClick={() => setLanguageOpen(true)}
                            >
                                <Typography level="title-lg">Language</Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {languageText ? (
                                        <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {languageText}
                                        </Typography>
                                    ) : (
                                        <AddIcon sx={{ width: 100, height: 100 }} />
                                    )}
                                </Box>
                            </Card>
                            <Modal open={languageOpen} onClose={() => setLanguageOpen(false)}>
                                <ModalDialog variant="outlined" role="alertdialog">
                                    <DialogTitle>
                                        Add Language
                                    </DialogTitle>
                                    <Divider />
                                    <DialogContent>
                                        <Stack spacing={1}>
                                            <Input
                                                placeholder="Enter your language"
                                                required
                                                value={tempLanguageText}
                                                onChange={(e) => setTempLanguageText(e.target.value)}
                                            />
                                        </Stack>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="solid" color="primary" onClick={handleLanguageSubmit}>
                                            Add
                                        </Button>
                                        <Button variant="plain" color="neutral" onClick={() => setLanguageOpen(false)}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </ModalDialog>
                            </Modal>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <Card
                                sx={{
                                    height: 200,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    },
                                }}
                                onClick={() => setEducationOpen(true)}
                            >
                                <Typography level="title-lg">Education</Typography>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}>
                                    {educationText ? (
                                        <Typography sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {educationText}
                                        </Typography>
                                    ) : (
                                        <AddIcon sx={{ width: 100, height: 100 }} />
                                    )}
                                </Box>
                            </Card>
                            <Modal open={educationOpen} onClose={() => setEducationOpen(false)}>
                                <ModalDialog variant="outlined" role="alertdialog">
                                    <DialogTitle>
                                        Add Education
                                    </DialogTitle>
                                    <Divider />
                                    <DialogContent>
                                        <Stack spacing={1}>
                                            <Input
                                                placeholder="Enter your education"
                                                required
                                                value={tempEducationText}
                                                onChange={(e) => setTempEducationText(e.target.value)}
                                            />
                                        </Stack>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="solid" color="primary" onClick={handleEducationSubmit}>
                                            Add
                                        </Button>
                                        <Button variant="plain" color="neutral" onClick={() => setEducationOpen(false)}>
                                            Cancel
                                        </Button>
                                    </DialogActions>
                                </ModalDialog>
                            </Modal>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <CssBaseline />
        </main>
    );
}
