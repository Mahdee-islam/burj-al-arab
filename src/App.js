import React from 'react';
import {
  BrowserRouter as Router, Route,
  Routes
} from "react-router-dom";
import './App.css';
import Book from './components/Book/Book';
import Dashboard from './components/DashBoard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
     <AuthProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path="/home" element = {  <Home /> }/>
             
            
            <Route path="/login" element = {  <Login /> }/>
             
            
            <Route path="/book/:bedType" element = { <Book />} />
             
           
            <Route exact path="/" element = { <Home />}/>
            <Route path= "/placeorder" element = {
              <RequiredAuth>
                <PlaceOrder/>
              </RequiredAuth>
            }></Route>
            <Route path= "/dashboard" element = {
              <RequiredAuth>
                <Dashboard/>
              </RequiredAuth>
            }></Route>
              
           
          </Routes>
      </Router>
     </AuthProvider>
  );
}

export default App;
