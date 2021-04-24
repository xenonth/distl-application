import React from "react";

import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    color: "#F1FAEE",
    background: "#457B9D",
    '&:hover': {
        color: "#457B9D",
        background: "#F1FAEE"
    },
    margin: "1%", 
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
  },
});

function PowerfulIntro() {

    const classes = useStyles();

    return (
        <Grid container spacing={1}>
        
        <Grid lg={1} xs={12}></Grid>

        <Grid lg={10} md={10} xs={12}>
            <div className={classes.root}>
                <h3>
                    We’re looking to expand our outfit from four to five, in the form of an awesome developer!
                </h3>
            </div>
        </Grid>
        </Grid>
    );
  }
  
  export default PowerfulIntro;