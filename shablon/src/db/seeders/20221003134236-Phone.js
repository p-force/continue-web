/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Phones', [
      {
        company: 'Hello World',
        nums: '8(999) 555-55-55',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: 'Google',
        nums: '8(666) 666-53-05',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: 'Hello Kitty',
        nums: '8(888) 777-54-55',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: 'Winx',
        nums: '8(333) 888-56-50',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: 'Bratz',
        nums: '8(900) 999-58-20',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: 'Akatsuki',
        nums: '8(900) 999-58-20',
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Phones', null, {});
  },
};
