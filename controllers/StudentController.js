import Student from "../models/StudentModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await Student.findAll();
    res.json(users);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getUserByStudentId = async (req, res) => {
  try {
    const user = await Student.findAll({
      where: { studentId: req.params.studentId },
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    await Student.create(req.body);
    res.json({ message: "User Created" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    await Student.update(req.body, {
      where: {
        studentId: req.params.studentId,
      },
    });
    res.json({ message: "User Updated" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await Student.destroy({
      where: {
        studentId: req.params.studentId,
      },
    });
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.json({ message: error.message });
  }
};
