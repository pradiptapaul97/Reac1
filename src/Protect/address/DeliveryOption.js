import React from 'react';
import {useSelector} from 'react-redux'
import Navigation from '../../Component/Layout/Navigation'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStylesaddr = makeStyles((theme) => ({
    papers :{
        padding:20,
        width: "40%",
        // height: 400,
        margin: "30px auto",
        [theme.breakpoints.down('sm')]: {
            width: "90%",
          },
    },
}))


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: '50px',
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
      maxWidth: '150px',
      maxHeight: '100%',
    },
  }));
  


const DeliveryOption = () =>
{
    const addressValue = useSelector(state => state.address);

    const classesaddr = useStylesaddr();
    const classes = useStyles();

    const cart = useSelector(state => state.cartData);
    console.log(cart.products);

    var totalp = 0.0;

    console.log(addressValue.deleveryaddressData);
    const avalue = addressValue.deleveryaddressData;

    cart.products.map((e)=>{return totalp = totalp+(e.price)*(e.quantity)})
    return(
        <>
        <Navigation/>
        <Container>
        <h1>CHOOSE YOUR DELEVERY OPTION</h1>
        <Grid>
            
                <Paper elevation={10} className={classesaddr.papers}>
                    <Grid>
                        <p>Name :- {avalue.name}</p>
                        <p>Number :- {avalue.number}</p>
                        <p>Pin :- {avalue.pin}</p>
                        <p>Flat :- {avalue.flat}</p>
                        <p>Area :- {avalue.area}</p>
                        <p>Landmark :- {avalue.landmark}</p>
                        <p>City :- {avalue.city}</p>
                        <p>State :- {avalue.state}</p>
                        <p>Country :- {avalue.country}</p>

                        {/* onClick={() => selAdd(value)} */}
                    </Grid>
                </Paper>

                {cart.products.map((e)=>(

                        <div className={classes.root}>
                        <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={6} sm={6}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={e.image} />
                            </ButtonBase>
                            </Grid>
                            <Grid item xs={6} md={6} sm={6} container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    {e.category}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                {e.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Quantity: {e.quantity}
                                </Typography>
                                </Grid>
                                <Grid item>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">Price ${(e.price)*(e.quantity)}</Typography>
                            </Grid>
                            </Grid>
                        </Grid>
                        </Paper>
                        </div>))}

                <Paper className={classesaddr.papers}>
                    <Grid>
                <h2>{totalp}</h2>

                <Button size="large" variant="contained" color="primary" fullWidth>CONTINUE</Button>

                </Grid>
                </Paper>
            </Grid>
        </Container>
        </>
    )
}

export default DeliveryOption