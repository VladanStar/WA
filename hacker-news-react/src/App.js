import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { NewsList } from './components/NewsList/NewsList';
 
function App() {
  return (
    <div className="App">
    <Header />
     <NewsList />
    <Footer />
    </div>
  );
}

export default App;
