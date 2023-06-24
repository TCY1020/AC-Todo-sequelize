'use strict'
const bcrypt = require('bcryptjs')
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{  // queryInterface.bulkInsert 多筆資料寫入
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: bcrypt.hashSync(SEED_USER.password, bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
      .then(userId => queryInterface.bulkInsert('Todos',
        Array.from({ length: 10 }).map((_, i) =>
        ({
          name: `name-${i}`,
          UserId: userId,
          isDone: false,
          Due_Date: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        })
        ), {}))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {})  // queryInterface.bulkDelete 多筆資料刪除
      .then(() => queryInterface.bulkDelete('Users', null, {}))
  }
}