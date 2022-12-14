import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import Landing from './components/Landing';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Landing/> 
    </QueryClientProvider>         
    </div>
  );
}

export default App;
