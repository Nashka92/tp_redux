import "./App.css";
import AddProduct from "./components/Product/AddProduct";
import ProductHeader from "./components/Product/ProductHeader";
import ProductList from "./components/Product/ProductList";

function App() {
  return (
    <div className="App">
      <ProductHeader/>
      <ProductList />
      <AddProduct />
    </div>
  );
}

export default App;
