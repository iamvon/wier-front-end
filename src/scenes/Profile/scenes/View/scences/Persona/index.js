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
import { Button } from '@material-ui/core';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    /* For testing */
    console.log('%cHello', 'color: aquamarine; font-size: 30px;');
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <form className={classes.root}>
      <InputText
        label="Tên"
        name="name"
        classes={classes}
        setData={setData}
        data={data}
        type="text"
      />
      <InputText
        label="Chiều cao"
        name="height"
        classes={classes}
        setData={setData}
        data={data}
        type="number"
      />
      <InputText
        label="Cân nặng"
        name="weight"
        classes={classes}
        setData={setData}
        data={data}
        type="number"
      />
      <InputDate
        label="Ngày sinh"
        name="dob"
        classes={classes}
        setData={setData}
        data={data}
      />
      <InputGender
        label="Giới tính"
        name="gender"
        classes={classes}
        data={data}
        setData={setData}
      />
      <InputStyle
        label="Phong cách"
        name="style"
        classes={classes}
        data={data}
        setData={setData}
      />
      <InputSize
        label="Kích cỡ"
        name="size"
        classes={classes}
        data={data}
        setData={setData}
      />
      <InputBudget
        label="Chi phí"
        name="budget"
        classes={classes}
        data={data}
        setData={setData}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Cập nhật
      </Button>
    </form>
  );
}

export default Persona;
