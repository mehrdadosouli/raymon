import { Route, Routes } from 'react-router-dom';  
import Header from './layouts/Header';  
import Footer from './layouts/Footer';  
import NotFound from './pages/NotFound';  
import Home from './pages/Home';  
import Login from './pages/Login';  
import './App.css';  
import { useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';  
import { changeThemeState } from './redux/features/counter/generalSlice';  

function App() {  
  const dispatch = useDispatch();  
  const theme = useSelector((state) => state.general.theme);  

  const changeTheme = () => {  
    if (localStorage.getItem('theme') == 'light' ) {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark');
      dispatch(changeThemeState('dark'))
    }else{
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light');
      dispatch(changeThemeState('light'))
    }
  };  
  

  useEffect(() => {  
    // document.documentElement.classList.remove('light', 'dark');  
    let themes=localStorage.getItem('theme')
    document.documentElement.classList.add(themes);  

  }, []);  

  return (  
    <>  
      <Header changeTheme={changeTheme} theme={theme} />  
      <Routes>  
        <Route path='/' element={<Home />} />  
        <Route path='/login' element={<Login />} />  
        <Route path='*' element={<NotFound />} />  
      </Routes>  
      <Footer />  
    </>  
  );  
}  

export default App;