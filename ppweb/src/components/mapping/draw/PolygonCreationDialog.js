import { useState, useContext } from 'react';
import { PolygonContext } from '../context/PolygonContext';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Stack from '@mui/material/Stack';
import axios from 'axios';

export default function PolygonCreationDialog(props) {
  const { open, handleClose, newPoly } = props;

  const [projName, setProjName] = useState("");
  const [summary, setSummary] = useState("");
  const [newTag, setNewTag] = useState("");

  const [tags, setTags] = useState([
    {name: "Eco"},
    {name: "Public"},
    {name: "Volunteer"},
    {name: "Funded"},
    {name: "Trash"},
    {name: "Cleanup"},
    {name: "Fire"},
    {name: "Outreach"},
    {name: "Conservation"},
    {name: "Event"}
  ]);

  const onProjChange = (e) => {
    setProjName(e.target.value);
  }

  const onSummaryChange = (e) => {
    setSummary(e.target.value);
  }

  const handleDelete = () => {
    console.log("sdfds");
  }

  const onClose = () => {
    console.log(newPoly)
    const dateTime = new Date().toLocaleString([], { hour12: false }
    );
    axios.post(`https://possum-portal-fe967e747104.herokuapp.com/api/trash`, {
      id: newPoly.current.id,
      type: "Feature",
      properties: {
        category: "trash",
        notes: summary,
        user: newPoly.current.properties.user,
        date: dateTime
      },
      geometry: {coordinates: newPoly.current.geometry.coordinates, type: "Polygon"}
    });
    newPoly.current.properties.summary = summary;
    newPoly.current.properties.date = dateTime;
    setSummary("");
    handleClose(newPoly.current);
  }

  return (
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
    <Dialog open={open} onClose={onClose} sx={{justifyContent: "center"}}>
      <DialogContent 
        sx={{justifyContent: "center", width: 300}}
      >
        <Stack>
          <Stack alignItems="center">
            <TextField
              variant="outlined"
              autoFocus
              margin="dense"
              id="name"
              placeholder="Project Name"
              value={projName}
              onChange={onProjChange}
              sx={{marginBottom: "0.25rem", width: 300}}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              variant="outlined"
              placeholder="Details"
              value={summary}
              onChange={onProjChange}
              sx={{marginBottom: "1rem", width: 300}}
            />
          </Stack>
          <Divider variant="fullWidth" width={300}/>
          <TextField
              autoFocus
              margin="dense"        
              id="name"
              variant="outlined"
              placeholder="Tags"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setTags(
                    [...tags, {name: e.target.value}]
                  );
                }
              }}
              sx={{marginY: "1rem", width: 300}}
            />
        </Stack>
        <Card
          sx={{padding: 2, boxShadow: 5}}
        >
          {
            tags.map((tag) => {
              return (
                <Chip 
                  sx={{margin: "0.1rem"}}
                  label={tag.name}
                  onDelete={handleDelete}
                />
              );
            })
          }
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Submit project</Button>
      </DialogActions>
    </Dialog>
    </ThemeProvider>
  );
}