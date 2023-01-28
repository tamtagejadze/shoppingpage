import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Landing from './components/Landing';
import Product from './components/Product/Product';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/product/:productId' element={<Product/>} />
        </Routes>
      </BrowserRouter> 
    </QueryClientProvider>         
    </div>
  );
}

export default App;
