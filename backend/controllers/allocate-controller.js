import allocate from "../models/allocate-model.js";

const AllocateUser = async (req, res) => {
  const { fromBank, units, toBank, transferCity, status } = req.body;

  try {
    const newAllocateUser = new allocate({
      fromBank,
      units,
      toBank,
      transferCity,
      status,
    });
    await newAllocateUser.save();

    res.status(201).json({ message: "allocated successfully" });
    console.log("units allocated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "internal server error",
      error: error.message,
    });
  }
};

export { AllocateUser };
