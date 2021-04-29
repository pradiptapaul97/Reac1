import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Pcart from './Pcart'
import {products} from '../products.json'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Pgrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {products.map((value,id) => (
                  <Grid item xs={12} md={4} sm={6} key={id}>
                  <Pcart value={value}/>
                </Grid>
                ))}
      </Grid>
    </div>
  );
}
