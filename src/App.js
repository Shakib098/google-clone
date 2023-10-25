import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
