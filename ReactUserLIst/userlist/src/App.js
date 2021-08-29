import React from 'react';
import {Fragment} from "react"
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Users } from './components/Users/Users.js';

import { UsersGrid } from './components/UsersGrid/UsersGrid.js';

function App() {
  return (
    <div className="App">
    <Fragment>
      <Header />
      <Users />
      <UsersGrid />
      <Footer />
      </Fragment>
    </div>
  );
}

export default App;