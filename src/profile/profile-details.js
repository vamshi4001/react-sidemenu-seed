import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css'

function ProfileDetails(props) {
  const initialUserState = {
    user:{},
    loading: true
  }

  const [user, setUser] = useState(initialUserState);
  useEffect(()=>{
    const getUser = async() => {
      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`);
      setUser(data);
    }

    getUser();
  }, [props.match.params.id])
  return (
    <div className="mt-4">
      <button className="button ml-4">Back</button>
      {user.loading?
      (
        <div>Loading...</div>
      ):(
        <div className="container-fluid">
          <h1 className="mt-4">Github Profile of {props.match.params.id}</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Website</th>
                <th>Followers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.location}</td>
                <td><a href={user.blog}>{user.blog}</a></td>
                <td>{user.followers}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
  
}

export default ProfileDetails;