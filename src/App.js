import './App.css';
import React, { useEffect, useState } from "react";
import Login from './components/login';
import LoginSwitch from './components/LoginSwitch';
import SignUp from './components/signup';
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';
import Recipes from './components/Recipes';
import Upload from './components/upload';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories]= useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://klabu-backend-production.up.railway.app/categories`)
      .then(r => r.json())
      .then((data) => setCategories(data));
  }, []);
  // let navigate = useNavigate();
  useEffect(() => {
    fetch(`https://klabu-backend-production.up.railway.app/recipes`)
      .then(r => r.json())
      .then((data) => setRecipes(data));
  }, []);
  useEffect(() => {
    // auto-login
    fetch("https://klabu-backend-production.up.railway.app/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('user', JSON.stringify(user));
  // }, [user]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('user'));
  //   if (items) {
  //     setUser(items);
  //   }
  // }, []);
console.log(user);
  if (!user) return <LoginSwitch onLogin={setUser} />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        {/* <Route path='/signup' element={<SignUp />} /> */}
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path={`/:id`} element={<Detail user={user} />} />
        <Route path='/recipes' element={<Recipes recipes={recipes} categories={categories} user = {user}/>} />
        <Route path ='/upload' element={<Upload  setRecipes={setRecipes} recipes={recipes} user={user}/>} />
      </Routes>

    </>


  )
}


export default App;
