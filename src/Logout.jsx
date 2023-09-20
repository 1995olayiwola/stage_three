import React from 'react';
import Parse from 'parse';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import Loading from './Loading';
import './Logout.css'; // Import the CSS file

const Logout = () => {
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  const user = Parse.User.current();

  return (
    <div className="container">
      <h1>Goodbye!</h1>
      <p>See you next time when you log in.</p>
      <Button onClick={() => {
        Parse.User.logOut();
        setLoading(true);
        history.push('/login');
      }}>Logout</Button>
    </div>
  )
}

export default Logout;
