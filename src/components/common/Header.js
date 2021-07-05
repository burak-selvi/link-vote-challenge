import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Logo from "../../assets/logo.png";

export default function Header() {
  const classes = useStyles();

  return (
    <Box borderBottom="1px solid black" marginTop="1rem" marginBottom="2rem">
      <Box display="flex" justifyContent="space-between">
        <img src={Logo} alt="" className={classes.image} />
        <Box component="p" fontSize="1.6rem" marginBottom="0">
          <span className={classes.linkText}>Link</span>
          <span className={classes.voteText}>VOTE</span> Challenge
        </Box>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  image: {
    filter: "grayscale(100%)",
    width: "30%",
    height: "70px",
  },
  linkText: {
    fontWeight: 700,
  },
  voteText: {
    fontWeight: 300,
    letterSpacing: "3px",
  },
}));
