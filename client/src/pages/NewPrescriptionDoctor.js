import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewPrescription = () => {
  const [newPres, setNewPres] = useState({
    img: "",
    name: "",
    spec: "",
    show: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", newPres.img);
    formData.append("name", newPres.name);
    formData.append("spec", newPres.spec);
    // formData.append("show", newPres.show);
    console.log(formData);
    axios
      .post("http://localhost:3000/doctor/add/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePhoto = (e) => {
    setNewPres({ ...newPres, img: e.target.files[0] });
  };

  const handleChange = (e) => {
    setNewPres({ ...newPres, [e.target.name]: e.target.value });
  };

  return (
    //   <div>Hii</div>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="photo"
        onChange={handlePhoto}
      />

      <input
        type="text"
        placeholder="name"
        name="name"
        value={newPres.name}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="specialization"
        name="spec"
        value={newPres.spec}
        onChange={handleChange}
      />

      {/* <input
        required
        type="radio"
        id="yes"
        name="show"
        value="yes"
        onChange={handleChange}
      />
      <label for="yes">Yes</label>
      <input
        required
        type="radio"
        id="no"
        name="show"
        value="no"
        onChange={handleChange}
      />
      <label for="no">No</label> */}
      <input type="submit" />
    </form>
  );
};

export default NewPrescription;
