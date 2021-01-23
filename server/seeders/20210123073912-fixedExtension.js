"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "fixeds",
      [
        {
          name: "bat",
          check: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cmd",
          check: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "com",
          check: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "cpa",
          check: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "exe",
          check: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "scr",
          check: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "js",
          check: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
