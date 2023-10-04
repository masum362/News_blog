import BlogModel from "../models/BlogSchema.js";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const Homepage = (req, res) => {};

export const addPost = async (req, res) => {
  const { title, content, tags, category } = req.body;

  try {
    const newPost = await new BlogModel({ title, content, tags, category });
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: "error adding post" });
  }
};

export const getPosts = async (req, res) => {

  try {
    const AllPost = await BlogModel.find({}).sort("-updatedAt");
    console.log(AllPost);


    return res.status(201).json(AllPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error adding post" });
  }
};

export const getSinglePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await BlogModel.find({ _id: id }).sort("-updatedAt");
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: "error adding post" });
  }
};

export const register = async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(403).json({ message: "user already registered" });
    } else {
      if (password !== cpassword) {
        return res.status(401).json({ message: "Password not matched" });
      } else {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const HashedCpassword = bcrypt.hashSync(cpassword, saltRounds);
        const newUser = await User({
          name,
          email,
          password: hashedPassword,
          cpassword: HashedCpassword,
        });
        await newUser.save();
        return res
          .status(200)
          .json({ message: "User Registered successfully", newUser });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const Login = async (req, res) => {
  console.log(req);
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUser = async (req, res) => {
  console.log("getuser called");
  const user = req.user;
  console.log({user})
  try {
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const SignOut = async (req, res) => {
  req.logout(req.user, err => {
    if(err) return  res.status(500).json(err);
    return res.status(200).json({message:'user is now signed out'})
  });
};
export const AuthFailed = async (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
};
