import './App.css';
import BasePage from './components/BasePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GraphWrapper from './components/GraphWrapper';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">


      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<BasePage/>}/>
        <Route path="/home" element={<BasePage/>}/>
        <Route path="/dashboard" element={<GraphWrapper />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
