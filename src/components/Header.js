import React from "react";

//Material UI styling
import AppBar from "@material-ui/core/AppBar"
import { makeStyles } from '@material-ui/core/styles';

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
  headline: {
    textAlign: "center",
    color: "#F1FAEE",
    background: "#E63946",
    height: '100%',
    width: '100%',
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