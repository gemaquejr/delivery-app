const userMock = {
  id: 1,
  name: 'Delivery App Admin',
  email: 'adm@deliveryapp.com',
  password: 'a4c86edecc5aee06eff8fdeda69e0d04', //senha: md5('--adm2@21!!--')
  role: 'administrator',
}

const userLoginMock = {
  email: 'adm@deliveryapp.com',
  password: '--adm2@21!!--',
}

export {
  userMock,
  userLoginMock,
}