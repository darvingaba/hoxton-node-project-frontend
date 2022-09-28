import { useEffect, useState } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { NftDetails } from './pages/NftDetails'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

export type User = {
  email: string;
  name: string;
  password: string;
};

function App() {
  const [user, setUser] = useState<null | User>();

  useEffect(()=>{
    if(localStorage.token){
      fetch("http://localhost:3456/validate",{
        headers:{
          "Authorization":localStorage.token
        }
      }).then(resp=>resp.json())
      .then(info=>{
        if(info.error){
          alert(info.error)
        }else{
          setUser(info.user)
          localStorage.token=info.token
        }
      })
    }
  },[])

  return (
    <div className="App">
      <Header setUser={setUser} user={user}/>

      <Routes>
        <Route />
        <Route index element={<Navigate to={"/home"}/>} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/signup"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route
          path="/signin"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/nfts/:id" element={ <NftDetails /> } />
      </Routes>
    </div>
  );
}

export default App
