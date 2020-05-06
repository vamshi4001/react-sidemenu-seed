import React from 'react';
import Container from '../container/container'
import Sidemenu from '../sidemenu/sidemenu'

function Home() {
  return (
    <div className="App">
      <div className="d-flex wrapper">
        <Sidemenu/>
        <Container/>
      </div>
    </div>
  );
}

export default Home;
