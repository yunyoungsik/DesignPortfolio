// pages
import { Route, Routes } from 'react-router-dom';
// components
import Header from './components/Header/Header';
// pages
import HomePage from './Pages/Home/HomePage';
import Webpage from './Pages/Web/Webpage';

function App() {
  return (
    <>
      <div className="wrap">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web" element={<Webpage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
