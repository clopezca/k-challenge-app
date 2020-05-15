import React, { useState, useEffect } from "react";
import { SessionAPI } from "../../insfrastructure/http/sessionAPI"
import { withRouter } from "react-router-dom"
import UserDetail from '../UserDetail';
import  Login  from "../Login/index.js"
import { UserSessionService } from '../../application/userSession-service/userSessionService';

const Home = () => {

  const [username, setUsername] = useState(null);
  const [usersession, setUserSession] = useState(null);
  const [error, setError] = useState(null);
  const sessionAPI = new SessionAPI();
  const userSessionService = new UserSessionService(sessionAPI); 

  useEffect(() => {
    setError()
  }, [])
   
  const login = async () => {
    try{
        const response = await userSessionService.addSession(username);
        getUserDetails(response.data)
    } catch ({message}){
      console.log(error)
      setError(message)
    }
  }

  const handleLogin = (username) => {
    setUsername(username)
  } 

  const getUserDetails = async (token) => {
    try{
      const response = await userSessionService.checkUserSession(username, token);
      setUserSession(response.data);
    }catch ({message}) {
      console.log(error)
      setError(message);
    }
  } 

  const handleLogout = () => {
    setUsername(null)
    setUserSession(null)
  }

  return (
    <>
      {!usersession && 
        <Login  
          handleLogin={handleLogin}
          login={login}
          setError={setError}
          username={username}
          error={error}
        />}
      {usersession && 
        <UserDetail
          handleLogout={handleLogout}
          setError={setError}
          usersession={usersession} 
          error={error}
        />}
    </>
  );
};

export default withRouter(Home)