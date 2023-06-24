'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Todos',
      'UserId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{  //此欄位參考Users的id
          model: 'Users',
          key: 'id'
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Todos', 'UserId')
  }
};
