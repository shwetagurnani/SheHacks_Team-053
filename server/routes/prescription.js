const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
let prescription = require("../models/Prescription");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/add").post(upload.single("photo"), (req, res) => {
  // const name = req.body.name;
  // const praise = req.body.praise;
  // const highFive = req.body.highFive;
  const photo = req.file.filename;

  const newPresData = {
    // name,
    // praise,
    // highFive,
    img: photo,
  };

  const newPres = new prescription(newPresData);

  newPres
    .save()
    .then(() => res.json("Prescription Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/display", (req, res) => {
  prescription.find({}, function (err, img) {
    if (err) res.send(err);
    console.log(img);
    res.contentType("json");
    res.send(img);
  });
});
