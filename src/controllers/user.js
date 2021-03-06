const db = require("../database/connection");
const { QueryTypes } = require("sequelize");


exports.addUsers = async (req, res) => {
    try {
      const { email, password, name, status } = req.body;
  
      const query = `INSERT INTO users (email,password,name,status) VALUES ('${email}','${password}','${name}','${status}')`;
  
      await db.sequelize.query(query);
  
      res.send({
        status: "success",
        message: "Add user finished",
        query,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
};

exports.getUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const data = await db.sequelize.query(query, { type: QueryTypes.SELECT });

    res.send({
      status: "success",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const data = await db.sequelize.query(
        `SELECT * FROM users WHERE id = ${id}`,
        { type: QueryTypes.SELECT }
      );
  
      res.send({
        status: "success",
        data,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
};

exports.updateUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const { email, password, name, status } = req.body;
  
      const query = `UPDATE users 
                        SET email = '${email}', password = '${password}', name = '${name}', status = '${status}'
                        WHERE id = ${id}`;
  
      await db.sequelize.query(query);
  
      res.send({
        status: "success",
        message: `Update user id: ${id} finished`,
        data: req.body,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
};

exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      const query = `DELETE FROM users WHERE id = ${id}`;
  
      await db.sequelize.query(query);
  
      res.send({
        status: "success",
        message: `Delete user id: ${id} finished`,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
};

const { user } = require('../../models')
exports.addUsers =  async (req, res) => {
  try {
    await user.create(req.body);

    res.send({
      message: 'Insert data user with ORM finished'
    });
  } catch (error){
    console.log(error);
    res.send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};
