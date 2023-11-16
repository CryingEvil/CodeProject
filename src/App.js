import './App.css';

import LoginPage from './pages/main-page/login-page/login';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <AppHead /> */}
      <div className="content">
        <LoginPage />
      </div>
    </div>

  );
}

export default App;
