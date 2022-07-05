import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Student = db.define(
  "student",
  {
    studentId: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { freezeTableName: true }
);

export default Student;
