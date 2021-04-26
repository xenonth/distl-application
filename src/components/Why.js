/*Why section about Distl, Did think about creating a for loop for auto listing however this would require signicant change.
Which would include creation of an array an additional sub component and having a data content approach and was decided to keep the format simple be leaving
the provided text inside the html as is and only manipulate the css JS and some html elements as needed.

*/ 

import React from "react";

import { makeStyles } from '@material-ui/core/styles';

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
    whyDISTL: {
      color: "#F1FAEE",
      fontSize: "16pt",
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
});

function Why() {
  const classes = useStyles();
    return (
        <div className={classes.whyDISTL}>
        <h4 className={classes.head}>
          Distl is an ideal place to cultivate your craft as a web developer.
          </h4>
        <ul>
          <li>
            You’ll be supported by a close-knit team of developers, and directly reporting to Distl’s technical lead.
          </li>
          <li>
            You’ll work autonomously, both independently and collaboratively on projects creating websites and applications from scratch.
          </li>
          <li>
            Projects constantly vary with lifecycles as short as four weeks, keeping your work fresh and challenging.
          </li>
          <li>
            We'll gear you up with your very own Macbook Pro!
          </li>
        </ul>
      </div>
    );
  }
  
  export default Why;