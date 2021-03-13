import React from "react";

import { makeStyles } from "@material-ui/core/styles";
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
    margin: "0px",
    padding: "0px",
    [theme.breakpoints.up("md")]: {
      margin: "0px 50px",
      padding: "10px",
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
    margin: "20px",
    float: "center",
    fontWeight: "normal",
    boxShadow: "20px",
    marginTop: "10px",
    fontSize: "15px",
    fontFamily: "Jost, sans-serif",
    width: "300px",
    height: "50px",
    [theme.breakpoints.up("md")]: {
      marginTop: "15px",
      width: "400px",
      height: "50px",
    },
  },

  feature: {},

  form: {
    fontFamily: "Jost, sans-serif",

    alignItems: "center",

    backgroundColor: "#faeaeb",
    borderLeft: "8px solid #dd6e76",
    width: "auto",
    margin: "20px",
    padding: "15px",
    [theme.breakpoints.up("md")]: {
      width: "800px",
    },
    // justifyIt
  },
  extra2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#d3454c",
    margin: "4px 0px",
  },
  textField: {
    width: "200px",
    height: "22px",
  },
  newHeading: {
    fontFamily: "Jost, sans-serif",
    textAlign: "center",
    // maxWidth: "950px",
    [theme.breakpoints.up("md")]: {
      maxWidth: "950px",
    },
  },
}));

const Pcos = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.heading}>PCOS Detection</div>
      <div className={classes.extra2}>
        <p className={classes.newHeading}>
          PCOS or Polycystic Ovarian Syndrome is a hormonal disorder causing
          enlarged ovaries with small cysts on the outer edges. The cause of
          polycystic ovary syndrome isn't well understood, but may involve a
          combination of genetic and environmental factors.
        </p>
      </div>

      <div className={classes.extra2}>
        <p className={classes.newHeading}>
          Fill the information below and leave it to our machine learning model
          to tell you whether you're at risk of PCOS or not.
        </p>
      </div>

      <div>
        <form className={classes.extra2}>
          <div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Select your age at which you had PCOS:
              </h3>
              <input
                required
                type="number"
                min="0"
                
                className={classes.textField}
              />
            </div>

            <div className={classes.form}>
              <h3 className={classes.text}>
                Chin Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Cheeks Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                className={classes.textField}
              />
            </div>

            <div className={classes.form}>
              <h3 className={classes.text}>
                Upper Lips Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                className={classes.textField}
              />
            </div>

            <div className={classes.form}>
              <h3 className={classes.text}>
                Between breast Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Arms Hair growth(Rate from 1-low to 5-high)
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Inner thighs Hair growth(Rate from 1-low to 5-high):
              </h3>
              <input
                required
                type="number"
                min="1"
                max="5"
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                How many days in a week did you exercise ?:
              </h3>
              <input
                required
                type="number"
                min="0"
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                How many times a week did you eat outside ?:
              </h3>
              <input
                required
                type="number"
                min="0"
                className={classes.textField}
              />
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>Have you been diagnozed with PCOS before?:</h3>
              <input required type="radio" id="yes" name="pcos" value="yes" />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="pcos" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Were you overweight according to your BMI (Body Mass Index) ?
              </h3>
              <input required type="radio" id="yes" name="bmi" value="yes" />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="bmi" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Have you experienced significant or rapid weight gain and faced
                difficulty in losing it ?:
              </h3>
              <input required type="radio" id="yes" name="weight" value="yes" />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="weight" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Have you experienced irregular or missed periods ? :
              </h3>
              <input required type="radio" id="yes" name="period" value="yes" />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="period" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>Difficulty in conceiving ?:</h3>

              <input
                required
                type="radio"
                id="yes"
                name="concieve"
                value="yes"
              />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="concieve" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>Acne or skin tags problem ?:</h3>

              <input required type="radio" id="yes" name="skin" value="yes" />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="skin" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Hair thinning or hair loss problems ?:
              </h3>

              <input
                required
                type="radio"
                id="yes"
                name="hairthin"
                value="yes"
              />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="hairthin" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Dark patches on the back of your neck or underarms ?:
              </h3>

              <input required type="radio" id="yes" name="patch" value="yes" />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="patch" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Feeling of tiredness all the time ?:
              </h3>

              <input required type="radio" id="yes" name="tired" value="yes" />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="tired" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Mood Swings more often than usual ?:
              </h3>

              <input required type="radio" id="yes" name="mood" value="yes" />
              <label for="yes">Yes</label>
              <input required type="radio" id="no" name="mood" value="no" />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Did you consume canned food more often ?:
              </h3>

              <input required type="radio" id="yes" name="can" value="yes" />
              <label for="yes">Yes</label>
              <input
                required
                type="radio"
                id="no"
                name="can"
                value="no"
               
              />
              <label for="no">No</label>
            </div>
            <div className={classes.form}>
              <h3 className={classes.text}>
                Did you move to a different city/location before experiencing
                the above conditions ?:
              </h3>

              <input
                required
                type="radio"
                id="yes"
                name="city"
                value="yes"
               
              />
              <label for="yes">Yes</label>
              <input
                required
                type="radio"
                id="no"
                name="city"
                value="no"
                
              />
              <label for="no">No</label>
            </div>
            <div className={classes.extra2}>
              <input
                required
                type="submit"
                value="Predict PCOS Possibility"
                className={classes.button}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Pcos;
