  
import React, { Fragment, useState } from "react";

import  Header from "./Header/Header";

import  Footer  from "./Footer/Footer";

import UserList  from "./UserList/UserList";


function App() {
  const [isListView, setIsListView] = useState(true);
  console.log("App: ", isListView);
  const onLayoutChange = () => setIsListView(!isListView);
  return (
    <Fragment>
      <Header isListView={isListView} onLayoutChange={onLayoutChange} />
      <UserList isListView={isListView} />
      <Footer />
    </Fragment>
  );
}

export default App;