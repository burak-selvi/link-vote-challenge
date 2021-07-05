import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { Box } from "@material-ui/core";
import { saveLink, CustomTextField, DefaultButton, useStyles } from "../utils";
import { showMessage } from './../redux/actions';

export default function AddLinkForm() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    saveLink({ ...data, vote: 0 });
    dispatch(showMessage(`${data.name} added.`));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomTextField
        name="name"
        fullWidth
        margin="normal"
        variant="outlined"
        label="Link Name"
        placeholder="e.g. Alphabet"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
          className: classes.inputLabel,
        }}
        {...register('name', { required: true })}
      />
      <CustomTextField
        name="url"
        fullWidth
        margin="normal"
        variant="outlined"
        label="Link URL"
        placeholder="e.g. http://abc.xyz"
        InputLabelProps={{
          shrink: true,
          className: classes.inputLabel,
        }}
        {...register('url', { required: true })}
      />
      <Box display="flex" justifyContent="flex-end" marginTop="1rem">
        <DefaultButton type="submit" variant="contained" size="large">
          ADD
          </DefaultButton>
      </Box>
    </form>
  )
}
