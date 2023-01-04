/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'Naruto',
        pass: 'Saskeeeeeeeeee',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Saitama',
        pass: 'iAmJustDoingFeats.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Sakata Gintoki',
        pass: 'RUN!!!',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Saske',
        pass: 'Narutoooooooo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'Deidara',
        pass: 'art is an explosion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
