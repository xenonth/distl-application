import React from "react";

//import the alternate styling framework from Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  theTechnology: {
    textAlign: "center",
    fontSize: "16pt",
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
  makeBold: {
    fontWeight: "bold",
    paddingLeft: "3px",
    paddingRight: "3px"
  }
});

function Technology() {
  const classes = useStyles();

  return (
    <div className={classes.theTechnology}>
    {
    //refactored strong to fontWeight bold and applied with the makeBold class.  
    // Spaced out text to make it easier to see which text is being emboldened.
    }
      <p>
        Our technology is primarily built in 
        <span className={classes.makeBold}>
          React
        </span> (extending to 
        <span className={classes.makeBold}>
          React Nativ 
        </span>
        ). Where the projects involves a 
        <span className={classes.makeBold}>
          Content Management System (CMS) 
        </span>
        we use 
        <span className={classes.makeBold}>
          WordPress
        </span> 
        and 
        <span className={classes.makeBold}>
          WooCommerce.
        </span>
      </p>
    </div>
  );
}
  

 export default Technology;