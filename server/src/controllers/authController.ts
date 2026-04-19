import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// This is for to generate the JWT token.
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "7d",
  });
};

const cookieOptions = {
  httpOnly: true,
  secure: true,               
  sameSite: "none" as const,  
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

// This is for the Registration for the Users.
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "Password must be at least 6 characters",
    });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
    });

    const token = generateToken(newUser._id.toString());
    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      message: "User registered",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};


// This is for Login for the Users.
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const existingUser = await User.findOne({ email: normalizedEmail });

    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(existingUser._id.toString());
    res.cookie("token", token, cookieOptions);

    res.json({
      message: "Login successful",
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

// This is for the Logout for the Users.
export const logoutUser = (req: Request, res: Response) => {
  res.cookie("token", "", {
    ...cookieOptions,
    expires: new Date(0),
  });

  res.json({ message: "Logged out successfully" });
};