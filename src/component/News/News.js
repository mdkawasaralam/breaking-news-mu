import React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const News = (props) => {
    const { title,description,urlToImage}=props.article
    console.log(props);
   
    return (
        <CardContent sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={urlToImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button  size="small">Learn More</Button>
        </CardActions>
      </CardContent>
    );
};

export default News;