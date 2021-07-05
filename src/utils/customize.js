import { TextField, Button, withStyles, makeStyles } from "@material-ui/core";

export const CustomTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

export const DefaultButton = withStyles((theme) => ({
  root: {
    fontSize: "1.2rem",
    color: "white",
    backgroundColor: "#000",
    "&:hover": {
      backgroundColor: "#343835",
    },
    paddingLeft: "3rem",
    paddingRight: "3rem",
    borderRadius: "2rem",
  },
}))(Button);

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#000",
    fontWeight: 600,
    fontSize: "1.1rem",
  },
  inputLabel: {
    color: "#000",
  },
  fontBold: {
    fontWeight: '600'
  },
  greyColor: {
    color: 'grey'
  },
  actionButtons: {
    justifyContent: 'space-evenly',
    marginBottom: theme.spacing(3)
  },
  dialogTitle: {
    backgroundColor: '#000',
    color: '#fff',
    marginBottom: theme.spacing(3),
    padding: '10px 24px'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4)
  },
  submitBtn: {
    marginTop: theme.spacing(2),
    padding: '5px',
    borderRadius: '4px',
    backgroundColor: '#f2f2f2',
    '&:hover': {
      backgroundColor: '#e6e6e6',
    }
  },
  singleLink: {
    marginTop: theme.spacing(3),
    padding: '5px',
    borderRadius: '4px',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#f2f2f2',
      cursor: 'pointer'
    }
  },
  box: {
    backgroundColor: '#e6e6e6',
    border: '1px solid black',
    borderRadius: '6px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  voteButton: {
    padding: '0',
    fontSize: '.8rem',
    fontWeight: 700,
    borderRadius: 'unset'
  },
  urlName: {
    fontWeight: 600
  }
}));
