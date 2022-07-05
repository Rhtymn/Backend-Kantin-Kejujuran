import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const CanteenBalance = db.define(
  "canteen",
  {
    balance: {
      type: DataTypes.DOUBLE,
    },
  },
  { freezeTableName: true }
);

export default CanteenBalance;
