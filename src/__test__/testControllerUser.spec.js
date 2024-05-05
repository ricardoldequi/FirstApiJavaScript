//describe - tests suites
//it or test - tests cases
//expect  - resultado
import * as userService from '../services/users.js';


jest.mock('../services/users.js');

describe("Controller", () => {

  // getUsers
  describe("GET /", () => {
    it("should get all users successfully", async () => {
      const users = [{ id: 1, nome: 'John' }, { id: 2, nome: 'Jane' }];
      
      userService.getUsers.mockResolvedValue(users);

      const request = {};
      const response = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await router.get(request, response);

      expect(userService.getUsers).toHaveBeenCalledTimes(1);
      expect(response.status).toHaveBeenCalledWith(200);
      expect(response.send).toHaveBeenCalledWith(users);
    });

    it("should handle error when getting all users", async () => {
      const error = new Error("Failed to get users");
      
      userService.getUsers.mockRejectedValue(error);

      const request = {};
      const response = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await router.get(request, response);

      expect(userService.getUsers).toHaveBeenCalledTimes(1);
      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.send).toHaveBeenCalledWith({ error: "Failed to get users" });
    });
  });


  // createUser
  describe("POST /", () => {
    it("should create a new user successfully", async () => {
      const newUser = { id: 3, nome: 'Alice' };
      const request = { body: { nome: 'Alice', email: 'alice@example.com', cpf: '12345678900', idade: 25, genero: 'Feminino', rg: '1234567', telefone: '987654321' } };
      const response = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      userService.createUser.mockResolvedValue(newUser);

      await router.post(request, response);

      expect(userService.createUser).toHaveBeenCalledTimes(1);
      expect(userService.createUser).toHaveBeenCalledWith(request.body);
      expect(response.status).toHaveBeenCalledWith(201);
      expect(response.send).toHaveBeenCalledWith(newUser);
    });

    it("should handle error when creating a new user", async () => {
      const error = new Error("Failed to create user");
      
      userService.createUser.mockRejectedValue(error);

      const request = { body: { nome: 'Alice', email: 'alice@example.com', cpf: '12345678900', idade: 25, genero: 'Feminino', rg: '1234567', telefone: '987654321' } };
      const response = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await router.post(request, response);

      expect(userService.createUser).toHaveBeenCalledTimes(1);
      expect(response.status).toHaveBeenCalledWith(500);
      expect(response.send).toHaveBeenCalledWith({ error: "Failed to create user" });
    });
  });

});
