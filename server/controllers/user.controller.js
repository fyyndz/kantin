const { db } = require("../config/prismaClient");
const md5 = require("md5");

async function getAllUser(req, res) {
  try {
    const users = await db.user.findMany();
    res.json({
      success: true,
      data: users,
      message: "All users have been loaded",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function findUser(req, res) {
  try {
    const keyword = req.params.key;
    const users = await db.user.findMany({
      where: {
        OR: [
          { userID: { contains: keyword } },
          { firstname: { contains: keyword } },
          { lastname: { contains: keyword } },
          { email: { contains: keyword } },
          { role: { contains: keyword } },
        ],
      },
    });

    res.json({
      success: true,
      data: users,
      message: "Filtered users have been loaded",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function addUser(req, res) {
  try {
    const newUser = await db.user.create({
      data: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
      },
    });

    res.json({
      success: true,
      data: newUser,
      message: "New user has been inserted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const userID = parseInt(req.params.id);
    const updateData = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      role: req.body.role,
    };

    if (req.body.password) {
      updateData.password = md5(req.body.password);
    }

    const updatedUser = await db.user.update({
      where: { userID },
      data: updateData,
    });

    res.json({
      success: true,
      data: updatedUser,
      message: "User has been updated",
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const userID = parseInt(req.params.id);

    await db.user.delete({
      where: { userID },
    });

    res.json({
      success: true,
      message: "User has been deleted",
    });
  } catch (error) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = { getAllUser, findUser, addUser, updateUser, deleteUser };

