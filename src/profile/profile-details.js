import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Post} from './post';
import {connect} from 'react-redux';
import { fetchPosts } from './actions/postActions';

// import './profile.css'

function ProfileDetails(props) {
  const initialUserState = {
    user:{},
    loading: true
  }

  const [user, setUser] = useState(initialUserState);
  const {dispatch, loading, hasErrors, posts} = props;
  useEffect(()=>{
    // dispatch(fetchPosts())
    const getUser = async() => {
      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`);
      setUser(data);
    }

    getUser();
  }, [props.match.params.id])

  useEffect(()=>{
    dispatch(fetchPosts())    
  }, [dispatch])


  const renderPosts = () =>{
    if(loading) return (<p>Loading posts</p>)    
    if(hasErrors) return (<p>Failed to load posts</p>)
    return posts.map(post => <Post key={post.id} post={post}></Post>)
  }
  return (
    <div className="m-4">
      {/* <button className="button ml-4">Back</button> */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Github</a>
        </li>
        <li className="nav-item" role="presentation">
          <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Posts</a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
        <section>
          <h2>Posts</h2>
          {renderPosts()}
        </section>
        </div>
        <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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
      </div>            
    </div>
  )
}

const mapStateToProps = function(state){
  return{
    loading: state.posts.loading,
    hasErrors: state.posts.hasErrors,
    posts: state.posts.posts,
    props: state.props
  }
}

export default connect(mapStateToProps)(ProfileDetails);