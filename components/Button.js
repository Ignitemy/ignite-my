import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: (props) =>
      props.orange
        ? 'var(--color-orange)'
        : props.white
        ? 'var(--color-white)'
        : props.black
        ? 'var(--color-black)'
        : 'var(--color-orange)',
    color: (props) =>
      props.orange
        ? 'var(--color-white)'
        : props.white
        ? 'var(--color-orange)'
        : props.black
        ? 'var(--color-white)'
        : 'var(--color-black)',
    '&:hover': {
      background: (props) =>
        props.orange ? '#ff9100' : props.white ? '#fff9f5' : props.black ? '#262626' : '#ff9100'
    },
    borderColor: (props) => (props.black ? 'var(--color-black)' : 'var(--color-orange)'),
    borderRadius: '10px',
    fontFamily: 'Gotham',
    fontSize: '18px',
    padding: '1rem 4rem',
    textTransform: 'capitalize'
  }
})

const MuiButton = (props) => {
  const classes = useStyles(props)
  return (
    <Button className={classes.root} variant="outlined" onClick={props.onClick}>
      {props.children}
    </Button>
  )
}

export default MuiButton
