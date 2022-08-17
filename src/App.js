import "./styles.css";
import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

export default function App() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Workout Placeholder
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is where the workout of the day will go with whatever
            description is wanted from the admin and the picture above is added
            by admin as well
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
