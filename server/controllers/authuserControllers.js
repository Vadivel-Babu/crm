const AuthUser = require("../models/authModel.js");
const bcrypt = require("bcrypt");
const Ticket = require("../models/ticketModel.js");
const getToken = require("../utils/generateToken.js");

//handle registeration
async function userRegister(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    const user = await AuthUser.findOne({ firstname, email });
    if (user) {
      return res.status(409).json({
        status: false,
        message: "User already exsist",
      });
    }

    if (!user) {
      const hashpassword = await bcrypt.hash(password, 10);
      const users = await AuthUser.find();
      if (users.length === 0) {
        const newUser = new AuthUser({
          firstname,
          lastname,
          email,
          password: hashpassword,
          role: "admin",
        });
        await newUser.save();
        return res.status(201).json({
          status: true,
          message: "sigin succesfully",
        });
      }
      const newUser = new AuthUser({
        firstname,
        lastname,
        email,
        password: hashpassword,
        role: "member",
      });
      await newUser.save();
      return res.status(201).json({
        status: true,
        message: "sigin succesfully",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "An internal server error occurred.",
    });
  }
}

//login handler
async function userLogin(req, res) {
  try {
    const { name, password } = req.body;

    const user = await AuthUser.findOne({ firstname: name });
    console.log(user);

    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User not exisist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ status: false, message: "Incorrect Password" });
    }

    const token = getToken(user._id);

    return res.status(201).json({
      status: true,
      message: "login successsfully",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "An internal server error occurred.",
    });
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await AuthUser.find();

    res.status(200).json({
      message: "all users fetched",
      data: users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: "An internal server error occurred.",
    });
  }
};

const deleteTeamMember = async (req, res) => {
  try {
    const memberId = req.params.id;

    // Check if the user exists
    const member = await AuthUser.findById(memberId);
    if (!member) {
      return res
        .status(404)
        .json({ success: false, message: "Member not found" });
    }

    if (member.role === "admin") {
      return res.status(400).json({
        success: false,
        message: "You cannot delete an admin using this route",
      });
    }

    // Find an admin to assign the tickets to
    const adminUser = await AuthUser.findOne({ role: "admin" });

    if (!adminUser) {
      return res.status(500).json({
        success: false,
        message: "No admin found to reassign tickets",
      });
    }

    // Reassign tickets
    await Ticket.updateMany(
      { assignedTo: memberId },
      { $set: { assignedTo: adminUser._id } }
    );

    // Delete the member
    await AuthUser.findByIdAndDelete(memberId);

    return res.json({
      success: true,
      message: "Team member deleted and tickets reassigned to admin",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete team member",
    });
  }
};

const createTeamMember = async (req, res) => {
  try {
    const { name, email } = req.body;

    // 1️⃣ Check if email already exists
    const existingUser = await AuthUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // 2️⃣ Set password = email
    const password = email;

    // 3️⃣ Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4️⃣ Create team member
    const newMember = await AuthUser.create({
      name,
      email,
      password: hashedPassword,
      role: "member", // explicitly set role
    });

    return res.status(201).json({
      success: true,
      message: "Team member created successfully",
      data: {
        id: newMember._id,
        name: newMember.name,
        email: newMember.email,
        role: newMember.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to create team member",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id; // set by authMiddleware
    const { name, password } = req.body;

    const updateData = {};
    let forceLogout = false;

    if (name) updateData.name = name;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateData.password = hashedPassword;

      // Set passwordChangedAt timestamp → triggers forced logout
      updateData.passwordChangedAt = Date.now();
      forceLogout = true;
    }

    const updatedUser = await AuthUser.findByIdAndUpdate(
      userId,
      { $set: updateData },
      { new: true }
    ).select("-password"); // exclude password

    let message = "Profile updated successfully.";
    if (forceLogout) {
      message += " Please login again due to password change.";
    }

    res.json({
      success: true,
      message,
      forceLogout,
      data: updatedUser,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to update profile" });
  }
};

module.exports = {
  userRegister,
  userLogin,
  getAllUsers,
  deleteTeamMember,
  createTeamMember,
  updateProfile,
};
