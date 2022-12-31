import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getAllNFTs, getMyNFTs, isWallectConnected } from './Blockchain.services'
import Alert from './Components/Alert'
import CreateNFT from './Components/CreateNFT'
import Footer from './Components/Footer'
import LandingPage from "./Components/LandingPage"
import Loading from './Components/Loading'
import MyList from './Components/MyList'
import NavBar from "./Components/NavBar"
import NFTDetails from './Components/NFTDetails'
import UpdateNFT from './Components/UpdateNFT'

const App = () => {
  useEffect(async() => {
    await isWallectConnected()
    // await getMyNFTs()
    await getAllNFTs()
  }, [])
  
  return (
    <div className="min-h-screen">
      <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nfts/:id" element={<NFTDetails />} />
          <Route path="/my-list" element={<MyList />} />
        </Routes>
        <CreateNFT/>
        <UpdateNFT/>
      <Footer/>
      <Loading/>
      <Alert/>      
    </div>
  )
}

export default App
