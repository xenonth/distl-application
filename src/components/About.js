import React from "react";

import { makeStyles } from '@material-ui/core/styles';

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    color: "#F1FAEE",
    background: "#E63946",
    '&:hover': {
        color: "#E63946",
        background: "#F1FAEE"
        },
    }
});

function About() {
    //call in styling and place appropriate classes where required
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <p>
                We’re , a Digital Agency that offers the complete suite of digital services - Branding, Design, Development, Search Engine Optimisation and Digital Marketing.
            </p>
            <p>
                We create quality websites and apps. Our websites are bespoke front-ends, the digital faces of businesses. Our apps range from peer-to-peer sharing platforms, to business tools, to booking engines.
            </p>
        </div>
    );
  }
  
  export default About;









