import React from "react";
import {Link} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import BackgroundHeader from "./public/Bg1.png";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    // backgroundImage: 'url('+ BackgroundHeader+')',
    height: 400,

    // position: 'absolute',
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
    // backgroundImage: 'url('+ BackgroundHeader+')',
    height: 300,

    // position: 'absolute',
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundColor: "#eeb7ba",

    margin: "10px",
    width: 250,
    [theme.breakpoints.up("md")]: {},
  },
  Head: {
    // backgroundColor: "#eeb7ba",
    flexGrow: 1,
   
  },
  important: {
    // position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    flexWrap: "wrap",
    // backgroundColor: "#eeb7ba",
  },
  extra: {
    textAlign: "center",
    // backgroundColor: "#eeb7ba",
  },
  extra1: {
    textAlign: "center",
    margin: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19)",
    // backgroundColor: "#eeb7ba",

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
    // backgroundColor: "#eeb7ba",
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
    // backgroundColor: "#eeb7ba",
  },

  subHeading: {
    fontFamily: "Akaya Telivigala, cursive",
    color: "black",
    fontSize: "15px",
    letterSpacing: ".05em",
    marginTop: "10px",
    // backgroundColor: "#eeb7ba",
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
    height: 400,
    width: "400px",
    // backgroundColor: "#eeb7ba",
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.image}>
        {/* <img
          src="./feature.png"
          alt="lady"
          className={classes.BackgroundHead}
        ></img> */}
      </div>
      <div className={classes.heading}>Features</div>
      <div className={classes.Head}>
        <div className={classes.important}>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature1.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>Manage medical history</div>
              <div className={classes.subHeading}>
                We put together an array of dedicated and skilled experts to
                assist you out of every hurdle you make come across, in a
                diligent and efficient manner. We provide appointment booking
                facilities according to your location as well as video call
                consultation from experts across the globe.
              </div>
              <Link href="/prescription">
              <Button className={classes.button} variant="contained">
                Manage Now
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
              <div className={classes.heading1}>Consult Health Experts</div>
              <div className={classes.subHeading}>
                We put together an array of dedicated and skilled experts to
                assist you out of every hurdle you make come across, in a
                diligent and efficient manner. We provide appointment booking
                facilities according to your location as well as video call
                consultation from experts across the globe.
              </div>
              <Button className={classes.button} variant="contained">
                Consult Now
              </Button>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature3.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>Book Labs and Appointments</div>
              <div className={classes.subHeading}>
                We put together an array of dedicated and skilled experts to
                assist you out of every hurdle you make come across, in a
                diligent and efficient manner. We provide appointment booking
                facilities according to your location as well as video call
                consultation from experts across the globe.
              </div>
              <Button className={classes.button} variant="contained">
                Book Now
              </Button>
            </div>
          </div>
          <div className={classes.feature}>
            <div className={classes.extra1}>
              {/* <img
                src="./feature1.png"
                alt="lady"
                className={classes.BackgroundHead1}
              ></img> */}
              <div className={classes.heading1}>Menstrual Cycle Tracker</div>
              <div className={classes.subHeading}>
                We put together an array of dedicated and skilled experts to
                assist you out of every hurdle you make come across, in a
                diligent and efficient manner. We provide appointment booking
                facilities according to your location as well as video call
                consultation from experts across the globe.
              </div>
              <Button className={classes.button} variant="contained">
                Track Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
