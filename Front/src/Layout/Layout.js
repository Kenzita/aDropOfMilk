import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Bienfaits from '../components/pages/Bienfaits';
import Homepage from '../components/pages/Homepage';
import Profile from '../components/pages/Profile';
import Recettes from '../components/pages/Recettes'
import Login from '../components/Forms/Login'
import Register from '../components/Forms/Register'
import eBook from '../components/pages/eBook';



function Layout() {
    return (
        <>
        {/* <Header/> */}
<Routes>
    <Route path='/' element={<Homepage/>} > </Route>
    <Route path='/Bienfaits' element={<Bienfaits/>} ></Route>
    <Route path='/Recettes' element={<Recettes/>} ></Route>
    <Route path='/Profile' element={<Profile/>} ></Route>
    <Route path='/eBook' element={<eBook/>} ></Route>
    <Route path='/inscription' element={<Register/>} ></Route>
    <Route path='/connexion' element={<Login/>} ></Route>
</Routes>
<Footer/>
        </>
    );
}

export default Layout;
