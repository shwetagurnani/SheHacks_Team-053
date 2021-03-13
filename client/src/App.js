import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import DoctorLogin from "./pages/DoctorLogin";
import DoctorSignup from "./pages/DoctorSignup";
import PatientLogin from "./pages/PatientLogin";
import PatientSignup from "./pages/PatientSignup";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import Logout from "./components/Logout";
import GetAppointment from "./pages/GetAppointment";
import Chat from './components/chat/homepage'

const App = () => {
 
  return (
    <>
     <Router>
     <Navbar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/doctorlogin" component={DoctorLogin} />
          <Route path="/doctorsignup" component={DoctorSignup} />
          <Route path="/patientsignup" component={PatientSignup} />
          <Route path="/patientlogin" component={PatientLogin} />
          <Route path="/doctordashboard" component={DoctorDashboard} />
          <Route path="/patientdashboard" component={PatientDashboard} />
          <Route path="/Logout" component={Logout} />
          <Route path="/getAppointment" component={GetAppointment} />
          {/* <Route exact path="/chat" component={Chat} /> */}
          
        </Switch>

      <Footer/>
     </Router>
      
    </>
  );
};

export default App;
