import React, { useState } from "react";
import axios from "axios";

const NewPrescription = () => {
  const [newPres, setNewPres] = useState({
    // name: "",
    // praise: "",
    // highFive: "",
    img: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", newPres.img);
    // formData.append("praise", newUser.praise);
    // formData.append("highFive", newUser.highFive);
    // formData.append("name", newUser.name);
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

  //   const handleChange = (e) => {
  //     setNewAuthor({ ...newUser, [e.target.name]: e.target.value });
  //   };

  const handlePhoto = (e) => {
    setNewPres({ ...newPres, img: e.target.files[0] });
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

      {/* <input
        type="text"
        placeholder="name"
        name="name"
        value={newUser.name}
        onChange={handleChange}
      />

      <input
        type="Number"
        name="praise"
        value={newUser.praise}
        onChange={handleChange}
      />

      <input
        type="Number"
        name="highFive"
        value={newUser.highFive}
        onChange={handleChange}
      /> */}


      <input type="submit" />
    </form>
  );
};

export default NewPrescription;
