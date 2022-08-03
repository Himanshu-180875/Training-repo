import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import UserData from "./pages/UserData";
import PostProvider from "./context/PostProvider";
import AuthProvider  from "./context/AuthProvider";
import PlainTextProvider from "./context/PlainTextProvider";
import ShowModalProvider from "./context/ShowModalProvider";
import ViewModalProvider from "./context/ViewModalProvider";
import {ThemeProvider} from './context/themeContext';
import { LanguageProvider } from "./context/LanguageProvider";

//Routing for application
function App() {
  return (
    <ThemeProvider>
    <PostProvider>
    <AuthProvider>
    <PlainTextProvider>
    <ShowModalProvider>
    <ViewModalProvider>
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts" element={<UserData />} />
      </Routes>
      <ToastContainer autoClose={1000} position="top-center" />

    </BrowserRouter>
    </LanguageProvider>
    </ViewModalProvider>
    </ShowModalProvider>
    </PlainTextProvider>
    </AuthProvider>
    </PostProvider>
    </ThemeProvider>
  );
}

export default App;
