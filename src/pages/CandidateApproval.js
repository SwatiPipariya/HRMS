import React, { useState } from 'react';
// import './styles.css'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function RatingForm() {
  const [ratings, setRatings] = useState({
    // Your state remains the same
  });

  const handleRatingChange = (fieldName, value) => {
    setRatings({
      ...ratings,
      [fieldName]: value
    });
  };

  return (

    <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
                <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Skills Rating Form</h1>
      <form className="space-y-4">
        {Object.keys(ratings).map((fieldName) => (
          <div key={fieldName} className="flex items-center">
            <label className="w-1/3">{fieldName}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={ratings[fieldName]}
              onChange={(e) => handleRatingChange(fieldName, parseInt(e.target.value))}
              className="w-2/3"
            />
            <span className="ml-2">{ratings[fieldName]}</span>
          </div>
        ))}
      </form>
    </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

  );
}

export default RatingForm;
