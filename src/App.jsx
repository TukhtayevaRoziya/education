import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage/homePage'
import AdminFile from './pages/admin_file/admin_file'
import Ariza from './pages/ariza_page/ariza'
import QabulAdmin from './pages/qushma-talim-admin/qabulpageadmin'
import UserPage from './pages/user-page/userpage'
import UserPageForAdmin from './pages/userinadmin/userinadmin';
import Footer from './components/footer/footer'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/> }/>
        <Route path="/user/:id" element={<UserPage />} />
        <Route path='/user_for_admin/:id' element={<UserPageForAdmin/>}/>
        <Route path='/ariza' element={<Ariza />} />
        <Route path='/qabul' element={<QabulAdmin />} />
        <Route path="/admin/files" element={<AdminFile />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
