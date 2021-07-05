import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Box, Typography } from "@material-ui/core";
import { DefaultButton, useStyles } from "../utils";

export default function RemoveLink({ isOpen, handleClose, link, handleRemove }) {
  const classes = useStyles();

  return (
    <Dialog
      open={isOpen}
      onClose={(event, reason) => reason === 'escapeKeyDown' && handleClose()}
      fullWidth
      maxWidth="sm">
      <DialogTitle className={classes.dialogTitle}>
        Remove Link
      </DialogTitle>
      <DialogContent style={{ display: 'flex', justifyContent: 'center' }}>
        <Box textAlign="center" marginBottom="1rem">
          <Typography variant="h6" className={classes.greyColor}>
            Do you want to remove:
          </Typography>
          <Typography variant="h4" className={classes.fontBold}>
            {link.name}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions className={classes.actionButtons}>
        <DefaultButton type="button" variant="contained" size="large" onClick={() => handleRemove(link)}>
          OK
          </DefaultButton>
        <DefaultButton type="button" variant="contained" size="large" onClick={handleClose}>
          CANCEL
          </DefaultButton>
      </DialogActions>
    </Dialog>
  )
}
