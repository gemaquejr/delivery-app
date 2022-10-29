const sinon = require('sinon');

const testMyController = async (controller, request = {}) => {
  const result = {
    body: undefined,
    status: undefined,
  };

  const response = {
    status: (statusNum) => {
      result.status = statusNum;
      return response;
    },
    json: (obj) => {
      result.body = obj;
      return null;
    },
  };

  const spyJson = sinon.spy(response, 'json');
  const spyStatus = sinon.spy(response, 'status');
  

 
  await controller(request, response);
 
  return { ...result, spies: { json: spyJson, status: spyStatus } };
};

module.exports = testMyController;

//ref: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/140133e3-d28a-4e8c-8ed3-4ba478fabf71/recording/9fedba6d-4961-40ca-bc4b-f8da70f935c6