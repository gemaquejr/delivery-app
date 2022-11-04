const salesMock = {
  "userId": 3,
	"sellerId": 2,
	"totalPrice": 28.46,
	"deliveryAddress": "Travessa da Rua",
	"deliveryNumber": "198",
	"productsList": [
		{
			"productId": 3,
			"quantity": 5
		},
		{
			"productId": 1,
			"quantity": 9
		}
	] 
};


const salesReturnMock = {
  dataValues: {
    id: 1,
    userId: 3,
	  sellerId: 2,
	  "totalPrice": 28.46,
	  "deliveryAddress": "Travessa da Rua",
	  "deliveryNumber": "198",
	  "productsList": [
		  {
			  "productId": 3,
			  "quantity": 5
		  },
		  {
			  "productId": 1,
			  "quantity": 9
		  }
	  ],
  },
};

const salesProductWithId1 = {
  "saleId": 1,
	"productId": 3,
	"quantity": 5
};

const salesProductWithId2 = {
  "saleId": 1,
  "productId": 1,
	"quantity": 9
};

module.exports = {
  salesMock,
  salesReturnMock,
  salesProductWithId1,
  salesProductWithId2,
}