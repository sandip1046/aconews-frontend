import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import NewsDetailsPage from './component/NewsDetailsPage';
import NavBar from './component/NavBar';
import Footer from './component/Footer';


function App() {
  return (
    <Router>
      <Routes>
        
        
        <Route path="/" element={
          <div>
            <NavBar />
            <HomePage />
            <Footer /></div>} />
        <Route path="/news/:id" element={<NewsDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
