import { useState, useContext } from 'react';
import { PolygonContext } from '../context/PolygonContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import axios from 'axios';

export default function PolygonCreationDialog(props) {
  const { open, handleClose, newPoly } = props;

  const [projName, setProjName] = useState("");
  const [summary, setSummary] = useState("");

  const tagsArr = [
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
  ]

  const [tags, setTags] = useState(tagsArr);

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
    <Dialog open={open} onClose={onClose} sx={{justifyContent: "center", maxWidth: "xl"}} >
      <DialogContent 
        sx={{justifyContent: "center"}}
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
            sx={{marginBottom: "1rem", width: 400}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            variant="outlined"
            placeholder="Project Summary"
            value={summary}
            onChange={onProjChange}
            sx={{marginBottom: "1rem", width: 400}}
          />
          <TextField
            autoFocus
            margin="dense"        
            id="name"
            variant="outlined"
            placeholder="Tags"
            value={summary}
            onChange={onSummaryChange}
            sx={{marginBottom: "2rem", width: 400}}
          />
        </Stack>
        </Stack>
        {
          tagsArr.map((tag) => {
            return (
              <Chip 
                sx={{margin: "0.1rem"}}
                label={tag.name}
                onDelete={handleDelete}
              />
            );
          })
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Submit project</Button>
      </DialogActions>
    </Dialog>
  );
}