import { useEffect, useState } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NftDetails } from './pages/NftDetails'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
export type NFT = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  userId: number;
};

export type User = {
  email: string;
  name: string;
  password: string;
  id:number
  // nfts:NFT[]
};

function App() {
  const [user, setUser] = useState<null | User>();
  console.log(user)

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
        <Route path="/nfts/:id" element={ <NftDetails user={undefined} /> } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nfts/:id" element={ <NftDetails  user={user}/> } />
      </Routes>
    </div>
  );
}

export default App
