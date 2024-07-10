// import BloodBank from "../models/blood-bank-model.js";

// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// const bloodBankRegister = async (req, res) => {
//   const {
//     BloodBankName,
//     ParentHospitalName,
//     password,
//     category,
//     firstRegistrationDate,
//     LicenseNo,
//     fromDate,
//     ToDate,
//     contactPerson,
//     contactPersonEmail,
//     contactNo,
//     state,
//     district,
//     city,
//     address,
//     pincode,
//     latitude,
//     longitude,
//   } = req.body;

//   try {
//     const existingUser = await BloodBank.findOne({ BloodBankName });
//     const BankAdminEmail = await BloodBank.findOne({ contactPersonEmail });
//     const BloodBankContact = await BloodBank.findOne({ contactNo });
//     if (existingUser) {
//       return res.status(400).json({ message: "bloodbank already exists" });
//     }
//     if (BankAdminEmail) {
//       return res.status(400).json({ message: "email already exist" });
//     }
//     if (BloodBankContact) {
//       return res.status(400).json({ message: "Mobile number already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newBloodBank = new BloodBank({
//       BloodBankName,
//       ParentHospitalName,
//       password: hashedPassword,
//       category,
//       firstRegistrationDate,
//       LicenseNo,
//       fromDate,
//       ToDate,
//       contactPerson,
//       contactPersonEmail,
//       contactNo,
//       state,
//       district,
//       city,
//       address,
//       pincode,
//       latitude,
//       longitude,
//     });
//     await newBloodBank.save();

//     res.status(201).json({ message: "BloodBank registerd successfully" });
//     console.log("BB registerd successfully");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "internal server error" });
//   }
// };

// const bloodBankLogin = async (req, res) => {
//   const { contactPersonEmail, password, contactNo } = req.body;
//   try {
//     const bloodBank = await BloodBank.findOne({ contactPersonEmail });
//     if (!bloodBank || !(await bcrypt.compare(password, bloodBank.password))) {
//       return res.status(401).json({ error: "Invalid email or password" });
//     }
//     if (bloodBank.contactNo !== contactNo) {
//       return res.status(401).json({ error: "Invalid contact number" });
//     }

//     // If authentication succeeds, you can generate a JWT token here if needed
//     // const token = jwt.sign({ bloodBankId: bloodBank._id }, secretKey, { expiresIn: "1h" });

//     res.status(200).json({ message: "Login Successful" });
//     console.log("Login Successful");
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

// const getNearbyBloodBanks = async (req, res) => {
//   const { latitude, longitude, radius } = req.query;
//   try {
//     const bloodBanks = await BloodBank.find({
//       location: {
//         $geoWithin: {
//           $centerSphere: [[longitude, latitude], radius / 3963.2], // radius in miles
//         },
//       },
//     });
//     res.status(200).json(bloodBanks);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// export { bloodBankRegister, bloodBankLogin, getNearbyBloodBanks };

import BloodBank from "../models/blood-bank-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const bloodBankRegister = async (req, res) => {
  const {
    BloodBankName,
    ParentHospitalName,
    password,
    category,
    firstRegistrationDate,
    LicenseNo,
    fromDate,
    ToDate,
    contactPerson,
    contactPersonEmail,
    contactNo,
    state,
    district,
    city,
    address,
    pincode,
    latitude,
    longitude,
  } = req.body;

  try {
    const existingUser = await BloodBank.findOne({ BloodBankName });
    const BankAdminEmail = await BloodBank.findOne({ contactPersonEmail });
    const BloodBankContact = await BloodBank.findOne({ contactNo });
    if (existingUser) {
      return res.status(400).json({ message: "Blood bank already exists" });
    }
    if (BankAdminEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (BloodBankContact) {
      return res.status(400).json({ message: "Mobile number already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newBloodBank = new BloodBank({
      BloodBankName,
      ParentHospitalName,
      password: hashedPassword,
      category,
      firstRegistrationDate,
      LicenseNo,
      fromDate,
      ToDate,
      contactPerson,
      contactPersonEmail,
      contactNo,
      state,
      district,
      city,
      address,
      pincode,
      latitude,
      longitude,
    });
    await newBloodBank.save();

    res.status(201).json({ message: "Blood bank registered successfully" });
    console.log("Blood bank registered successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const bloodBankLogin = async (req, res) => {
  const { contactPersonEmail, password, contactNo } = req.body;
  try {
    const bloodBank = await BloodBank.findOne({ contactPersonEmail });
    if (!bloodBank || !(await bcrypt.compare(password, bloodBank.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    if (bloodBank.contactNo !== contactNo) {
      return res.status(401).json({ error: "Invalid contact number" });
    }

    res.status(200).json({ message: "Login successful" });
    console.log("Login successful");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getNearbyBloodBanks = async (req, res) => {
  const { latitude, longitude, radius } = req.query;
  try {
    const bloodBanks = await BloodBank.find({
      location: {
        $geoWithin: {
          $centerSphere: [[longitude, latitude], radius / 3963.2], // radius in miles
        },
      },
    });
    res.status(200).json(bloodBanks);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getGovernmentBloodBanks = async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find({ category: "Government" });
    res.status(200).json(bloodBanks);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getPrivateBloodBanks = async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find({ category: "Private" });
    res.status(200).json(bloodBanks);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const getRedCrossBloodBanks = async (req, res) => {
  try {
    const bloodBanks = await BloodBank.find({ category: "Red Cross" });
    res.status(200).json(bloodBanks);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export {
  bloodBankRegister,
  bloodBankLogin,
  getNearbyBloodBanks,
  getGovernmentBloodBanks,
  getPrivateBloodBanks,
  getRedCrossBloodBanks,
};
