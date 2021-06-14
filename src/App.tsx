import { Home } from "pages";
import SignUp from "pages/SignUp";
import React from "react";
import { Route } from "react-router-dom";

const App: React.FC = () => {

  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={SignUp}/>
    </div>
  );
};

export default App;
