import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

/* container */
import Home from "./container/Home";
import Trip from "./container/Trip";
import Plane from "./container/Plane";
import Hotels from "./container/Hotels";
import Food from "./container/Food";

/* Layout */
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar";

/* Pages */
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
      </div>

      <Route path="/" component={Home} exact={true} />
      <Route path="/Trip" component={Trip} />
      <Route path="/Plane" component={Plane} />
      <Route path="/Hotel" component={Hotels} />
      <Route path="/Food" component={Food} />
      <Route path="/LoginPage" component={LoginPage} />
      <Route path="/RegisterPage" component={RegisterPage} />
    </Router>
  );
}

export default App;
