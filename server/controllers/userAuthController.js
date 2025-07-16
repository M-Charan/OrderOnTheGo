import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const registerUser = async (req, res) => {
  try {
    const { userName, password, email } = req.body;

    const existingUser = await User.findOne({ email, userType: "user" });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userName,
      password: hashedPassword,
      email,
      userType: "user"
    });

    await newUser.save();

    return res.status(201).json({
      message: "User Registered Successfully",
      user: {
        _id: newUser._id,
        userName: newUser.userName,
        email: newUser.email
      }
    });

  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, userType: "user" });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    return res.status(200).json({
      message: "Login Successful",
      user: {
        _id: user._id,
        userName: user.userName,
        email: user.email
      }
    });

  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

export { registerUser, loginUser };
