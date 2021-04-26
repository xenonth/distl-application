//Component which will appear as the second box on the page describiing what DITL is about


import React from "react";


import { makeStyles } from '@material-ui/core/styles';

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
  aboutDITL: {
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

function About() {

    //call in styling and placing the styling in div wrapper.
    const classes = useStyles();
    return (
        <div className={classes.aboutDITL}>
            <p>
                We’re, a Digital Agency that offers the complete suite of digital services - Branding, Design, Development, Search Engine Optimisation and Digital Marketing.
            </p>
            <p>
                We create quality websites and apps. Our websites are bespoke front-ends, the digital faces of businesses. Our apps range from peer-to-peer sharing platforms, to business tools, to booking engines.
            </p>
        </div>
    );
  }
  
  export default About;









