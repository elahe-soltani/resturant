import React from 'react';
import { Route , Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/Login'
import Home from './components/Home'
import Signup from './components/Signup';
import store from './redux/store';
const App = () => {
    return (
        <div>
            <Provider store={store}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home/:id' element={<Home />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
           </Routes>
            </Provider>
            
        </div>
        
    );
};

export default App;