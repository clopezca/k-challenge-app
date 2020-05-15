import React from 'react';
import moment from 'moment';

const UserDetail = ({ handleLogout, usersession }) => {

  let date =moment().format('MMMM Do YYYY, h:mm:ss a');

  return ( 
    <>
      <section className="detail">
        <section className="detail-left">
          <h1 className="detail-left__title">User session details</h1>
          <h3 className="detail-left__field">User session date:</h3>
            <h5 className="detail-left__info">{date}</h5>
          <h3 className="detail-left__field">User session token:</h3>
            <h5 className="detail-left__info">{usersession.token}</h5>
          <h3 className="detail-left__field">User session username:</h3>
            <h5 className="detail-left__info">{usersession.username}</h5>
        </section>
        <section className="detail-close">
          <a  href="#!" className="detail-close__close"onClick={event => { event.preventDefault()
          handleLogout()}}>Logout</a>
        </section>
      </section>
    </>
    )
}
 
export default UserDetail;