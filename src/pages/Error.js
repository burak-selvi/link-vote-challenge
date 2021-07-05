import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useStyles } from "../utils";

export default function Error() {
  const classes = useStyles();
  return (
    <Box textAlign="center">
      <Typography variant="h3">
        Page Not Found
      </Typography>
      <Link to="/" className={classes.link}>
        Return to HomePage
      </Link>
    </Box>
  )
}
