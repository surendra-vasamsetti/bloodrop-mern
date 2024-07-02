import User from "../models/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import _default from "concurrently";
// import dotenv from "dotenv";

// dotenv.config();

// const secretKey = process.env.SECRET_KEY;

const userRegister = async (req, res) => {
  const {
    username,
    email,
    password,
    age,
    gender,
    fathername,
    mothername,
    mobileNo,
    state,
    district,
    city,
    address,
    pincode,
  } = req.body;
  if (mobileNo.length !== 10) {
    return res.status(400).json({ message: "Mobile number must be 10 digits" });
  }
  try {
    const existingUser = await User.findOne({ username });
    const userEmail = await User.findOne({ email });
    const userMobile = await User.findOne({ mobileNo });
    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    if (userEmail) {
      return res.status(400).json({ message: "user already exist" });
    }
    if (userMobile) {
      return res.status(400).json({ message: "Mobile number already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,

      age,
      gender,
      fathername,
      mothername,
      mobileNo,
      state,
      district,
      city,
      address,
      pincode,
    });
    await newUser.save();

    res.status(201).json({ message: "user registerd successfilly" });
    console.log("registerd successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
};

const userLogin = async (req, res) => {
  const { email, password, mobileNo } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    if (user.mobileNo !== mobileNo) {
      return res.status(401).json({ error: "Invalid mobile number" });
    }

    //jwt token generation
    // const token = jwt.sign({ userId: user._id }, secretKey, {
    //   expiresIn: "1h",
    // });

    res.status(200).json({ message: "Login Successfull" });
    console.log("login successfull \n");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { userRegister, userLogin };
