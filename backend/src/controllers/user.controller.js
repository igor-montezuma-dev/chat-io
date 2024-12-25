// import cloudinary from "../lib/cloudinary.js";
// import User from "../models/user.model.js";

// export const updateProfile = async (req, res) => {
//   try {
//     const { profilePic } = req.body;
//     const userId = req.user._id;

//     if (!profilePic) {
//       return res.status(400).json({ message: "Profile picture is required" });
//     }

//     const uploadResponse = await cloudinary.uploader.upload(profilePic);

//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { profilePic: uploadResponse.secure_url },
//       { new: true }
//     );

//     res.status(200).json(updatedUser);
//   } catch (error) {
//     console.error("Error in updateProfile controller: ", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
