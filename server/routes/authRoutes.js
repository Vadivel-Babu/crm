const router = require("express").Router();
const {
  userRegister,
  userLogin,
  getAllUsers,
  deleteTeamMember,
  createTeamMember,
  updateProfile,
} = require("../controllers/authuserControllers");
//const validateUser = require("../middleware/userValidator");
router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/all", getAllUsers);
router.post("/", createTeamMember);
router.delete("/:memberId", deleteTeamMember);
router.put("/", updateProfile);
module.exports = router;
