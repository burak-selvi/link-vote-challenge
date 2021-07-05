import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useStyles } from "../utils";
import { AddLinkForm } from './../components';

export default function AddLink() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Link to="/" className={classes.link}>
        &larr; Return to List
      </Link>
      <Box component="h1" marginTop="3rem">
        Add New Link
      </Box>
      <AddLinkForm />
    </React.Fragment>
  );
}
