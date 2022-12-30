import { Route, Routes } from 'react-router-dom'
import CreateNFT from './Components/CreateNFT'
import Footer from './Components/Footer'
import LandingPage from "./Components/LandingPage"
import MyList from './Components/MyList'
import NavBar from "./Components/NavBar"
import NFTDetails from './Components/NFTDetails'

const App = () => {
  return (
    <div className="min-h-screen">
      <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nfts/:id" element={<NFTDetails />} />
          <Route path="/my-list" element={<MyList />} />
        </Routes>
        <CreateNFT/>
      <Footer/>
    </div>
  )
}

export default App
