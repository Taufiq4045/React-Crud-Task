import React, {useEffect} from 'react';
import NavHead from './pages/nav';
import axios from 'axios';
import {Route, Switch, Redirect, useLocation } from 'react-router-dom';
import User from './pages/users';
import Profile from './pages/profile';
import EditProfile from './pages/editProfile';
import EditUser from './pages/editUser';
import AddUser from './pages/addUser';


export const UserContext = React.createContext([]);


function App() {

  const [users, setUsers] = React.useState([])
  const path = useLocation().pathname;
  console.log(path);

  const getUserList = async () => {
    let response = await axios.get('https://611f26749771bf001785c74e.mockapi.io/users');
    console.log(response);
    setUsers(response.data);
  }

  useEffect(() => {
    getUserList()
  },[]);


  return (

    <div >
      <UserContext.Provider value={
        {user:users,
        getUser:getUserList}
      }>
        <NavHead />
        {/* <Router> */}
          <Switch>
            <Route exact path='/' render= {() =>{return <Redirect to='/users' />}} />
            <Route path='/users' component={User} />
            <Route exact path='/profile/:id' component={Profile} />
            <Route exact path='/profile/:id/edit' component={EditProfile} />
            <Route exact path='/create-user' component={AddUser} />
            <Route exact path='/edit-user/:id' component={EditUser} />
          </Switch>
        {/* </Router> */}
      </UserContext.Provider>
    </div>
   );
}

export default App;