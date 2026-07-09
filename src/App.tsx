import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/login";
import AdminDashboard from "./admin/pages/adminDashboard";
import ProtectedRoute from "./components/protectedRoutes";
import Books from "./pages/book";
import BookDetail from "./components/bookDetail";
import Reader from "./pages/Reader";
import About from "./pages/about";
import ContactPage from "./pages/contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/books/:slug" element={<BookDetail/>} />
          <Route path="/reader/:slug" element={<Reader/>} />
          <Route path="/uk-zadminpanel" element={<LogIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
