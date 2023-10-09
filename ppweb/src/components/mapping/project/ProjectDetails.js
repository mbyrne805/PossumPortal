import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import JoinFull from '@mui/icons-material/JoinFull';
import Settings from '@mui/icons-material/Settings';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import Recommend from '@mui/icons-material/Recommend';
import Sell from '@mui/icons-material/Sell';
import { Typography } from '@mui/material';

const DetailsNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 30,
  },
});

export default function ProjectDetails(props) {
  const [infoOpen, setInfoOpen] = React.useState(true);
  const [tagsOpen, setTagsOpen] = React.useState(false);
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [connsOpen, setConnsOpen] = React.useState(false);
  const [recsOpen, setRecsOpen] = React.useState(false);
  const [pubOpen, setPubOpen] = React.useState(false);

  const data = [
    { icon: <Sell />, label: 'Tags', opener: () => setTagsOpen(!tagsOpen) },
    { icon: <Dns />, label: 'Details', opener: () => setDetailsOpen(!detailsOpen) },
    { icon: <JoinFull />, label: 'Connections', opener: () => setConnsOpen(!connsOpen) },
    { icon: <Recommend />, label: 'Recommendations', opener: () => setRecsOpen(!recsOpen) },
    { icon: <Public/>, label: "Publish", opener: () => setPubOpen(!pubOpen) }
  ];

  console.log(props)
  
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ width: 400 }}>
          <DetailsNav component="nav" disablePadding>
              {/* <ListItemIcon sx={{ fontSize: 50 }}>{"\u25bc"}</ListItemIcon> */}
              {/* <Card sx={{display: "flex", justifyContent: "center", marginX: 10, marginY: 1}}> */}
              <ListItemText
                sx={{ my: 2, textAlign: "center" }}
                primary={props.project.properties.projectName}
                primaryTypographyProps={{
                  fontSize: "1.25rem",
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
              {/* </Card> */}
            <Divider />
            <ListItem component="div" disablePadding>
              <ListItemButton sx={{ height: 56 }} onClick={props.handleDetailsSelect}>
                <ListItemIcon>
                  <Home color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Projects Overview"
                  primaryTypographyProps={{
                    color: 'primary',
                    fontSize: "1.2rem",
                    fontWeight: 'medium',
                    variant: 'body2',
                  }}
                />
              </ListItemButton>
              <Tooltip title="Project Settings">
                <IconButton
                  size="large"
                  sx={{
                    '& svg': {
                      color: 'rgba(255,255,255,0.8)',
                      transition: '0.2s',
                      transform: 'translateX(0) rotate(0)',
                    },
                    '&:hover, &:focus': {
                      bgcolor: 'unset',
                      '& svg:first-of-type': {
                        transform: 'translateX(-4px) rotate(-20deg)',
                      },
                      '& svg:last-of-type': {
                        right: -5,
                        opacity: 1,
                      },
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      height: '80%',
                      display: 'block',
                      left: 0,
                      width: '1px',
                      bgcolor: 'divider',
                    },
                  }}
                >
                  <Settings />
                  <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                </IconButton>
              </Tooltip>
            </ListItem>
            <Divider />
            <Box
              sx={{
                bgcolor: infoOpen ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: infoOpen ? 0 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setInfoOpen(!infoOpen)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: infoOpen ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: infoOpen ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Info"
                  primaryTypographyProps={{
                    fontSize: "1.25rem",
                    fontWeight: 'medium',
                    lineHeight: '2rem',
                    mb: '2px',
                  }}
                  secondary="(Open to view and modify project information)"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: infoOpen ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: infoOpen ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {infoOpen &&
                data.map((item) => {
                  return (
                    <>
                      <ListItemButton
                        key={item.label}
                        sx={{ py: "0.5rem", minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                        onClick={item.opener}
                      >
                      <ListItemIcon sx={{ color: 'inherit' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: 0,
                          transform: tagsOpen ? 'rotate(-180deg)' : 'rotate(0)',
                          transition: '0.2s',
                        }}
                      />
                      </ListItemButton>
                      {tagsOpen && item.label === "Tags" ?
                        <ListItem>
                          <Card
                            sx={{padding: 2, boxShadow: 5}}
                          >
                            {
                              props.project.properties.tags.map((tag) => {
                                return (
                                  <Chip 
                                    sx={{margin: "0.1rem"}}
                                    label={tag}
                                    // onDelete={handleDelete}
                                  />
                                );
                              })
                            }
                          </Card>
                        </ListItem> :
                        <></>
                      }
                      {detailsOpen && item.label === "Details" ?
                        <ListItem>
                          <Card
                            sx={{padding: 2, boxShadow: 5}}
                          >
                            {
                              props.project.properties.details
                            }
                          </Card>
                        </ListItem> :
                        <></>
                      }
                    </>
                  )})}
            </Box>
          </DetailsNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}