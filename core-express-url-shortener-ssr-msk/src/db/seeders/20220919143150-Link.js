module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Links', [{
      url: 'https://www.youtube.com/playlist?list=PL8NGcSL3ZP-_OVaarWZPm5TX6xik2cnZm',
      code: 'YiveSKbQE',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Links', null, {});
  },
};
