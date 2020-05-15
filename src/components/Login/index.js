import React from 'react'
import  Feedback  from '../Feedback'

const Login = ({ handleLogin, login, error }) => {

  return (
    <section className="modal">
    <p className="modal__intro">User Session</p>
      <div className="modal__box box">
      <input 
          className="box__input" 
          type="text" 
          name="username"
          placeholder="Enter username" 
          onChange={event => {
            event.preventDefault();
            handleLogin(event.target.value)
          }}
        />
        <input 
          className="box__send buttons__send" 
          type="button" 
          id="send"
          value="Send"
          onClick={event => {
            event.preventDefault()
            login();
          } }/>
      </div>
      {error && <Feedback message={error} />}
    </section>
  )
}
 
export default Login;

