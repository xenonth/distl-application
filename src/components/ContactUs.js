/*This component will be placed at the bottom of the MainPage.js file in pages.

refactored strong to makeBold class inside a span tag
*/

import React from "react";

import { makeStyles } from '@material-ui/core/styles';

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
    contact: {
        textAlign: "center",
        fontSize: "16pt",
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
    head: {
      textAlign: "center"
    },
    makeBold: {
        fontWeight: "bold",
        paddingLeft: "3px",
        paddingRight: "3px"
    }
});

function ContactUs() {
    const classes = useStyles();

    return (
    <div className={classes.contact}>
        <p>
            If this sounds like the right place for you, 
            <span className={classes.makeBold}>
                Fork
            </span> 
            this Pen and style it up!
        </p>
        <p class="the-challenge-more">
            No rules - complete creative agency. Maybe you'll give it slick corporate vibes, edgy hipster grunge, or out of this world science fiction grandeur.
            </p>
        <p>
            Once you're happy with your Pen, send it in an e-mail, along with your CV, portfolio, CodePen, GitHub to <a href="mailto:david@distl.com.au">david@distl.com.au</a>
        </p>
  </div>
    )
}
export default ContactUs