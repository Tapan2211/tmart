import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import Home from './components/home/Home';
import Cartitem from './components/CartItem/CartItem';

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Header />
    //   <ProductList />
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cartitem />} />
      </Routes>
    </Router>
  );
}

export default App;
