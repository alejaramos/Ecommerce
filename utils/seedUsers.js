const seedUsers = [
  {
    firstName: 'Mati',
    lastName: 'Goni',
    profilePhoto: 'urlimage',
    admin: true,
    birthDay: 5 / 10 / 1992,
    email: 'mati@mail.com',
    password: 1234,
    salt: 'asd1234',
  },
  {
    firstName: 'Evita',
    lastName: 'Torres',
    profilePhoto: 'urlimage',
    admin: true,
    birthDay: 9 / 5 / 1987,
    email: 'evita@mail.com',
    password: 1234,
    salt: 'asd1234',
  },
  {
    firstName: 'Fabi',
    lastName: 'Lopez',
    profilePhoto: 'urlimage',
    admin: false,
    birthDay: 1 / 6 / 1988,
    email: 'fabi@mail.com',
    password: 1234,
    salt: 'asd1234',
  },
  {
    firstName: 'Kyra',
    lastName: 'Rey',
    profilePhoto: 'urlimage',
    admin: false,
    birthDay: 14 / 1 / 2003,
    email: 'kyra@mail.com',
    password: 1234,
    salt: 'asd1234',
  },
];

module.exports = seedUsers;
