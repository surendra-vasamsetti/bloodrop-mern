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
    certificates,
  } = req.body;
  if (mobileNo.length !== 10) {
    return res.status(400).json({ message: "Mobile number must be 10 digits" });
  }
  try {
    // const existingUser = await User.findOne({ username });
    // const userEmail = await User.findOne({ email });
    // const userMobile = await User.findOne({ mobileNo });
    // if (existingUser) {
    //   return res.status(400).json({ message: "user already exists" });
    // }
    // if (userEmail) {
    //   return res.status(400).json({ message: "user already exist" });
    // }
    // if (userMobile) {
    //   return res.status(400).json({ message: "Mobile number already exists" });
    // }

    const newRequestUser = new requestUser({
      username,
      email,
      mobileNo,
      group,
      units,
      state,
      district,
      city,
      certificates,
    });
    await newRequestUser.save();

    res.status(201).json({ message: "request send successfully" });
    console.log("request send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success:false,
      message:"internal server error",
      error:error.message

    });
  }
};

export { RequestUser };
