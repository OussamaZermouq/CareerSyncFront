import NavBar from "./NavBar";
import * as React from "react";
import {
  Box,
  SvgIcon,
  CssBaseline,
  Typography,
  Button,
  Textarea,
  styled,
  CircularProgress,
  Checkbox,
  Divider,
} from "@mui/joy";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { Avatar, ListItemContent } from "@mui/joy";
import ArticleIcon from "@mui/icons-material/Article";
import EditIcon from "@mui/icons-material/Edit";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Chip } from "@mui/joy";
import getSkills from "../API/SkillsDataService";
import CheckIcon from "@mui/icons-material/Check";

export default function HomePage() {
  const [skillsData, setSkillsData] = React.useState([]);
  //holds the selected chips
  const [selectedChips, setSelectedChips] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  //holds the selected skills, use this to send to the Spring backend
  const [selected, setSelected] = React.useState([]);
  React.useEffect(() => {
    async function fetchSkills() {
      const skills_data = await getSkills();
      setSkillsData(skills_data);
      setLoading(false);
    }
    fetchSkills();
  }, []);

  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;
  const handleChipClick = (skill) => {
    console.table(selected);
    setSelectedChips((prev) => ({
      ...prev,
      [skill]: !prev[skill],
    }));
  };

  return (
    <main>
      <NavBar />
      <Box sx={{ mx: 40 }}>
        <Typography level="h1">Introduce yourself</Typography>
      </Box>
      <Box sx={{ mx: 50, my: 3 }}>
        <AccordionGroup
          size={"lg"}
          sx={{ maxWidth: "auto" }}
          transition={{
            initial: "0.3s ease-out",
            expanded: "0.2s ease",
          }}
        >
          <Accordion>
            <AccordionSummary>
              <Avatar color="primary">
                <ArticleIcon />
              </Avatar>
              <ListItemContent>
                <Typography level="title-md">Your CV</Typography>
                <Typography level="body-sm">
                  Upload or create your CV.
                </Typography>
              </ListItemContent>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "block" }}>
                <Typography>
                  {" "}
                  Using our Model your cv will be scanned to look for your
                  skills, and help you find a career.
                </Typography>
                <Divider orientation="vertical" />
                <Button
                  component="label"
                  sx={{ maxWidth: "fit-content", m: 2 }}
                  tabIndex={-1}
                  startDecorator={
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </SvgIcon>
                  }
                >
                  Upload Your CV
                  <VisuallyHiddenInput type="file" title="Please choose a CV" accept="application/pdf" />
                </Button>

                <Button
                  sx={{ maxWidth: "fit-content", m: 2 }}
                  startDecorator={<NoteAddIcon />}
                >
                  Create Your CV
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              <Avatar color="success">
                <EditIcon />
              </Avatar>
              <ListItemContent>
                <Typography level="title-md">Talk about yourself</Typography>
                <Typography level="body-sm">
                  Write a description about you and what you do.
                </Typography>
              </ListItemContent>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ m: 2 }}>
                <Textarea minRows={5} placeholder="Describe yourself" />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary>
              <Avatar color="warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8c0 20.4 7.1 38.4 17.5 50.9L99.7 157L84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5c-8.5 11.5-14.9 27.5-19.4 45.8c-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7c-4-18.5-10.2-34.4-18.7-45.9c-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1c0-39.2-24.8-68.8-52.4-68.8c-2.9 0-4.7-.1-5.2-.1M440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31s31-13.77 31-31s-13.8-31-31-31M311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9s.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9s.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9s.3-6.08.8-9zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31m0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31s31-13.8 31-31s-13.8-31-31-31"
                  ></path>
                </svg>
              </Avatar>
              <ListItemContent>
                <Typography level="title-md">Your Skills</Typography>
                <Typography level="body-sm">
                  What skills do you have. Select the ones that apply.
                </Typography>
              </ListItemContent>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ m: 2 }}>
                {loading ? (
                  <CircularProgress />
                ) : (
                  skillsData.skills.map((skill) => {
                    const checked = selected.includes(skill);
                    return (
                      <Chip
                        sx={{ m: 0.5 }}
                        size="lg"
                        color="primary"
                        variant="outlined"
                        startDecorator={
                          checked && (
                            <CheckIcon
                              sx={{ zIndex: 1, pointerEvents: "none" }}
                            />
                          )
                        }
                      >
                        <Checkbox
                          variant="outlined"
                          color={checked ? "primary" : "neutral"}
                          disableIcon
                          overlay
                          label={skill}
                          checked={checked}
                          onClick={() => handleChipClick(skill)} // Toggle selected status on click
                          onChange={(event) => {
                            setSelected((skills) =>
                              !event.target.checked
                                ? skills.filter((n) => n !== skill)
                                : [...skills, skill]
                            );
                          }}
                        />
                      </Chip>
                    );
                  })
                )}
              </Box>
              <Box display="flex" justifyContent="center">
                <Button variant="outlined">More Skills</Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        </AccordionGroup>
      </Box>
      <CssBaseline />
    </main>
  );
}
