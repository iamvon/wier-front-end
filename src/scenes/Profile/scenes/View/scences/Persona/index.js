import React from 'react';
import { InputText, InputDate } from '../../../components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#FAF9FA',
    borderRadius: '15px',
  },
  text: {
    fontWeight: 'bold',
    color: '#4d4d4a',
    fontSize: '1.5rem',
  },
}));

function Persona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InputText label="Tên" name="name" classes={classes} />
      <InputText label="Chiều cao" name="height" classes={classes} />
      <InputDate label="Ngày sinh" name="dob" classes={classes} />
    </div>
  );
}

export default Persona;
