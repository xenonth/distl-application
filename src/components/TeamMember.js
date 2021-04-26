/*Team Member component */

import React from "react";

import { makeStyles } from "@material-ui/core/styles";

//Making Material UI stand out with the makestyles hook variant CSS Library
const useStyles = makeStyles({
  team: {
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
    fontSize: "16pt",
  },
  head: {
    textAlign: "center"
  },
});


function TeamMember() {
  const classes = useStyles();
    return (
        <div className={classes.team}>

        <h3 className={classes.head}>
          We’re looking for a team member that has:
        </h3>

        <ul>
          <li>
            An eagerness to learn, a passion for building on the web.
          </li>
          <li>
            Strong JavaScript skills, even better if these skill extend to React!
          </li>
          <li>
            Front-end nous. Confident with CSS3, familiar with SASS, and most importantly - an eye for style!
          </li>
          <li>
            (Bonus) Familiarity with PHP.
          </li>
          <li>
            (Bonus) Familiarity with Content Management Systems (For example, WordPress)
          </li>
          <li>
            (Bonus) Familiarity with noSQL databases (Firebase, MongoDB).
          </li>
        </ul>
      </div>
    );
  }
  
  export default TeamMember;