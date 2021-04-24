/* 
Header/Headline section will grab the user's attention as to what the page is about.
there will also be a feature throughout the 
*/

import React from "react";

//import makeStyles for alternate css styling

import { makeStyles } from '@material-ui/core/styles';

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
  headline: {
    textAlign: "center",
    color: "#F1FAEE",
    background: "#E63946",

    //when the background is tapped on mobile or on hover the text and background will swap their colors
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
            <div className={classes.headline}>
                <h1>Are You The Next Member of Distl?</h1>
            </div>
    );
  }
  
export default Header;