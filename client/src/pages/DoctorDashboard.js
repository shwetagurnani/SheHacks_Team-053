import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import DashboardCard from "../components/DoctorDashboardCard";
import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    // whiteSpace: "nowrap",
    // maxHeight: 650,
    // height: 618,
   
  },
  AppBar: {
    position: "sticky",
    backgroundColor: "#eeb7ba",
    color: "#fff",
    height: 62,
    
  },
  AppBarContent: {
    display: "flex",
    alignItems: "center",
    height: 55,
    minHeight: 55,
  },
  typo: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: "bolder",
    textTransform: "uppercase",
    color: "#d3454c",
    letterSpacing: ".1em",
    fontSize: "20px",
    marginTop: "10px",
    // backgroundColor: "#eeb7ba",
   
  },
  typoTotal: {
    marginLeft: 5,
    height: 20,
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#9999a8",
  },
  Button: {
    backgroundColor: "#d3454c",
    color: "#fff",
    margin: theme.spacing(3, 2),
    width: "300px",
    height: 50,

    [theme.breakpoints.up("md")]: {
      width: "350px",
    },
  },

  extra2: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Application = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [underApplication, setUnderApplication] = useState([]);
  const [acceptedApplication, setAcceptedApplication] = useState([]);
  const [rejectedApplication, setRejectedApplication] = useState([]);
  const [underSize, setUnderSize] = useState("");
  const [acceptSize, setAcceptSize] = useState("");
  const [rejectSize, setRejectSize] = useState("");

  useEffect(() => {
    const SendingRequest = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/doctor/getAllAppointment",
          {
            headers: {
              "x-access-token": localStorage.getItem("token"),
            },
            method: "GET",
          }
        );
        const responseData = await response.json();
        console.log(responseData.appointment);
        let temp1 = [];
        let temp2 = [];
        let temp3 = [];
        for (let i = 0; i < responseData.appointment.length; i++) {
          if (responseData.appointment[i].status === 0)
            temp1.push(responseData.appointment[i]);
          if (responseData.appointment[i].status === 1)
            temp2.push(responseData.appointment[i]);
          if (responseData.appointment[i].status === 2)
            temp3.push(responseData.appointment[i]);
        }
        setUnderApplication(temp1);
        setAcceptedApplication(temp2);
        setRejectedApplication(temp3);
        setUnderSize(temp1.length);
        setAcceptSize(temp2.length);
        setRejectSize(temp3.length);
      } catch (err) {
        console.log("hey error");
        console.log(err);
      }
    };
    SendingRequest();
  }, []);

  return (
    <div className={classes.root}>
      {/* <Toolbar /> */}
      {/* <Link to="/uploadPrescriptionDoctor">
        <Button>Write a Prescription</Button>
      </Link> */}

      <div className={classes.extra2}>
        <Button className={classes.Button} href="/uploadPrescriptionDoctor">
          Write A Prescription
        </Button>
        </div>
      <Grid container className={classes.main}>
        <Grid item xs={12} lg={4}>
          <React.Fragment>
            <CssBaseline />

            <ElevationScroll {...props}>
              <AppBar className={classes.AppBar}>
                <Toolbar className={classes.AppBarContent}>
                  <Typography variant="h6" className={classes.typo}>
                    Under Consideration
                  </Typography>
                  <Typography variant="h6" className={classes.typoTotal}>
                    {underSize}
                  </Typography>
                </Toolbar>
              </AppBar>
            </ElevationScroll>
            <Container>
              <Box my={2} overflow="auto">
                {underApplication.map((item) => {
                  return (
                    <DashboardCard underApplication={item} option={true} />
                  );
                })}
              </Box>
            </Container>
          </React.Fragment>
        </Grid>

        <Grid item xs={12} lg={4}>
          <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
              <AppBar className={classes.AppBar}>
                <Toolbar className={classes.AppBarContent}>
                  <Typography variant="h6" className={classes.typo}>
                    Accepted
                  </Typography>
                  <Typography variant="h6" className={classes.typoTotal}>
                    {acceptSize}
                  </Typography>
                </Toolbar>
              </AppBar>
            </ElevationScroll>
            <Container>
              <Box my={2} overflow="auto">
                {acceptedApplication.map((item) => {
                  return (
                    <DashboardCard underApplication={item} option={false} />
                  );
                })}
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
        <Grid item xs={12} lg={4}>
          <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
              <AppBar className={classes.AppBar}>
                <Toolbar className={classes.AppBarContent}>
                  <Typography variant="h6" className={classes.typo}>
                    Rejected
                  </Typography>
                  <Typography variant="h6" className={classes.typoTotal}>
                    {rejectSize}
                  </Typography>
                </Toolbar>
              </AppBar>
            </ElevationScroll>
            <Container>
              <Box my={2} overflow="auto">
                {rejectedApplication.map((item) => {
                  return (
                    <DashboardCard underApplication={item} option={false} />
                  );
                })}
              </Box>
            </Container>
          </React.Fragment>
        </Grid>
      </Grid>
    </div>
  );
};

export default Application;
