import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import AdminPage from './pages/adminPage';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path ="/admin/*" element={<AdminPage/>}/>
        <Route path ="/login" element={<LoginPage/>}/>
        <Route path ="/" element={<hi>Home</hi>}/>
        <Route path ="/*" element={<hi>404 Not Found ⁉️</hi>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

