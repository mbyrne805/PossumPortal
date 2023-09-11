import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Project from './Project.js';
import ProjectDetails from './ProjectDetails.js';

const ProjectsList = styled(List)({
  backgroundColor: "rgba(71, 98, 130, 0.2)",
  borderRadius: 10,
  margin: 20
});


export default function ProjectsMenu(props) {
  const theme = useTheme()
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  }

  const handleDetailsSelect = () => {
    setDetails(!details);
  }

  const projectTypes = ["Personal", "Groups", "Public"];
  const projectsArr = props.projects && Object.keys(props.projects).map(function(key) {
    return props.projects[key];
  });
  console.log(projectsArr)

  return (
    <Drawer
      sx={{
        width: props.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: props.drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'rgb(5, 30, 52)'
        }
      }}
      variant="persistent"
      anchor="left"
      open={props.drawerOpen}
    >
    {details ? <ProjectDetails projNum={1} handleDetailsSelect={handleDetailsSelect} /> :
    <>
      <DrawerHeader sx={{display: "flex", justifyContent: "center"}}>
        <Typography color="white" variant="h5" fontWeight="bold">Current Projects</Typography>
        {/* <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton> */}
      </DrawerHeader>
      <Divider sx={{bgcolor: "gray", marginX: 2}} />
      {projectTypes.map((projectType) => {
        return (
          <ProjectsList>
            <ListItemButton
              sx={{display: "flex", justifyContent: "center", textAlign: "center"}}
              onClick={handleOpen}
              >
              <ListItemText
                sx={{ my: 0 }}
                primary={projectType}
                primaryTypographyProps={{
                  fontSize: "1.25rem",
                  fontWeight: 'bold',
                  letterSpacing: 0,
                  color: "rgb(102, 157, 246)"
                }}
              />
            </ListItemButton>
            {open &&
              projectsArr.map((project) => {
                console.log(project)
                return(
                  <ListItemButton
                  key={project.projectName}
                  sx={{ py: "0.5rem", minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                >
                  {/* <ListItemIcon sx={{ color: 'inherit' }}>
                    {item.icon}
                  </ListItemIcon> */}
                  <ListItemText
                    primary={`${project.properties.projectName}`}
                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                  />
                </ListItemButton>
                )
              })}
          </ProjectsList>
        );
      })}
    </>}
    </Drawer>
  )
}