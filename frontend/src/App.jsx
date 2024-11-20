import Navbar from "./components/navbar"
import Footer from "./components/Footer"
import Challenge from "./pages/Challenge"
import Features from "./container/Features"
import ChallengeList from "./container/ChallengeList"
import { Route, Routes} from 'react-router-dom'
function App() {

  return (
    <>

     <Navbar />

     <Routes>
  <Route path="/" element={
    <>
    <ChallengeList />
    <Features/>
    </>

  }/>
    <Route
      path="/challenge/:id"
      element={<Challenge />}
    />
    
</Routes>


     <Footer/>

    </>
  )
}

export default App
