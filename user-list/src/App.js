import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Users } from './components/Users/Users';
import { UsersGrid } from './components/UsersGrid/UsersGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <UsersGrid />
      <Footer />
    </div>
  );
}

export default App;
