import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    // margin: theme.spacing(3),
  },
}));

export default function Locations() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    hanoi: false,
    hcm: false,
    thanhhoa: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { hanoi, hcm, thanhhoa } = state;
  const error = [hanoi, hcm, thanhhoa].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={hanoi} onChange={handleChange} name="hanoi" />}
            label="Hà Nội"
          />
          <FormControlLabel
            control={<Checkbox checked={hcm} onChange={handleChange} name="hcm" />}
            label="TP. Hồ Chí Minh"
          />
          <FormControlLabel
            control={<Checkbox checked={thanhhoa} onChange={handleChange} name="thanhhoa" />}
            label="Thanh Hóa"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}