import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../Layout/Navigation'
import {catagory} from '../../../Action/product.action'
import Grid from '@material-ui/core/Grid';
import {Container} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Catagrid from './Catagrid'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

const Catagory = () =>
{
    const dispatch = useDispatch();
    const classes = useStyles();
    const catagoryData = useSelector(state => state.product)

    useEffect(()=>{
        dispatch(catagory());
    },[dispatch])
    return(
        <>
        <Navigation/>
        <Container>
            <h1 style={{textAlign:"center"}}>Product Catarory</h1>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        {catagoryData.catagory.map((value,id) => (
                                <Grid item xs={12} md={6} sm={6} key={id}>
                                <Catagrid value={value}/>
                                </Grid>
                        ))}
                    </Grid>
                </div>
        </Container>
        </>
    )
}

export default Catagory