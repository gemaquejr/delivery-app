const userMock = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04', //senha: md5('--adm2@21!!--')
  role: 'administrator',
};

const userLoginMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--',
};

const userLoginBadPassMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!-',
};

const unregisteredUserMock = {
  email: 'falhou@deliveryapp.com',
  password: 'vaiFalhar',
};

const createUserMockReturn = {
  dataValues: {
    id: 5,
    name: 'Batatinha',
    email: 'batatinha@hotmail.com',
    password: 'f9104c649c25423a30e2968573899f48', //senha: md5(batatinha123)
    role: 'customer',
  }
};

const createUserMock = {
  name: 'Batatinha',
  email: 'batatinha@hotmail.com',
  password: 'f9104c649c25423a30e2968573899f48'
};


module.exports = {
  userLoginMock,
  userMock,
  userLoginBadPassMock,
  unregisteredUserMock,
  createUserMockReturn,
  createUserMock,
}