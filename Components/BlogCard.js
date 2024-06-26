import * as React from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BlogCard() {
  return (
    <Link href='Blog'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="image.jpg"
            alt="no image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Author
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Title
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
