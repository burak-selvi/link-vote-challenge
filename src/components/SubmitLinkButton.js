import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';
import { useStyles } from "../utils";
import { Add } from '@material-ui/icons';

export default function SubmitLinkButton() {
  const classes = useStyles();

  return (
    <Link to="/add-link" className={classes.link}>
      <Grid container spacing={2} className={classes.submitBtn}>
        <Grid item xs={4}>
          <Box className={classes.box}>
            <Box fontWeight={700}>
              <Add style={{ fontSize: '3.5rem' }} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8} style={{ justifyContent: "center", alignItems: "center" }}>
          <Box component="h2" textAlign="center">
            SUBMIT A LINK
        </Box>
        </Grid>
      </Grid>
    </Link>
  )
}
