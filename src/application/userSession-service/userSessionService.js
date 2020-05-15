require('dotenv').config();

const SESSION_API_URL = process.env.REACT_APP_SESSION_API_URL;

export class UserSessionService {
  constructor (sessionAPI) {
    this.sessionAPI = sessionAPI;
  }

  async addSession(username) {

    try{
      const data = {
        username 
      }
      return await this.sessionAPI.post(`${SESSION_API_URL}/session`, data)
    }catch(error) {
      //if (error.response.status === 503) throw Error("service unavailable");
      console.log(error)
    }
  }

  async checkUserSession(username, token) {

    try {
      return await this.sessionAPI.get(`${SESSION_API_URL}/info/${username}/${token}`)
    } catch (error) {
      console.log(error)
      if (error.response.status === 503) throw Error("Service Unavailable");
      throw Error(error.response.data);
    }
  }
};