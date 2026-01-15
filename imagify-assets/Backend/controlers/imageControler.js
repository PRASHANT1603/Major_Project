import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const userId = req.user.id; // 🔥 FIX
    const { prompt } = req.body;

    if (!prompt) {
      return res
        .status(400)
        .json({ success: false, message: "Prompt missing" });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (user.creditBalance <= 0) {
      return res.status(403).json({
        success: false,
        message: "Insufficient Credits",
        creditBalance: user.creditBalance,
      });
    }

    const formData = new FormData();
    formData.append("prompt", prompt);

    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          "x-api-key": process.env.CLIPDROP_API,
        },

        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");

    const resultImage = `data:image/png;base64,${base64Image}`;

    const updatedUser = await userModel.findOneAndUpdate(
      { _id: user._id, creditBalance: { $gt: 0 } },
      { $inc: { creditBalance: -1 } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(403).json({
        success: false,
        message: "Insufficient Credits",
      });
    }

    res.json({
      success: true,
      message: "Image Generated Successfully",
      creditBalance: updatedUser.creditBalance,
      resultImage,
    });
  } catch (error) {
    console.error("Image generation error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
