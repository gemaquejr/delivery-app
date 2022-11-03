const userMock = {
  id: 1,
  name: "Delivery App Admin",
  email: "adm@deliveryapp.com",
  password: "a4c86edecc5aee06eff8fdeda69e0d04", //senha: md5('--adm2@21!!--')
  role: "administrator",
};

const userTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYmF0YXRpbmhhQGhvdG1haWwuY29tIiwiaWF0IjoxNjY3MjUyNDA2LCJleHAiOjE2Njc4NTcyMDZ9.ID3JdzGwqmin7j9m-5n_yP-MYmkbU96BE0-Ic-PHIBo";

const userLoginMock = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
};

const userLoginBadPassMock = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!-",
};

const unregisteredUserMock = {
  email: "falhou@deliveryapp.com",
  password: "vaiFalhar",
};

const createUserMockReturn = {
  dataValues: {
    id: 5,
    name: "Batatinha",
    email: "batatinha@hotmail.com",
    password: "f9104c649c25423a30e2968573899f48", //senha: md5(batatinha123)
    role: "customer",
  },
};

const createUserMock = {
  name: "Batatinha",
  email: "batatinha@hotmail.com",
  password: "f9104c649c25423a30e2968573899f48",
};

const productsListMock = [
  {
    id: 1,
    name: "Skol Lata 250ml",
    price: "2.20",
    urlImage: "http://localhost:3001/images/skol_lata_350ml.jpg",
  },
  {
    id: 2,
    name: "Heineken 600ml",
    price: "7.50",
    urlImage: "http://localhost:3001/images/heineken_600ml.jpg",
  },
  {
    id: 3,
    name: "Antarctica Pilsen 300ml",
    price: "2.49",
    urlImage: "http://localhost:3001/images/antarctica_pilsen_300ml.jpg",
  },
];

module.exports = {
  userLoginMock,
  userMock,
  userTokenMock,
  userLoginBadPassMock,
  unregisteredUserMock,
  createUserMockReturn,
  createUserMock,
  productsListMock,
};
