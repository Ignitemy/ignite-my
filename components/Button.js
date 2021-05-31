import React from "react";
import MuiButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// const StyledButton = styled.button`
//   background: '#FF6600'
// `

const useStyles = makeStyles({
  root: {
    background: (props) => (props.primary ? '#FF6600' : "#e6007d")
  }
})

const Button = ({ children, props }) => {
  const classes = useStyles();
  return <MuiButton className={classes.root}>{children}</MuiButton>
}

export default Button;
