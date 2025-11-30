const router = require("express").Router();
const {
  userRegister,
  userLogin,
  getAllUsers,
  deleteTeamMember,
  createTeamMember,
  updateProfile,
} = require("../controllers/authuserControllers.js");
const auth = require("../middleware/auth.js");
const isAdmin = require("../middleware/isAdmin.js");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/all", auth, getAllUsers);
router.post("/", auth, isAdmin, createTeamMember);
router.delete("/:memberId", auth, isAdmin, deleteTeamMember);
router.put("/", updateProfile);
module.exports = router;
