import { Sequelize } from "sequelize";
const db = new Sequelize("kantin_kejujuran_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true,
  },
  timezone: "+07:00",
});

export default db;
