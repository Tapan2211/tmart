import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
