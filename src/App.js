import './App.css';
import AppBody from './pages/react-body/AppBody';
import AppHead from './pages/react-header/AppHeader';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
   <div className="App">
     <AppHead/>
     <div className="content">
       <AppBody/>
     </div>
   </div>
   
  );
}

export default App;
