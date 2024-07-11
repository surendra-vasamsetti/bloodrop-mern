import requestUser from "../models/request-model.js";

// import dotenv from "dotenv";

// dotenv.config();

// const secretKey = process.env.SECRET_KEY;

const RequestUser = async (req, res) => {
  const {
    username,
    email,
    mobileNo,
    group,
    units,
    state,
    district,
    city,
    
  } = req.body;
  if (mobileNo.length !== 10) {
    return res.status(400).json({ message: "Mobile number must be 10 digits" });
  }
  try {
    const newRequestUser = new requestUser({
      username,
      email,
      mobileNo,
      group,
      units,
      state,
      district,
      city,
      certificates: "images/" + req.file.filename,
    });
    await newRequestUser.save();

    res.status(201).json({ message: "request send successfully" });
    console.log("request send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};

export { RequestUser };
