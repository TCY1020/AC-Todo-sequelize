'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      `Todos`,   // 被修改資料表名稱
      `Due_Date`,// 新增的欄位
      {          // 資料型別與其他設定
        type:Sequelize.DATE,
        allowNull: true
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(`Todos`, `Due_Date`)
  }
};
