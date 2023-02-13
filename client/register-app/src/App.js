import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './components/homePage';
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage></HomePage>;
    </QueryClientProvider>
  );
}

export default App;
