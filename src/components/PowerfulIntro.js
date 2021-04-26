import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
  strongIntro: {
    textAlign: "center",
    color: "#F1FAEE",
    background: "#457B9D",

     //when the background is tapped on mobile or on hover the text and background will swap their colors
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
            <div className={classes.strongIntro}>
                <h2>
                    We’re looking to expand our outfit from four to five, in the form of an awesome developer!
                </h2>
            </div>
    );
  }
  
  export default PowerfulIntro;