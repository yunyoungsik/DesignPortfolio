// pages
import { Route, Routes } from 'react-router-dom';
// components
import Header from './components/Header/Header';
// pages
import HomePage from './Pages/Home/HomePage';
import SubPage from './Pages/Sub/SubPage';
import DetailPage from './Pages/Detail/DetailPage';

function App() {
  return (
    <>
      <div className="wrap">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sub" element={<SubPage />} />

          {/* 디테일페이지 */}
          <Route path="/sub/:title" element={<DetailPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
