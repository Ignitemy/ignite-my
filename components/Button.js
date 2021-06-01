import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: (props) => (props.orange ? '#ff6600' : props.white ? '#ffffff' : props.black ? '#000000' : "#ff6600"),
    color: (props) => (props.orange ? '#ffffff' : props.white ? '#ff6600' : props.black ? '#ffffff' : "#000000"),
    '&:hover': {
       background: (props) => (props.orange ? '#ff9100' : props.white ? '#fff9f5' : props.black ? '#262626' : "#ff9100"),
    },
    borderColor: (props) => (props.black ? '#000000' : '#ff6600'),
    borderRadius: '10px'
   }
 })

const MuiButton = (props) => {
  const classes = useStyles(props);
  return <Button className={classes.root} variant="outlined" onClick={props.onClick}>{props.children}</Button>
}

export default MuiButton;
