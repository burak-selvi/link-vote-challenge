import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { showMessage } from '../../redux/actions';

export default function SuccessAlert() {
  const dispach = useDispatch();
  const message = useSelector(state => state.message);

  const closeAlert = () => {
    dispach(showMessage(null));
  };

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={5000}
      onClose={closeAlert}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert variant="filled" severity="success">
        {message}
      </Alert>
    </Snackbar>
  );
}
