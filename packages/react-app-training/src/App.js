import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import UserData from './pages/UserData';

//Routing for application
function App() {
  return (
    <BrowserRouter>

        <Routes>
            <Route path="/" element={
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md space-y-8">
              <LoginPage />
              </div>
              </div>
            } />

            <Route path="/signup" element={ 
            <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md space-y-8">
              <SignupPage />
              </div>
              </div>
            }/>
            
            <Route path="/posts" element={<UserData />} />

        </Routes>
      <ToastContainer autoClose={1000} position="top-center"/>

    <Routes>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
