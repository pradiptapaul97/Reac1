import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {products} from '../products.json'
import {useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';


import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Pdgrid() {
  const classes = useStyles();

  const viewproduct = () =>
    {
        const id = pdetails.id;
        console.log(id);
    }

  const product = useSelector(state => state.product);

  let productDetails = products.find(({id})=>id === product.catagoryId)

  let pdetails = productDetails.subproduct.find(({id})=>id === product.productId)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6} sm={6}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={pdetails.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} md={6} sm={6} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Name {pdetails.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Details {pdetails.subdescription}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {pdetails.id}
                </Typography>
              </Grid>
              <Grid item>
              <Button variant="contained" color="primary" fullWidth onClick={viewproduct}>
                Add To Cart
              </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Price ${ pdetails.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

