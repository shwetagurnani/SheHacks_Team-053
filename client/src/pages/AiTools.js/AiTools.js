import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link} from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import BackgroundHeader from "./public/Bg1.png";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "10px",
    width: "auto",
    [theme.breakpoints.up("md")]: {
      height: 550,
      width: 600,
    },
  },

  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },

  BackgroundHead1: {
    
    height: 300,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "10px",
    width: 250,
    [theme.breakpoints.up("md")]: {},
  },
  Head: {
    
    flexGrow: 1,
    margin:"0px",
    padding: "0px",
    [theme.breakpoints.up("md")]: {
      margin:"0px 50px",
      padding: "10px"
    },
  },
  important: {
   
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    flexWrap: "wrap",
   
  },
  extra: {
    textAlign: "center",
    
  },
  extra1: {
    textAlign: "center",
    margin: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19)",
    
  },
  heading: {
    fontFamily: "Lobster, cursive",
    color: "#d3454c",
    fontSize: "20px",
    letterSpacing: ".05em",
    // textShadow: "2px 2px 8px #404040",
    textAlign: "center",
    margin: "10px",
    padding: "10px",
    
    [theme.breakpoints.up("md")]: {
      fontSize: "80px",
    },
  },
  heading1: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: "bolder",
    textTransform: "uppercase",
    color: "#d3454c",
    letterSpacing: ".25em",
    fontSize: "25px",
    marginTop: "10px",
    
  },

  subHeading: {
    fontFamily: "Akaya Telivigala, cursive",
    color: "black",
    fontSize: "15px",
    letterSpacing: ".05em",
    marginTop: "10px",
    
    [theme.breakpoints.up("md")]: {
      fontSize: "20px",
      marginTop: "20px",
    },
  },
  button: {
    backgroundColor: "#d3454c",
    padding: theme.spacing(1, 2),
    textTransform: "none",
    color: "white",
    fontWeight: "normal",
    boxShadow: "20px",
    marginTop: "10px",
    fontSize: "15px",
    [theme.breakpoints.up("md")]: {
      marginTop: "15px",
    },
  },

  feature: {
    padding: "10px",
    margin: "10px",
    // backgroundColor: "white",
    boxShadow: "20px",
    // height: 800,
    width: "400px",
    
  },
}));

const AiTools = () => {
  const classes = useStyles();

  return (
    <>
      {/* <div className={classes.image}> */}
        {/* <img
          src="./feature.png"
          alt="lady"
          className={classes.BackgroundHead}
        ></img> */}
      {/* </div> */}
      <div className={classes.heading}>AI Tools</div>
      <div className={classes.Head}>
        <div className={classes.important}>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature1.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>Breasts Cancer Detection</div>
              <div className={classes.subHeading}>
                We put together an array of dedicated and skilled
                experts to assist you out of every hurdle you make come across,
                in a diligent and efficient manner. We provide appointment
                booking facilities according to your location as well as video
                call consultation from experts across the globe.
              </div>
              <Link href="/breastcancer">
              <Button className={classes.button} variant="contained">
                Detect Now
              </Button>
              </Link>
              
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature2.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>Cervical Cancer Detection</div>
              <div className={classes.subHeading}>
                We put together an array of dedicated and skilled experts to
                assist you out of every hurdle you make come across, in a
                diligent and efficient manner. We provide appointment booking
                facilities according to your location as well as video call
                consultation from experts across the globe.
              </div>
              <Link href="/cervical">
              <Button className={classes.button} variant="contained">
                Detect Now
              </Button>
              </Link>
              
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature3.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>PCOS Detection</div>
              <div className={classes.subHeading}>
                We put together an array of dedicated and skilled experts to
                assist you out of every hurdle you make come across, in a
                diligent and efficient manner. We provide appointment booking
                facilities according to your location as well as video call
                consultation from experts across the globe.
              </div>
              <Link href="/pcos">
              <Button className={classes.button} variant="contained">
                Detect Now
              </Button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default AiTools;