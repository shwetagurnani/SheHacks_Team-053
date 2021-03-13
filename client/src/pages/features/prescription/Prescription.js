import React from "react";
import {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Button";
import PrescriptionCard from "./PrescriptionCard";


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
    backgroundColor: "#eeb7ba",
    margin: "10px",
    width: 250,
    [theme.breakpoints.up("md")]: {},
  },
  Head: {
    backgroundColor: "#eeb7ba",
    flexGrow: 1,
    margin:"20px",
    padding: "20px",
   
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
  Head1: {
    // backgroundColor: "#eeb7ba",
    flexGrow: 1,
    margin:"20px",
    padding: "20px",
   
  },
  important1: {
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
    backgroundColor: "#eeb7ba",
  },
  extra1: {
    textAlign: "center",
    margin: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px rgba(0,0,0,0.19)",
    backgroundColor: "#eeb7ba",

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
    letterSpacing: ".1em",
    fontSize: "50px",
    marginTop: "50px",
    textAlign: "center",
   
  },

  subHeading: {
    fontFamily: "Akaya Telivigala, cursive",
    color: "black",
    fontSize: "15px",
    letterSpacing: ".05em",
    marginTop: "10px",
    backgroundColor: "#eeb7ba",
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
    height: 800,
    width: "400px",
    backgroundColor: "#eeb7ba",
  },
  text:{
    color:'black',
    
  }
}));

const Prescription = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([
    'ENT Specialist','Cardiac','Gynocolgists'
  ])
  const [currentCategory, setCurrentCategory]=useState([]);

  const [prescriptions, setPrescriptions] = useState([
    {
      DoctorName: "Doctor",
      Image: "./feature1.png",
    },
    {
      DoctorName: "Doctor",
      Image: "./feature1.png",
    },
    {
      DoctorName: "Doctor",
      Image: "./feature1.png",
    },
    {
      DoctorName: "Doctor",
      Image: "./feature1.png",
    },
    {
      DoctorName: "Doctor",
      Image: "./feature1.png",
    },

  ]);

  // const categories = ['A','B','C','D','E','F','G','H','I','J','K','L'];

  const setPrescriptionsHandler =(category)=>{
    setCurrentCategory(category);
  }


  const displayPrescriptionsHandler =prescription=>{
    return (
      <>
      <PrescriptionCard
      doctorName={prescription.DoctorName}
      image={prescription.Image}
     />
      </>
    );
  }
  const getcategory = category => {
    return (
      <>
      <Button
      name={category}
      clicked={()=>setPrescriptionsHandler(category)}/>
      </>
    );
  };

  return (
    <>
      
      <div className={classes.heading}>Categories</div>
      <div className={classes.Head}>
        <div className={classes.important}>
        {categories.map(category => getcategory(category))}

        </div>
      </div>
      <div className={classes.heading1}>
        {currentCategory}
      </div>
      <div className={classes.Head1}>
        <div className={classes.important1}>
        {prescriptions.map(prescription => displayPrescriptionsHandler(prescription))}

        </div>
      </div>
    </>
  );
};

export default Prescription;
