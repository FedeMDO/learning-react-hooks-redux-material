import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import style from "./style";
const MovieResult = ({ Title, Year, imdbID, Type, Poster, history }) => {
  const classes = style();
  const handleSeeDetailClick = () => {
    history.push(`/movie/${imdbID}`);
  };
  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img src={Poster} alt={Title} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titleContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Year}</Typography>
          <Typography>{Type}</Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSeeDetailClick}
          >
            Ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default withRouter(MovieResult);
