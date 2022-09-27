import { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { Home } from './pages/Home'
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
      <Header />

      <Routes>
        <Route />
        <Route
          path="/signup"
          element={<SignUp user={user} setUser={setUser} />}
        />
        <Route
          path="/signin"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App