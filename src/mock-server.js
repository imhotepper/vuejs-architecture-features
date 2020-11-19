
import axios from 'axios'


export {createMockServer};

  function createMockServer(){//axios){


  var MockAdapter = require("axios-mock-adapter");

  // This sets the mock adapter on the default instance
  var mock = new MockAdapter(axios);
  
  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  mock.onGet("/api/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });
  


  mock.onPost("/api/users").reply(201);

}

