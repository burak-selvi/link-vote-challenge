import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Box, Grid, Typography, IconButton } from '@material-ui/core';
import { RemoveCircleOutline, ArrowUpward, ArrowDownward } from '@material-ui/icons';
import { deleteLink, voteUp, voteDown, useStyles } from "../utils";
import { showMessage } from './../redux/actions';
import { RemoveLink } from '.';

export default function SingleLink({ link, getLinks, pagination, orderValue }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [hovered, setHovered] = useState(false);
  const [remove, setRemove] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleDelete = (id) => {
    setRemove(true);
  };

  const handleRemove = (link) => {
    deleteLink(link.id);
    dispatch(showMessage(`${link.name} removed.`));
    getLinks(pagination, orderValue);
    closeModal();
  };

  const handleVoteUp = (id) => {
    voteUp(id);
    getLinks(pagination, orderValue);
  };

  const handleVoteDown = (id) => {
    voteDown(id);
    getLinks(pagination, orderValue);
  };

  const closeModal = () => {
    setRemove(false);
  }

  return (
    <Grid container spacing={2} className={classes.singleLink} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {hovered && (
        <Box position="absolute" top="0" right="0" style={{ transform: 'translate(15px, -15px)' }}>
          <IconButton style={{ padding: '5px' }} onClick={() => handleDelete(link.id)}>
            <RemoveCircleOutline color="error" />
          </IconButton>
        </Box>
      )}
      <Grid item xs={4}>
        <Box className={classes.box}>
          <Box fontSize="2rem" fontWeight={700}>{link.vote}</Box>
          <Box fontWeight={500} color="#343835">POINTS</Box>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box>
          <Typography variant="h6" className={classes.urlName}>
            {link.name}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            ({link.url})
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-between">
            <IconButton className={classes.voteButton} onClick={() => handleVoteUp(link.id)}>
              <ArrowUpward fontSize="small" color="action" /> Up Vote
            </IconButton>
            <IconButton className={classes.voteButton} onClick={() => handleVoteDown(link.id)}>
              <ArrowDownward fontSize="small" color="action" /> Down Vote
            </IconButton>
          </Box>
        </Box>
      </Grid>
      {remove && <RemoveLink isOpen={remove} handleClose={closeModal} handleRemove={handleRemove} link={link} />}
    </Grid>
  );
}
