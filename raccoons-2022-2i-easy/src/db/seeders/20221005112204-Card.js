module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      name: 'Иван Иванов',
      phone: '12345',
      email: '123@mail.ru',
      isEmployee: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
    },
    {
      name: 'Андрей Смирнов',
      phone: '12323232',
      email: 'qwer@mail.ru',
      isEmployee: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
    },
    {
      name: 'Алексей Волков',
      phone: '0987654',
      email: 'zxc@mail.ru',
      isEmployee: true,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
