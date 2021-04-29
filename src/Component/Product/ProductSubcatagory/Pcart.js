import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useDispatch} from 'react-redux'
import {productdetails} from '../../../Action/product.action'
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function Pcart(props) {

    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    const viewproduct = () =>
    {
        const id = props.value.id;
        console.log(id);
        dispatch(productdetails(id));
        history.push("/product-detail")
    }
  console.log(props.value);

  return (
      <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.value.image}
          title="Product Catagory"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {props.value.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
          {props.value.subdescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" color="primary" fullWidth onClick={viewproduct}>
            View Details
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
