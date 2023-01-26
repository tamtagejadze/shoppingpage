import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Landing from './components/Landing';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter> 
    </QueryClientProvider>         
    </div>
  );
}

export default App;
