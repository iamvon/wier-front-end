import React, { useState } from 'react';
import {
  InputText,
  InputDate,
  InputGender,
  InputStyle,
  InputSize,
  InputBudget,
} from '../../../components';
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
  containerSlider: {
    width: '100%',
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
  const [data, setData] = useState({
    name: null,
    height: null,
    weight: null,
    dob: null,
    gender: null,
  });

  const handleChange = (data) => {
    setData(data);
  };

  return (
    <div className={classes.root}>
      <InputText label="Tên" name="name" classes={classes} />
      <InputText label="Chiều cao" name="height" classes={classes} />
      <InputText label="Cân nặng" name="weight" classes={classes} />
      <InputDate label="Ngày sinh" name="dob" classes={classes} />
      <InputGender label="Giới tính" name="gender" classes={classes} />
      <InputStyle label="Phong cách" name="style" classes={classes} />
      <InputSize label="Kích cỡ" name="size" classes={classes} />
      <InputBudget label="Chi phí" name="budget" classes={classes} />
    </div>
  );
}

export default Persona;
