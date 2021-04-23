import React from "react";

//Material UI styling
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles';

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
  headline: {
    textAlign: "center",
    color: "#F1FAEE",
    background: "#E63946",
    '&:hover': {
        color: "#E63946",
        background: "#F1FAEE"
    },
    margin: "1%", 
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
  },

});


function Header() {
    //calling usestyles object function as a hook to import directly into the html
    const classes = useStyles();
    
    return (
        <Grid container spacing ={1}>
            <Grid lg={1} ></Grid>

            <Grid lg={10} md={10} xs={12}>
            <div className={classes.headline}>
                <h1>Are You The Next Member of Distl?</h1>
            </div>
            </Grid>

        </Grid>
    );
  }
  
  export default Header;