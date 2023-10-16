import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Bienfaits from '../components/pages/Bienfaits';
import Homepage from '../components/pages/Homepage';
import Profile from '../components/pages/Profile';
import Recettes from '../components/pages/Recettes';
import Login from '../components/Forms/Login';
import Register from '../components/Forms/Register';
import EBook from '../components/pages/EBook';
import Navbar from '../components/NavBar/Navbar';
import { useState } from 'react';


function Layout() {
    const [user, setUser] = useState(null);
    const logout = () => {
        setUser(null);
    };

    return (
        <>
            {/* <Header/> */}
            <Routes>
                <Route path='/' 
                element={<Homepage 
                    user={user}
                    logout={logout}/>} > 
                </Route>
                
                <Route path='/Bienfaits' 
                element={<Bienfaits />} >
                </Route>


                <Route path='/Recettes'
                    element={<Recettes />} >
                </Route>

                <Route path='/Profile'
                    element={<Profile
                        user={user} />} >
                </Route>


                <Route path='/eBook'
                    element={<EBook />} >
                </Route>


                <Route path='/inscription'
                    element={<Register
                        user={user}
                        logout={logout} />}
                ></Route>


                <Route path='/connexion'
                    element={<Login
                        user={user}
                        logout={logout} />}>
                </Route>


                <Route path='/navbar'
                    element={<Navbar
                        user={user}
                        logout={logout} />}
                ></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default Layout;
