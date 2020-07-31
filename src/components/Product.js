import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Avatar, IconButton, CardMedia } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  image: {
    height: '250px',
  },
});

const Product = props => {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const { avatarSrc, title, subTitle, description, imageSrc } = props;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={avatarSrc} />}
        action={
          <IconButton>
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />

      <CardMedia image={imageSrc} className={classes.image} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy now</Button>
        <Button size="small">Offer</Button>
      </CardActions>
    </Card>
  );
};

export default Product;
