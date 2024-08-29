import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Register from './component/Register';
import User from './component/User';
import Update from './component/Update';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About></About>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/user" element={<User></User>} />
          <Route path="/update/:id" element={<Update></Update>} />

        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
