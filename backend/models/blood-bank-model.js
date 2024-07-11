import mongoose from "mongoose";

const bloodbankSchema = new mongoose.Schema(
  {
    BloodBankName: {
      type: String,
      required: true,
      unique: true,
    },
    ParentHospitalName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Government", "Private", "Red Cross"],
    },
    firstRegistrationDate: {
      type: Number,
      required: true,
    },
    LicenseNo: {
      type: String,
      required: true,
    },
    fromDate: {
      type: Number,
      required: true,
    },
    ToDate: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
      unique: true,
    },
    contactPersonEmail: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    certificates: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BloodBank = mongoose.model("BloodBank", bloodbankSchema);

export default BloodBank;
