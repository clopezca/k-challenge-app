import axios from 'axios';
import { UserSessionService } from './userSessionService';
import { SessionAPI } from '../../insfrastructure/http/SessionAPI';

jest.mock("axios");

describe("userSession service", () => {
  let userSessionService;
  let sessionAPI;

  beforeEach(() => {
    sessionAPI = new SessionAPI();
    userSessionService = new UserSessionService(sessionAPI);
  })

  it("should receive a token with status 200", async () => {
    const data = {message: "token created correctly", status: 201};
    
    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    
    const result = await userSessionService.addSession("username");
    
    await expect(result.message).toEqual("token created correctly");
    await expect(result.status).toEqual(201);
  })

  it("should receive user information with status 201", async () => {
    const data = {status: 201};
    let username = "username";
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhYjJkMmUwNDgwNGU3YzgxNmE2YWRlIn0sImlhdCI6MTU4ODY4NjA4NSwiZXhwIjoxNTg4Njg5Njg1fQ.52x2bUKX9Je-4M4TXkZL-OfNOPHdwlfOdIO6km5YkZQ";

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    
    const result = await userSessionService.checkUserSession(username, token)
    await expect(result.status).toEqual(201);
  });

  it("should manage service unavailable error", async () => {
    axios.post.mockImplementationOnce(() => Promise.reject());

   await expect(userSessionService.addSession("username")).rejects.toThrow(Error("service unavailable"));
  });

});

