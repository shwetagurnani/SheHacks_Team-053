import React, { useState } from "react";

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

const Cervical = () => {
	const classes = useStyles();
	// States of PCOS Page
	const [age, setAge] = useState("");
	const [chin, setChin] = useState("");
	const [cheeks, setCheeks] = useState("");
	const [lips, setLips] = useState("");
	const [breast, setBreast] = useState("");
	const [arms, setArms] = useState("");
	const [thigh, setThigh] = useState("");
	const [exercise, setExercise] = useState("");
	const [eat, setEat] = useState("");
	const [pcos, setPcos] = useState("");
	const [bmi, setBmi] = useState("");
	const [check, setCheck] = useState(0);
	const [weight, setWeight] = useState("");
	const [period, setPeriod] = useState("");
	const [concieve, setConcieve] = useState("");
	const [skin, setSkin] = useState("");
	const [hairthin, setHairthin] = useState("");
	const [patch, setPatch] = useState("");
	const [tired, setTired] = useState("");
	const [mood, setMood] = useState("");
	const [can, setCan] = useState("");
	const [city, setCity] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();

		if (age - '0' > 21) {
			setCheck(1);
		} else {
			setCheck(2);
			console.log("shreya")
		}

		const sendingRequest = async () => {
			try {
				const response = await fetch(`http://ec2-18-222-138-32.us-east-2.compute.amazonaws.com:8000/api/cervical/`, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
						"Authorization": "Token 6cfe472c768bd06aa98e52a9bc41e41248eb4b92"
					},
					body: JSON.stringify({
						"age": 10.3, 
						"no_of_sexual_parteners": 3.3, 
						"age_of_first_intercourse": 5.2, 
						"no_of_pregnancies": 2.2, 
						"smokes": 0.5,
						"smokes_packs": 1.2, 
						"hormonal_contraceptives": 3.1, 
						"intra_uterine": 3.1, 
						"STDS": 3.1, 
						"any_std": 0.4, 
						"condylomatosis": 0.1, 
						"cervical_condylomatosis": 0.5, 
						"vaginal": 0.6, 
						"vulvo_perineal": 0.1, 
						"syphilis": 0.2, 
						"pelvic": 0.7, 
						"genital": 0.1, 
						"molluscum": 0.5, 
						"AIDS": 0.1, 
						"HIV": 0.7, 
						"hepatitis": 0.3, 
						"HPV": 0.1, 
						"diagnosis_std": 0.6, 
						"cancer": 0.2, 
						"neoplasis": 0.1, 
						"diagnosis_hpv": 0.4
					 })
				});
				const responseData = await response.json();
				if (!response.report) {
					console.log("error")
				}
				console.log(responseData);
			} catch (err) {
				console.log("Error");
			}
		};
		sendingRequest();
	}

	return (
		<>
			<div className={classes.heading}>Cervical Cancer Detection</div>
			<div className={classes.extra2}>
				<p className={classes.newHeading}>
					Cervical cancer is a type of cancer that occurs in the cells of the
					cervix — the lower part of the uterus that connects to the vagina. It
					isn't clear what causes cervical cancer, but it's certain that HPV
					plays a role. HPV is very common, and most people with the virus never
					develop cancer. This means other factors — such as your environment or
					your lifestyle choices — also determine whether you'll develop
					cervical cancer.
        </p>
			</div>

			<div className={classes.extra2}>
				<p className={classes.newHeading}>
					On the basis of these factors that you may answer about in our form
					below, we inform you whether you are at risk of cervical cancer or
					not.
        </p>
			</div>

			<div>
				<form className={classes.extra2}>
					<div>
						<div className={classes.form}>
							<h3 className={classes.text}>Select your age:</h3>
							<input
								required
								type="number"
								min="1"
								onChange={(e) => { setAge(e.target.value) }}
								className={classes.textField}
							/>
						</div>

						<div className={classes.form}>
							<h3 className={classes.text}>Number of sexual partners:</h3>
							<input
								required
								type="number"
								min="1"
								className={classes.textField}
							/>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Age of First sexual intercourse:</h3>
							<input
								required
								type="number"
								min="1"
								className={classes.textField}
							/>
						</div>

						<div className={classes.form}>
							<h3 className={classes.text}>Num of pregnancies:</h3>
							<input
								required
								type="number"
								min="1"
								className={classes.textField}
							/>
						</div>

						<div className={classes.form}>
							<h3 className={classes.text}>Smokes (years):</h3>
							<input
								required
								type="number"
								min="1"
								className={classes.textField}
							/>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Smokes (packs/year)</h3>
							<input
								required
								type="number"
								min="1"
								className={classes.textField}
							/>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								How many years have u been consuming Hormonal Contraceptives:
              </h3>
							<input
								required
								type="number"
								min="1"
								className={classes.textField}
							/>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								How many years have u had Intra uterine diseases :
              </h3>
							<input
								required
								type="number"
								min="0"
								className={classes.textField}
							/>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Number of STDs:</h3>
							<input
								required
								type="number"
								min="0"
								className={classes.textField}
							/>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Do you have any STDs:</h3>
							<input required type="radio" id="yes" name="pcos" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="pcos" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								Do u suffer from condylomatosis ?
              </h3>
							<input required type="radio" id="yes" name="bmi" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="bmi" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								Do u suffer from cervical condylomatosis ?:
              </h3>
							<input required type="radio" id="yes" name="weight" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="weight" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								Do u suffer from vaginal condylomatosis ? :
              </h3>
							<input required type="radio" id="yes" name="period" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="period" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								Do u suffer from vulvo-perineal condylomatosis ?:
              </h3>

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
							<h3 className={classes.text}>Do u suffer from syphilis ?:</h3>

							<input required type="radio" id="yes" name="skin" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="skin" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								Do u suffer from pelvic inflammatory disease ?:
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
								Do u suffer from genital herpes ?:
              </h3>

							<input required type="radio" id="yes" name="patch" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="patch" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								Do u suffer from molluscum contagiosum ?:
              </h3>

							<input required type="radio" id="yes" name="tired" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="tired" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Do u suffer from AIDS ?:</h3>

							<input required type="radio" id="yes" name="mood" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="mood" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Do u suffer from HIV ?:</h3>

							<input required type="radio" id="yes" name="can" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="can" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Do u suffer from Hepatitis B ? :</h3>

							<input required type="radio" id="yes" name="city" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="city" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Do u suffer from HPV ?:</h3>

							<input required type="radio" id="yes" name="mood" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="mood" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Number of diagnosis of std?:</h3>

							<input required type="radio" id="yes" name="mood" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="mood" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Had diagnosis of Cancer ?:</h3>

							<input required type="radio" id="yes" name="mood" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="mood" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>
								Had diagnosis of Cervical Intraepithelial neoplasia (CIN) ?:
              </h3>

							<input required type="radio" id="yes" name="mood" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="mood" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.form}>
							<h3 className={classes.text}>Had diagnosis of HPV ?:</h3>

							<input required type="radio" id="yes" name="mood" value="yes" />
							<label for="yes">Yes</label>
							<input required type="radio" id="no" name="mood" value="no" />
							<label for="no">No</label>
						</div>
						<div className={classes.extra2}>
							<input
								required
								type="submit"
								value="Predicted Possibility of Cervical cancer"
								className={classes.button}
								onClick={submitHandler}
							/>
						</div>
						<div className={classes.heading}>
							{check == 0 ? null : check == 1 ? <h1>Yes</h1> : <h1>No</h1>}
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Cervical;
