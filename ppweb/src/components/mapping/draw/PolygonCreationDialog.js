import { useState, useContext } from 'react';
import { PolygonContext } from '../context/PolygonContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';

export default function PolygonCreationDialog(props) {
  const { open, handleClose, newPoly } = props;

  const [notes, setNotes] = useState(null);

  const polygonContext = useContext(PolygonContext);

  const onNotesChange = (e) => {
    setNotes(e.target.value);
  }

  const onClose = () => {
    console.log(newPoly)
    axios.post(`http://localhost:8080/api/trash`, {
      id: newPoly.current.id,
      type: "Feature",
      properties: {
        category: "trash",
        notes: notes,
        user: newPoly.current.properties.user,
        date: newPoly.current.properties.date
      },
      geometry: {coordinates: newPoly.current.geometry.coordinates, type: "Polygon"}
    });
    newPoly.current.properties.notes = notes;
    setNotes("");
    handleClose(newPoly.current);
  }

  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle>New Area of Interest</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To submit unique information for your new AoI, please enter short phrases/tags below:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          type="email"
          fullWidth
          variant="standard"
          value={notes ? notes : ""}
          onChange={onNotesChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Submit notes</Button>
      </DialogActions>
    </Dialog>
  );
}